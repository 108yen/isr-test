import Timer from "@/components/timer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ssr",
}

export default function Page() {
  const date = new Date()

  return (
    <main>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
