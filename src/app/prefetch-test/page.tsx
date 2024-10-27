import Link from "next/link"

export default function Page() {
  const arr = Array.from({ length: 5 }, (_, index) => index)

  return (
    <main>
      <ul>
        {arr.map((value) => (
          <li key={value}>
            <Link href={`/static-route/${value}`}>
              {`/static-route/${value}`}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {arr.map((value) => (
          <li key={value}>
            <Link href={`/dynamic-route/${value}`}>
              {`/dynamic-route/${value}`}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {arr.map((value) => (
          <li key={value}>
            <Link href={`/dynamic-route/isr/${value}`}>
              {`/dynamic-route/isr/${value}`}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {arr.map((value) => (
          <li key={value}>
            <Link href={`/dynamic-route/unstable-cache/${value}`}>
              {`/dynamic-route/unstable-cache/${value}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
