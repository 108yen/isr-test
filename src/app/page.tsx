import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="https://github.com/108yen/isr-test">github</Link>
      <ul>
        <li>
          <Link href="/dynamic-io/static">static component</Link>
        </li>
        <li>
          <Link href="/dynamic-io/dynamic/1">dynamic component 1</Link>
        </li>
        <li>
          <Link href="/dynamic-io/dynamic/2">dynamic component 2</Link>
        </li>
        <li>
          <Link href="/dynamic-io/dynamic/3">dynamic component 3</Link>
        </li>
      </ul>
    </main>
  )
}
