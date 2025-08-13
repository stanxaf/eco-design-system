import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, Calendar, User, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// Create a separate component for the password toggle example
function PasswordToggleExample() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password..."
        className="pr-9"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

export const inputDocs = {
  title: "Input",
  description: "A form input component that supports various types and states.",

  overview: {
    examples: [
      {
        title: "Basic Inputs",
        components: [
          <Input key="text" placeholder="Enter text..." />,
          <Input key="email" type="email" placeholder="Enter email..." />,
          <Input key="password" type="password" placeholder="Enter password..." />,
          <Input key="number" type="number" placeholder="Enter number..." />,
          <Input key="tel" type="tel" placeholder="Enter phone..." />,
          <Input key="url" type="url" placeholder="Enter URL..." />,
        ]
      },
      {
        title: "With Icons",
        components: [
          <div key="search" className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search..." />
          </div>,
          <div key="email" className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" type="email" placeholder="Enter email..." />
          </div>,
          <div key="phone" className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" type="tel" placeholder="Enter phone..." />
          </div>,
        ]
      },
      {
        title: "Sizes",
        components: [
          <Input key="sm" placeholder="Small input" className="h-6 px-2 py-1 text-xs" />,
          <Input key="default" placeholder="Default input" />,
          <Input key="lg" placeholder="Large input" className="h-8 px-3 py-2 text-base" />,
        ]
      },
      {
        title: "States",
        components: [
          <Input key="default" placeholder="Default state" />,
          <Input key="disabled" placeholder="Disabled state" disabled />,
          <Input key="invalid" placeholder="Invalid state" aria-invalid="true" />,
          <Input key="readonly" placeholder="Readonly state" readOnly />,
        ]
      },
      {
        title: "Password with Toggle",
        components: [
          <PasswordToggleExample key="password-toggle" />,
        ]
      },
      {
        title: "File Input",
        components: [
          <Input key="file" type="file" />,
          <Input key="file-multiple" type="file" multiple />,
          <Input key="file-accept" type="file" accept=".pdf,.doc,.docx" />,
        ]
      },
      {
        title: "Date and Time",
        components: [
          <Input key="date" type="date" />,
          <Input key="time" type="time" />,
          <Input key="datetime-local" type="datetime-local" />,
          <Input key="month" type="month" />,
          <Input key="week" type="week" />,
        ]
      }
    ]
  },

  api: {
    props: `interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}`,
    variants: [
      { name: "text", description: "Default text input" },
      { name: "email", description: "Email input with validation" },
      { name: "password", description: "Password input (masked)" },
      { name: "number", description: "Numeric input" },
      { name: "tel", description: "Telephone number input" },
      { name: "url", description: "URL input with validation" },
      { name: "file", description: "File upload input" },
      { name: "date", description: "Date picker input" },
      { name: "time", description: "Time picker input" },
      { name: "datetime-local", description: "Date and time picker" },
      { name: "month", description: "Month picker input" },
      { name: "week", description: "Week picker input" },
      { name: "search", description: "Search input" },
      { name: "color", description: "Color picker input" },
      { name: "range", description: "Range slider input" },
    ],
    sizes: [
      { name: "default", description: "Standard input height (32px)" },
      { name: "small", description: "Smaller input height (24px) - use h-6 class" },
      { name: "large", description: "Larger input height (40px) - use h-8 class" },
    ]
  },

  guide: {
    whenToUse: [
      "Form data collection and user input",
      "Search functionality and filtering",
      "File uploads and attachments",
      "Date and time selection",
      "Contact information entry",
      "Configuration and settings"
    ],
    bestPractices: [
      "Use appropriate input types for better UX and validation",
      "Provide clear, descriptive placeholder text",
      "Include proper labels and aria-labels for accessibility",
      "Use validation states to provide user feedback",
      "Consider mobile keyboard types for better mobile UX",
      "Group related inputs logically in forms"
    ],
    accessibility: [
      "Inputs are keyboard accessible by default",
      "Use proper labels and aria-labels for screen readers",
      "Provide clear error messages for invalid inputs",
      "Ensure focus indicators are visible and high contrast",
      "Use appropriate input types for better mobile accessibility",
      "Disabled inputs should not be interactive"
    ]
  }
};