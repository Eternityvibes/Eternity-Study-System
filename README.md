# Eternity Study System

## 🚀 Deployed on Vercel

### Setup

1. **Database**: Create a free Postgres on [neon.tech](https://neon.tech)
2. **Vercel**: Import this repo at [vercel.com/new](https://vercel.com/new)
3. **Env vars** in Vercel dashboard:
   - `DATABASE_URL` = your Neon connection string
   - `NODE_ENV` = `production`
   - `FRONTEND_URL` = your Vercel URL

### Local Development

```bash
# Install deps
pnpm install

# Terminal 1 — API (port 5000)
pnpm dev:api

# Terminal 2 — Frontend (port 3000)
pnpm dev:frontend
```

### Push DB schema

```bash
DATABASE_URL=your_url pnpm db:push
```

### Add a new API route

1. Create `artifacts/api-server/src/routes/yourRoute.ts`
2. Register it in `api/index.ts`
3. Add it to the OpenAPI spec in `lib/api-spec/openapi.yaml`
4. Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### Stack
- **Frontend**: React 19 + Vite + TailwindCSS + shadcn/ui
- **Backend**: Express 5 (Vercel serverless)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod
- **Package manager**: pnpm workspaces
