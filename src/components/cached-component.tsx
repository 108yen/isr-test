import { cacheLife } from "next/dist/server/use-cache/cache-life"
import { sleep } from "./sleep"

export async function CachedComponent() {
  "use cache"
  cacheLife({
    stale: 3600, // 1 hour
    revalidate: 900, // 15 minutes
    expire: 86400, // 1 day
  })

  await sleep(2000)

  console.log("Rendered cached component")

  return <p>This is cached component</p>
}
