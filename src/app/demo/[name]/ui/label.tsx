import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const label = {
  name: "label",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px] space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
      </div>
    ),
  },
};
