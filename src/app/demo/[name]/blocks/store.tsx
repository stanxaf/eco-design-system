import MinimalLayout from "@/app/demo/[name]/blocks/minimal-layout";
import StorePage from "@/app/demo/[name]/blocks/store-page";

export const store = {
  name: "store",
  components: {
    Demo: (
      <div className="h-full w-full overflow-auto">
        <MinimalLayout>
          <StorePage />
        </MinimalLayout>
      </div>
    ),
    Default: (
      <MinimalLayout>
        <StorePage />
      </MinimalLayout>
    ),
  },
};
