import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

type Params = { reportId: string }; // ✅ Explicitly defining params type

export async function GET(
  request: NextRequest,
  context: { params: Params } // ✅ Correctly typing context
) {
  try {
    const { reportId } = context.params;

    if (!reportId) {
      return NextResponse.json({ error: "Missing reportId" }, { status: 400 });
    }

    const report = await prisma.report.findUnique({
      where: { reportId }, // ✅ Uses correct field
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error fetching report:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
