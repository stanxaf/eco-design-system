import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

export const collapsible = {
  name: "collapsible",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <Collapsible className="w-[350px] space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Click to expand
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              This is the collapsible content. It can contain any elements you want.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    ),
    Default: (
      <Collapsible className="w-[350px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Click to expand
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 text-sm">
            This is the collapsible content. It can contain any elements you want.
          </div>
        </CollapsibleContent>
      </Collapsible>
    ),
  },
};
