"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CalendlyPage from "@/components/Calendy";
import ContentShell from "@/components/ContentShell";

const MeetingPage = () => {
    return (
      <ContentShell>
        <CalendlyPage />
      </ContentShell>
    );
  };
  
  export default MeetingPage;