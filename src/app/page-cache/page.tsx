import { cache } from "react"
import { Metadata } from "next"
import Timer from "@/components/timer"

export const revalidate = 60

export const metadata: Metadata = {
  title: "page cache",
}

const cachedDate = cache(() => new Date())

export default function Page() {
  const date = cachedDate()

  return (
    <main>
      <p>revalidate 60s</p>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
