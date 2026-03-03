import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CoachPro - Professional Coaching Platform",
  description: "A comprehensive coaching platform with live leaderboards, study materials, and AI-powered features",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">{children}</div>
      </body>
    </html>
  )
}
