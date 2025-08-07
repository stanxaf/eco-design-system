import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import { promo } from "@/app/demo/[name]/components/promo";

// ui
import { accordion } from "@/app/demo/[name]/ui/accordion";
import { alert } from "@/app/demo/[name]/ui/alert";
import { avatar } from "@/app/demo/[name]/ui/avatar";
import { badge } from "@/app/demo/[name]/ui/badge";
import { breadcrumb } from "@/app/demo/[name]/ui/breadcrumb";
import { button } from "@/app/demo/[name]/ui/button";
import { calendar } from "@/app/demo/[name]/ui/calendar";
import { card } from "@/app/demo/[name]/ui/card";
import { chart } from "@/app/demo/[name]/ui/chart";
import { checkbox } from "@/app/demo/[name]/ui/checkbox";
import { dataTable } from "@/app/demo/[name]/ui/data-table";
import { dialog } from "@/app/demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/demo/[name]/ui/dropdown-menu";
import { input } from "@/app/demo/[name]/ui/input";
import { menuBar } from "@/app/demo/[name]/ui/menu-bar";
import { select } from "@/app/demo/[name]/ui/select";
import { separator } from "@/app/demo/[name]/ui/separator";
import { skeleton } from "@/app/demo/[name]/ui/skeleton";
import { slider } from "@/app/demo/[name]/ui/slider";
import { sonner } from "@/app/demo/[name]/ui/sonner";
import { switchComponent } from "@/app/demo/[name]/ui/switch";
import { table } from "@/app/demo/[name]/ui/table";
import { tabs } from "@/app/demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/demo/[name]/ui/tooltip";
import { alertDialog } from "@/app/demo/[name]/ui/alert-dialog";
import { aspectRatio } from "@/app/demo/[name]/ui/aspect-ratio";
import { carousel } from "@/app/demo/[name]/ui/carousel";
import { collapsible } from "@/app/demo/[name]/ui/collapsible";
import { command } from "@/app/demo/[name]/ui/command";
import { contextMenu } from "@/app/demo/[name]/ui/context-menu";
import { drawer } from "@/app/demo/[name]/ui/drawer";
import { form } from "@/app/demo/[name]/ui/form";
import { hoverCard } from "@/app/demo/[name]/ui/hover-card";
import { inputOtp } from "@/app/demo/[name]/ui/input-otp";
import { label } from "@/app/demo/[name]/ui/label";
import { navigationMenu } from "@/app/demo/[name]/ui/navigation-menu";
import { pagination } from "@/app/demo/[name]/ui/pagination";
import { popover } from "@/app/demo/[name]/ui/popover";
import { progress } from "@/app/demo/[name]/ui/progress";
import { radioGroup } from "@/app/demo/[name]/ui/radio-group";
import { resizable } from "@/app/demo/[name]/ui/resizable";
import { scrollArea } from "@/app/demo/[name]/ui/scroll-area";
import { sheet } from "@/app/demo/[name]/ui/sheet";
import { sidebar } from "@/app/demo/[name]/ui/sidebar";
import { textarea } from "@/app/demo/[name]/ui/textarea";
import { toggle } from "@/app/demo/[name]/ui/toggle";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  "alert-dialog": alertDialog,
  "aspect-ratio": aspectRatio,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  carousel,
  chart,
  checkbox,
  collapsible,
  command,
  "context-menu": contextMenu,
  "data-table": dataTable,
  dialog,
  drawer,
  "dropdown-menu": dropdownMenu,
  form,
  "hover-card": hoverCard,
  input,
  "input-otp": inputOtp,
  label,
  "menubar": menuBar,
  "navigation-menu": navigationMenu,
  pagination,
  popover,
  progress,
  "radio-group": radioGroup,
  resizable,
  "scroll-area": scrollArea,
  select,
  separator,
  sheet,
  sidebar,
  skeleton,
  slider,
  sonner,
  switch: switchComponent,
  table,
  tabs,
  textarea,
  toggle,
  "toggle-group": toggleGroup,
  tooltip,
};
