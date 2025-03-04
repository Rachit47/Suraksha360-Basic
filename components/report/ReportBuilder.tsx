"use client";
import React from "react";
import { useState } from "react";
import { ReportForm } from "./ReportForm";
import { ReportSubmitted } from "./ReportFormCompleted";

type ReportData = {
  reportId: string;
  type: "EMERGENCY" | "NON_EMERGENCY";
  specificType: string;
  title: string;
  description: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  image: string | null; // Allow null values
  status: "PENDING" | "IN_PROGRESS" | "RESOLVED" | "DISMISSED";
  createdAt: string;
  updatedAt: string;
};

export function ReportBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState<ReportData | null>(null);

  const handleStepComplete = async (data: Partial<ReportData>) => {
    setReportData((prev) => ({
      reportId: prev?.reportId ?? "",
      type: prev?.type ?? "NON_EMERGENCY",
      specificType: prev?.specificType ?? "",
      title: prev?.title ?? "",
      description: prev?.description ?? "",
      location: prev?.location ?? "",
      latitude: prev?.latitude ?? null,
      longitude: prev?.longitude ?? null,
      image: prev?.image ?? "", // Default empty string to match expected type
      status: prev?.status ?? "PENDING",
      createdAt: prev?.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...data, // Overwrite with incoming data
    }));

    if (currentStep === 4) return;
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      {currentStep === 1 && (
        <ReportForm
          onComplete={(data) => handleStepComplete(data as ReportData)}
        />
      )}
      {currentStep === 2 && reportData && (
        <ReportSubmitted
          data={reportData}
          onComplete={(data) => handleStepComplete(data as ReportData)}
        />
      )}
    </div>
  );
}
