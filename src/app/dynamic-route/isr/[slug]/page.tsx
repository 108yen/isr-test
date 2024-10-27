import { sleep } from "@/components/sleep"
import Timer from "@/components/timer"
import { Metadata } from "next"

export const revalidate = 300
export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "dynamic route on isr",
}

export default async function Page({ params }: { params: { slug: string } }) {
  await sleep(2000)

  const { slug } = params
  const date = new Date()

  console.log(`Dynamic-route on isr page loaded. slug: ${slug}`)

  return (
    <main>
      <p>slug: {slug}</p>
      <p>revalidate 5m</p>
      <p>dynamic: force-static</p>
      <p>
        seconds since update: <Timer date={date} />
      </p>
      <p>updated: {date.toString()}</p>
    </main>
  )
}
