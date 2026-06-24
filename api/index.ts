/**
 * Vercel Serverless Entry Point
 * File location: api/index.ts (repo root)
 *
 * All /api/* requests on Vercel are routed here.
 *
 * HOW TO ADD YOUR ROUTES:
 * As you build routes in artifacts/api-server/src/routes/,
 * import and register them here:
 *
 *   import myRoutes from "../artifacts/api-server/src/routes/myRoutes.js";
 *   app.use("/api", myRoutes);
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "*",
    credentials: true,
  })
);
app.use(express.json());

// Health check — matches your OpenAPI spec GET /api/healthz
app.get("/api/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

// ✏️ ADD YOUR ROUTES BELOW as you build them:
// import studyRoutes from "../artifacts/api-server/src/routes/study.js";
// app.use("/api", studyRoutes);

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
