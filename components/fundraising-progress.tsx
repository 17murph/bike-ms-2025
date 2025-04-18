import { Progress } from "@/components/ui/progress"

export function FundraisingProgress({ current, goal }: { current: number; goal: number }) {
  const percentage = (current / goal) * 100

  return (
    <div className="space-y-2">
      <Progress value={percentage} className="h-4" />
    </div>
  )
}
