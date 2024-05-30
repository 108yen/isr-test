import { Metadata } from "next"
import Timer from "@/components/timer"
import { unstable_cache } from "next/cache"

export const metadata: Metadata = {
  title: "unstable cache",
}

const cachedTime = unstable_cache(
  async () => {
    return new Date().getTime()
  },
  ["date"],
  {
    revalidate: 60,
  },
)

export default async function Page() {
  const date = new Date(await cachedTime())

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
