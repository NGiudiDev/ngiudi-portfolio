import { useEffect } from "react";

import LogRocket from "logrocket";

export function useLogRocket(appId: string) {
  useEffect(() => {
    if (!appId) return;
    
    LogRocket.init(appId);
  }, [appId]);
}
