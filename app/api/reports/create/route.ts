import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const {
      reportId,
      type,
      specificType,
      title,
      description,
      location,
      latitude,
      longitude,
      image,
      status,
    } = await request.json();

    if (!reportId || !title || !description || !specificType) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const report = await prisma.report.create({
      data: {
        reportId,
        type: Object.values(ReportType).includes(type)
          ? (type as ReportType)
          : ReportType.NON_EMERGENCY,
        title,
        description,
        reportType: specificType,
        location,
        latitude: latitude ?? null,
        longitude: longitude ?? null,
        image: image ?? null,
        status: (status as ReportStatus) || ReportStatus.PENDING,
      },
    });

    return NextResponse.json({
      success: true,
      reportId: report.reportId,
      message: "Report submitted successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error creating report:", error.message);
      return NextResponse.json(
        {
          success: false,
          error: error.message || "Failed to submit report",
        },
        { status: 500 }
      );
    }

    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit report",
      },
      { status: 500 }
    );
  }
}
