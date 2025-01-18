import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="https://github.com/108yen/isr-test">github</Link>
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
        <li>
          <Link href="/static-route/0">static route</Link>
        </li>
        <li>
          <Link href="/prefetch-test">prefetch test</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/env-test">environment test</Link>
        </li>
      </ul>
    </main>
  )
}
