import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const sheet = {
  name: "sheet",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a sheet component that slides in from the side.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Sheet Content</h4>
                <p className="text-sm text-muted-foreground">
                  This is the content area of the sheet. You can put any content here.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    ),
    Default: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet component that slides in from the side.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Sheet Content</h4>
              <p className="text-sm text-muted-foreground">
                This is the content area of the sheet. You can put any content here.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    ),
  },
};
