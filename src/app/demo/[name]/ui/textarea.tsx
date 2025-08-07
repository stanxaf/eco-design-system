import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const textarea = {
  name: "textarea",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px] space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here."
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            className="min-h-[100px]"
          />
        </div>
      </div>
    ),
  },
};
