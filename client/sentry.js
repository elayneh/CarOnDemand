import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/browser";

Sentry.init({
  dsn: "https://3d68f5d171cda6ffbe85d47399f44ea4@o4506246973489152.ingest.sentry.io/4506246982795264",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
