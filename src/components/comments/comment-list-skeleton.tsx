import { Skeleton } from "@nextui-org/react";

export default function CommentListSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 w-40" />
      <div className="p-4 border mt-2 mb-1">
        <div className="flex gap-3">
          <Skeleton className="w-10 h-10" />
          <div className="flex-1 space-y-3">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-40 h-4" />
            <Skeleton className="w-24 h-4 ml-8" />
          </div>
        </div>
      </div>
      <div className="p-4 border mt-2 mb-1">
        <div className="flex gap-3">
          <Skeleton className="w-10 h-10" />
          <div className="flex-1 space-y-3">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-40 h-4" />
            <Skeleton className="w-24 h-4 ml-8" />
          </div>
        </div>
      </div>
    </div>
  )
}