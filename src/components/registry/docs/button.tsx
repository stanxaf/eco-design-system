import { Button } from "@/components/ui/button";
import { Plus, Search, Heart, Star, Mail, Phone, Calendar, User, Lock, Eye, Home, Menu, X, Check, AlertCircle, Info, HelpCircle, GitBranch, Download, Upload, Loader2Icon } from "lucide-react";

export const buttonDocs = {
  title: "Button",
  description: "Allows users to take actions with a single click or tap.",

  overview: {
    examples: [
      {
        title: "Variants",
        components: [
          <Button key="default">Default</Button>,
          <Button key="secondary" variant="secondary">Secondary</Button>,
          <Button key="destructive" variant="destructive">Destructive</Button>,
          <Button key="outline" variant="outline">Outline</Button>,
          <Button key="ghost" variant="ghost">Ghost</Button>,
          <Button key="link" variant="link">Link</Button>,
        ]
      },
      {
        title: "Sizes",
        components: [
          <Button key="sm" size="sm">Small</Button>,
          <Button key="default">Default</Button>,
          <Button key="lg" size="lg">Large</Button>,
          <Button key="icon" size="icon"><Plus /></Button>,
        ]
      },
      {
        title: "With Icons",
        components: [
          <Button key="branch" variant="outline" size="sm">
            <GitBranch className="mr-2" />
            New Branch
          </Button>,
          <Button key="download" variant="outline">
            <Download className="mr-2" />
            Download
          </Button>,
          <Button key="upload" variant="outline" size="lg">
            <Upload className="mr-2" />
            Upload File
          </Button>,
        ]
      },
      {
        title: "Icon Buttons",
        components: [
          <Button key="search" variant="ghost" size="icon"><Search /></Button>,
          <Button key="heart" variant="ghost" size="icon"><Heart /></Button>,
          <Button key="star" variant="ghost" size="icon"><Star /></Button>,
          <Button key="mail" variant="ghost" size="icon"><Mail /></Button>,
          <Button key="phone" variant="ghost" size="icon"><Phone /></Button>,
          <Button key="calendar" variant="ghost" size="icon"><Calendar /></Button>,
          <Button key="user" variant="ghost" size="icon"><User /></Button>,
          <Button key="lock" variant="ghost" size="icon"><Lock /></Button>,
          <Button key="eye" variant="ghost" size="icon"><Eye /></Button>,
          <Button key="home" variant="ghost" size="icon"><Home /></Button>,
          <Button key="menu" variant="ghost" size="icon"><Menu /></Button>,
          <Button key="close" variant="ghost" size="icon"><X /></Button>,
          <Button key="check" variant="ghost" size="icon"><Check /></Button>,
          <Button key="alert" variant="ghost" size="icon"><AlertCircle /></Button>,
          <Button key="info" variant="ghost" size="icon"><Info /></Button>,
          <Button key="help" variant="ghost" size="icon"><HelpCircle /></Button>,
        ]
      },
      {
        title: "Loading State",
        components: [
          <Button key="loading-sm" size="sm" disabled>
            <Loader2Icon className="mr-2 animate-spin" />
            Loading
          </Button>,
          <Button key="loading-default" disabled>
            <Loader2Icon className="mr-2 animate-spin" />
            Loading
          </Button>,
          <Button key="loading-lg" size="lg" disabled>
            <Loader2Icon className="mr-2 animate-spin" />
            Loading
          </Button>,
        ]
      }
    ]
  },

  api: {
    props: `interface ButtonProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'default' | 'lg' | 'icon'
  disabled?: boolean
  asChild?: boolean
}`,
    variants: [
      { name: "default", description: "Primary button style" },
      { name: "secondary", description: "Secondary button style" },
      { name: "destructive", description: "For dangerous actions" },
      { name: "outline", description: "Bordered button style" },
      { name: "ghost", description: "Minimal button style" },
      { name: "link", description: "Link-like button style" },
    ],
    sizes: [
      { name: "sm", description: "24px height" },
      { name: "default", description: "32px height" },
      { name: "lg", description: "40px height" },
      { name: "icon", description: "32px square" },
    ]
  },

  guide: {
    whenToUse: [
      "Primary actions and calls-to-action",
      "Form submissions and confirmations",
      "Navigation and links",
      "Interactive elements and controls"
    ],
    bestPractices: [
      "Use primary variant for main actions",
      "Use destructive variant for dangerous actions",
      "Ensure sufficient color contrast for accessibility",
      "Provide clear, descriptive button text"
    ],
    accessibility: [
      "Buttons are keyboard accessible by default",
      "Use descriptive aria-labels for icon buttons",
      "Ensure focus indicators are visible",
      "Disabled buttons should not be interactive"
    ]
  }
};