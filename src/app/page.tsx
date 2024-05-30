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
        <li>
          <Link href="/ssr">ssr</Link>
        </li>
        <li>
          <Link href="/dynamic-route/0">dynamic route</Link>
        </li>
      </ul>
    </main>
  )
}
