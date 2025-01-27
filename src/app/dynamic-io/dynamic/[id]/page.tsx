import { CachedComponent } from "@/components/cached-component"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div>
      dynamic page id:{id}
      <CachedComponent />
    </div>
  )
}
