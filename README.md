<a href="https://eco-design-system.vercel.app/">
  <h1 align="center">Eco Design System</h1>
</a>

<p align="center">
    Eco Design System is a comprehensive, open-source design system built with Next.js and shadcn/ui Registry, featuring eco-friendly themed components and sustainable design patterns.
</p>

<p align="center">
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## About Eco Design System

Eco Design System provides a complete set of UI components and design tokens optimized for eco-friendly applications. It includes:

- **Brand Components**: Header, sidebar, logo, login, hero, promo, and product grid
- **UI Primitives**: 40+ shadcn/ui components with eco-themed styling
- **Application Blocks**: Dashboard, store, and blank page templates
- **Design Tokens**: Customizable color schemes and typography scales

## Deploy Your Own

You can deploy your own version of the Eco Design System to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Feco-design-system&project-name=eco-design-system&repository-name=eco-design-system&demo-title=Eco%20Design%20System&demo-description=Eco%20Design%20System%20is%20a%20comprehensive%2C%20open-source%20design%20system%20built%20with%20Next.js%20and%20shadcn%2Fui%20Registry%2C%20featuring%20eco-friendly%20themed%20components%20and%20sustainable%20design%20patterns.&demo-url=https%3A%2F%2Feco-design-system.vercel.app&demo-image=%2F%2Feco-design-system.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://eco-design-system.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Eco+Design+System&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build+eco-friendly+applications.&url=https%3A%2F%2Feco-design-system.vercel.app%2Fr%2Fdashboard.json)

This registry application exposes `Open in v0` buttons for each component. Once deployed, the `Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this registry's `/r/${component_name}.json` endpoint. This endpoint provides v0 with the necessary file information, content, and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the repository's [`registry.json`](./registry.json). For more information, refer to the [documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Components & Features

### Brand Components
- **Brand Header**: Styled, reusable header with navigation
- **Brand Sidebar**: Navigation sidebar with eco-themed styling
- **Logo**: Customizable brand logo component
- **Login**: Username & password login with customer quote
- **Hero**: Attention-grabbing landing page section
- **Promo**: Promotional deal display component
- **Product Grid**: Product display with API integration

### Application Blocks
- **Dashboard**: Complete dashboard application with charts and data
- **Store**: E-commerce store template with product grid
- **Blank**: Minimal application template

### UI Primitives
40+ shadcn/ui components including:
- Accordion, Alert, Avatar, Badge, Button
- Calendar, Card, Carousel, Chart, Checkbox
- Dialog, Drawer, Dropdown, Form, Input
- Navigation, Pagination, Progress, Select
- Table, Tabs, Toast, and many more

## Theming

To use a custom theme for all the components, modify the CSS tokens in [`tokens.css`](./src/app/tokens.css). More information on these practices can be found on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

#### MCP

To use this registry with MCP, edit [`registry.json`](./registry.json)'s first `registry-item` named `registry`. This `registry:style` item contains your design tokens that can be used with MCP.

For example, it looks like this:

```json
    {
      "name": "registry",
      "type": "registry:style",
      "cssVars": {
        "light": {
          "primary": "#007BD9",
          "primary-foreground": "oklch(1.0 0 0)",
          "radius": "0.5rem",
          ...
        },
        "dark": {
          "primary": "#007BD9",
          "primary-foreground": "oklch(1.0 0 0)",
          ...
        }
      },
      "files": []
    }
```

#### Fonts

To use custom fonts, you can either use [`next/font/google`](https://nextjs.org/docs/pages/getting-started/fonts#google-fonts) or the [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS rule. For example, `fonts.css` might look like:

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbi49c.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbj49c.woff') format('woff');
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3g3D_w.woff') format('woff');
}
```

If you use `@font-face`, you will also need to modify [`tailwind.css`](src/app/tailwind.css) AND [`tailwind.config.ts`](src/v0/tailwind.config.ts) to map your custom fonts to Tailwind. Refer to this [Tailwind documentation](https://tailwindcss.com/docs/font-family#customizing-your-theme)

## Running locally

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/v0` contains all v0 collateral used in `registry.json`