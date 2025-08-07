import { ScrollArea } from "@/components/ui/scroll-area";

export const scrollArea = {
  name: "scroll-area",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px] h-[200px]">
          <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium leading-none">Scroll Area</h4>
              <p className="text-sm text-muted-foreground">
                This is a scroll area component. It provides a custom scrollbar and handles overflow content.
              </p>
              <p className="text-sm text-muted-foreground">
                You can scroll through this content to see how the scroll area works.
              </p>
              <p className="text-sm text-muted-foreground">
                The scroll area maintains the native scrolling behavior while providing a consistent design.
              </p>
              <p className="text-sm text-muted-foreground">
                It's perfect for long lists, forms, or any content that might overflow its container.
              </p>
              <p className="text-sm text-muted-foreground">
                The scroll area component is fully accessible and works with keyboard navigation.
              </p>
            </div>
          </ScrollArea>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px] h-[200px]">
        <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium leading-none">Scroll Area</h4>
            <p className="text-sm text-muted-foreground">
              This is a scroll area component. It provides a custom scrollbar and handles overflow content.
            </p>
            <p className="text-sm text-muted-foreground">
              You can scroll through this content to see how the scroll area works.
            </p>
            <p className="text-sm text-muted-foreground">
              The scroll area maintains the native scrolling behavior while providing a consistent design.
            </p>
            <p className="text-sm text-muted-foreground">
              It's perfect for long lists, forms, or any content that might overflow its container.
            </p>
            <p className="text-sm text-muted-foreground">
              The scroll area component is fully accessible and works with keyboard navigation.
            </p>
          </div>
        </ScrollArea>
      </div>
    ),
  },
};
