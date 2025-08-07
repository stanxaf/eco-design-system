import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export const drawer = {
  name: "drawer",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>This is a drawer description.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p>Drawer content goes here.</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    ),
    Default: (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a drawer description.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here.</p>
          </div>
        </DrawerContent>
      </Drawer>
    ),
  },
};
