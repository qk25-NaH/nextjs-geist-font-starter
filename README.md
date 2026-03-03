# CoachPro — Next.js Coaching App Starter

A full-featured coaching platform starter built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Pusher** for real-time communication.

## What Is This Repo?

This repository is a starter/template for a **coaching application** that includes:

- 🏆 **Live Leaderboard** — Real-time rankings powered by Pusher
- 💬 **Live Support Chat** — Real-time chat between users and support agents via Pusher
- 💳 **Payment Integration** — Mock payment flow (ready for Stripe)
- 🤖 **AI Features Placeholder** — Reserved section for AI-powered coaching features
- 📚 **Study Materials** — Organised resource library for students
- 👤 **User Dashboard** — Personal progress overview
- 🔐 **Authentication System** — Login/register with protected routes

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Real-time | Pusher (Channels) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Icons | Lucide React |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

```env
PUSHER_APP_ID=your_pusher_app_id
PUSHER_SECRET=your_pusher_secret
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
```

See [PUSHER_SETUP.md](./PUSHER_SETUP.md) for a detailed Pusher configuration guide.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.
> **Note:** The dev script uses `PORT=8000` (configured in `package.json`), so the app runs on port **8000** instead of the Next.js default of 3000.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main coaching dashboard (tabs)
│   └── api/
│       ├── pusher/         # Pusher server configuration
│       ├── chat/           # Chat API endpoints
│       └── leaderboard/    # Leaderboard API endpoints
├── hooks/
│   └── use-pusher.ts       # Pusher client hooks (useChat, useLeaderboard)
└── components/ui/          # shadcn/ui components
```

## Real-time Features

- **Chat channel** (`chat-channel`) — broadcasts `new-message` events
- **Leaderboard channel** (`leaderboard-channel`) — broadcasts `ranking-update` events

## Roadmap

See [TODO.md](./TODO.md) for the full feature roadmap and development phases.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
