import Link from "next/link"

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/page-cache">page cache</Link>
        </li>
        <li>
          <Link href="/unstable-cache">unstable cache</Link>
        </li>
      </ul>
    </main>
  )
}
