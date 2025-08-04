import { Button } from "@/components/ui/button";
import { ChevronRightIcon, Loader2Icon, GitBranch, Plus, Settings, Trash2, Download, Upload, Search, Heart, Star, Mail, Phone, Calendar, User, Lock, Eye, Home, Menu, X, Check, AlertCircle, Info, HelpCircle } from "lucide-react";

export const button = {
  name: "button",
  components: {
    // Single centered primary button for iframe demo
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <Button>Get Started</Button>
      </div>
    ),

    // All examples for Overview tab
    Default: <Button>Button</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Destructive: <Button variant="destructive">Destructive</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Ghost: <Button variant="ghost">Ghost</Button>,
    Link: <Button variant="link">Link</Button>,

    // Sizes
    Small: <Button size="sm">Small</Button>,
    Large: <Button size="lg">Large</Button>,
    Icon: <Button size="icon"><Plus /></Button>,

    // With icons
    WithIcon: (
      <Button variant="outline" size="sm">
        <GitBranch className="mr-2" />
        New Branch
      </Button>
    ),

    // Loading state
    Loading: (
      <Button size="sm" disabled>
        <Loader2Icon className="mr-2 animate-spin" />
        Loading
      </Button>
    ),

    // Icon buttons
    IconSearch: <Button variant="ghost" size="icon"><Search /></Button>,
    IconHeart: <Button variant="ghost" size="icon"><Heart /></Button>,
    IconStar: <Button variant="ghost" size="icon"><Star /></Button>,
    IconMail: <Button variant="ghost" size="icon"><Mail /></Button>,
    IconPhone: <Button variant="ghost" size="icon"><Phone /></Button>,
    IconCalendar: <Button variant="ghost" size="icon"><Calendar /></Button>,
    IconUser: <Button variant="ghost" size="icon"><User /></Button>,
    IconLock: <Button variant="ghost" size="icon"><Lock /></Button>,
    IconEye: <Button variant="ghost" size="icon"><Eye /></Button>,
    IconHome: <Button variant="ghost" size="icon"><Home /></Button>,
    IconMenu: <Button variant="ghost" size="icon"><Menu /></Button>,
    IconClose: <Button variant="ghost" size="icon"><X /></Button>,
    IconCheck: <Button variant="ghost" size="icon"><Check /></Button>,
    IconAlert: <Button variant="ghost" size="icon"><AlertCircle /></Button>,
    IconInfo: <Button variant="ghost" size="icon"><Info /></Button>,
    IconHelp: <Button variant="ghost" size="icon"><HelpCircle /></Button>,
  },
};
