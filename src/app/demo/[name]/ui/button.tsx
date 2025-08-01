import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Loader2Icon, GitBranch } from "lucide-react";

export const button = {
  name: "button",
  components: {
    Default: <Button>Button</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Destructive: <Button variant="destructive">Destructive</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Ghost: <Button variant="ghost">Ghost</Button>,
    Link: <Button variant="link">Link</Button>,
    Icon: (
      <Button variant="secondary" size="icon" className="size-8">
        <ChevronRightIcon />
      </Button>
    ),
    WithIcon: (
      <Button variant="outline" size="sm">
        <GitBranch /> New Branch
      </Button>
    ),
    Loading: (
      <Button size="sm" disabled>
        <Loader2Icon className="animate-spin" />
        Please wait
      </Button>
    ),
  },
};
