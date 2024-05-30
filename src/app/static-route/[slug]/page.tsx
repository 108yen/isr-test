import Timer from "@/components/timer"
import { Metadata } from "next"
import { cache } from "react"

export const revalidate = 60

export function generateStaticParams() {
  return [{ slug: "0" }]
}

export const metadata: Metadata = {
  title: "static route",
}

const cachedDate = cache(async () => new Date())

export default async function Page() {
  const date = await cachedDate()

  return (
    <main>
      <p>revalidate 60s (only page 0)</p>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
