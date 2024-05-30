import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/page-cache">page cache</Link>
      <Link href="/unstable-cache">unstable cache</Link>
    </main>
  )
}
