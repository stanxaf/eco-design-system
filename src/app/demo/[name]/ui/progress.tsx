import { Progress } from "@/components/ui/progress";

export const progress = {
  name: "progress",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px] space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>25%</span>
            </div>
            <Progress value={25} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>50%</span>
            </div>
            <Progress value={50} className="w-full" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <Progress value={75} className="w-full" />
          </div>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>25%</span>
          </div>
          <Progress value={25} className="w-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>50%</span>
          </div>
          <Progress value={50} className="w-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="w-full" />
        </div>
      </div>
    ),
  },
};
