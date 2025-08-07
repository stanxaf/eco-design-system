import { AspectRatio } from "@/components/ui/aspect-ratio";

export const aspectRatio = {
  name: "aspect-ratio",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              16:9 Aspect Ratio
            </div>
          </AspectRatio>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px]">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            16:9 Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    ),
    Square: (
      <div className="w-[200px]">
        <AspectRatio ratio={1} className="bg-muted">
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            Square
          </div>
        </AspectRatio>
      </div>
    ),
  },
};
