import { sleep } from "@/components/sleep"
import Timer from "@/components/timer"
import { Metadata } from "next"
import { cache } from "react"

export const revalidate = 300

export function generateStaticParams() {
  return Array.from({ length: 5 }, (_, index) => ({ slug: index.toString() }))
}

export const metadata: Metadata = {
  title: "static route",
}

const cachedDate = cache(async () => new Date())

export default async function Page({ params }: { params: { slug: string } }) {
  // await sleep(2000)
  
  const { slug } = params
  const date = await cachedDate()

  console.log(`Static-route page loaded. slug: ${slug}`)

  return (
    <main>
      <p>slug: {slug}</p>
      <p>revalidate 5m (generated static only page 0~4)</p>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
