import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma"; // Ensure correct Prisma client import
import { authOptions } from "@/lib/auth";
import { ReportType, ReportStatus } from "@prisma/client"; // Import the enums

export async function GET(req: Request) {
  try {
    // Check session for authentication
    const session = await getServerSession(authOptions);
    console.log("Session Data:", session);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.log("Session Data:", session);
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const type = searchParams.get("type");

    // Validate and ensure status and type match their respective enums
    const validStatus =
      status && Object.values(ReportStatus).includes(status as ReportStatus)
        ? (status as ReportStatus)
        : undefined;

    const validType =
      type && Object.values(ReportType).includes(type as ReportType)
        ? (type as ReportType)
        : undefined;

    // Build the `where` clause with only valid enum values
    const where: {
      status?: ReportStatus;
      type?: ReportType;
    } = {};

    if (validStatus) where.status = validStatus;
    if (validType) where.type = validType;

    // Fetch reports with the dynamically built `where` clause
    const reports = await Promise.race([
      prisma.report.findMany({
        where,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          reportId: true,
          type: true,
          title: true,
          description: true,
          location: true,
          latitude: true,
          longitude: true,
          image: true,
          status: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database timeout")), 15000)
      ),
    ]);

    return NextResponse.json(reports);
  } catch (error) {
    console.error("Failed to fetch reports:", error);
    return NextResponse.json(
      { error: "Failed to fetch reports" },
      { status: 500 }
    );
  } finally {
    if (process.env.VERCEL) {
      await prisma.$disconnect();
    }
  }
}
