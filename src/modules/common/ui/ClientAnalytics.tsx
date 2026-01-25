"use client";

import { useGoogleAnalytics } from "@/modules/common/hooks/useGoogleAnalytics";

interface ClientAnalyticsProps {
  measurementId: string;
}

export function ClientAnalytics({ measurementId }: ClientAnalyticsProps) {
  useGoogleAnalytics(measurementId);
  return null;
}
