import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const inputOtp = {
  name: "input-otp",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[300px] space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Enter verification code</label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Enter verification code</label>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    ),
  },
};
