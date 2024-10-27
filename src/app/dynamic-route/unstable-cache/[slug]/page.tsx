import { sleep } from "@/components/sleep"
import Timer from "@/components/timer"
import { Metadata } from "next"
import { unstable_cache } from "next/cache"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "dynamic route on unstable_cache",
}

const cachedTime = unstable_cache(
  async (slug: string) => {
    await sleep(2000)
    console.log(`Unstable_cache revalidated. slug: ${slug}`)

    return new Date().getTime()
  },
  [],
  {
    revalidate: 300,
  },
)

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const cachedDate = new Date(await cachedTime(slug))
  const date = new Date()

  console.log(`Dynamic-route on unstable_cache page loaded. slug: ${slug}`)

  return (
    <main>
      <p>slug: {slug}</p>
      <p>revalidate 5m</p>
      <p>dynamic: force-dynamic</p>
      <p>
        seconds since page update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
      <p>
        seconds since data update: <Timer date={cachedDate} />
      </p>
    </main>
  )
}
