/**
 * Express API Server
 *
 * - Locally: runs as a standalone server on PORT 5000
 * - On Vercel: imported by api/index.ts as a serverless function
 *
 * IMPORTANT: Do NOT call app.listen() unconditionally.
 * Always export `app` as default so Vercel can import it.
 */

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ─── Routes ──────────────────────────────────────────────────────────────────

// Health check — matches OpenAPI spec GET /api/healthz
app.get("/api/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

// ✏️ ADD YOUR ROUTES HERE as you build them, e.g.:
// import { studyRouter } from "./routes/study.js";
// app.use("/api", studyRouter);

// ─── Export app for Vercel serverless ────────────────────────────────────────
export default app;

// ─── Start server locally (not on Vercel) ────────────────────────────────────
if (process.env.NODE_ENV === "development" && !process.env.VERCEL) {
  const PORT = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });
}
