"use client";

import { useGoogleAnalytics } from "@/modules/common/hooks/useGoogleAnalytics";
import { useLogRocket } from "@/modules/common/hooks/useLogRocket";

interface ClientAnalyticsProps {
  measurementId: string;
  logRocketAppId: string;
}

export function ClientAnalytics(props : ClientAnalyticsProps) {
  useGoogleAnalytics(props.measurementId);
  useLogRocket(props.logRocketAppId);

  return null;
}
