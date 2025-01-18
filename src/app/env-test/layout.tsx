import { Metadata } from "next"

export const metadata: Metadata = {
  title: "test for vercel environment",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
