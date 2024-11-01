import { sleep } from "@/components/sleep"
import Timer from "@/components/timer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "dynamic route",
}

export default async function Page({ params }: { params: { slug: string } }) {
  await sleep(2000)

  const { slug } = params
  const date = new Date()

  console.log(`Dynamic-route page loaded. slug: ${slug}`)

  return (
    <main>
      <p>slug: {slug}</p>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
