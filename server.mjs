import { serve } from "srvx";
import { serveStatic } from "srvx/static";
import app from "./dist/server/server.js";

const staticMiddleware = serveStatic({ dir: "./dist/client" });

serve({
  fetch: async (req, next) => {
    const staticRes = await staticMiddleware(req, () => app.fetch(req));
    return staticRes;
  },
  port: process.env.PORT || 3000,
});