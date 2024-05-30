import { cache } from "react"
import { Metadata } from "next"
import Timer from "@/components/timer"

export const revalidate = 60

export const metadata: Metadata = {
  title: "page cache",
}

const cachedDate = cache(async () => new Date())

export default async function Page() {
  const date = await cachedDate()

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
