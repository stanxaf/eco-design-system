import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export const hoverCard = {
  name: "hover-card",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Hover Card</h4>
                <p className="text-sm text-muted-foreground">
                  This is a hover card that appears when you hover over the button.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    ),
    Default: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Hover Card</h4>
              <p className="text-sm text-muted-foreground">
                This is a hover card that appears when you hover over the button.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
  },
};
