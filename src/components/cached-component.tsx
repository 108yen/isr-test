import { cacheLife } from "next/dist/server/use-cache/cache-life"
import { sleep } from "./sleep"

export async function CachedComponent() {
  "use cache"
  cacheLife("max")

  await sleep(2000)

  console.log("Rendered cached component")

  return <>This is cached component</>
}
