import { CachedComponent } from "@/components/cached-component"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main>
      <p>dynamic page id: {id}</p>
      <CachedComponent />
    </main>
  )
}
