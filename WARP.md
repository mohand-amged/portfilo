# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern personal portfolio website built with Next.js 15, React 19, and TypeScript. The project showcases projects, skills, and provides a contact form functionality. It features a single-page application with smooth scrolling sections and modern UI components.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (available at http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Development Workflow
- Development uses Turbopack for faster builds (`--turbopack` flag in dev script)
- ESLint is configured to ignore build errors in production (`ignoreDuringBuilds: true`)
- The project uses TypeScript with strict mode enabled

## Architecture & Structure

### Application Structure
- **App Router**: Uses Next.js 13+ App Router pattern (`app/` directory)
- **Page Layout**: Single-page application with all sections rendered in `app/page.tsx`
- **Component Architecture**: Section-based components (Hero, About, Skills, MyWork, Contact, Footer)
- **Styling**: Tailwind CSS with custom utility classes and theme provider

### Key Architectural Patterns

#### Component Organization
- **Main Sections**: Located in `/components/` - Hero, About, Skills, MyWork, Contact, Footer
- **UI Components**: Located in `/components/ui/` - reusable components like CustomButton, SectionTitle, Spotlight
- **Layout Components**: Navbar uses floating positioning, CustomScrollbar wraps main content

#### Data Management
- **Static Data**: Project and documentation testimonials stored in `/data/index.ts`
- **Type Definitions**: Centralized in `/types/index.ts` (Testimonial, skills types)
- **No External Data Sources**: All content is statically defined

#### Styling System
- **Theme Provider**: Uses `next-themes` for dark/light mode switching
- **Background Effects**: Fixed grid pattern with radial gradient overlays in layout
- **Custom Utilities**: `cn()` function in `/lib/utils.ts` for conditional classes using clsx + tailwind-merge

### API Routes
- **Contact API**: `/pages/api/contact.ts` handles form submissions via Nodemailer
- **Email Configuration**: Requires `EMAIL_USER` and `EMAIL_PASS` environment variables
- **Error Handling**: Comprehensive error handling with development/production mode differences

### Animation & UI Libraries
- **Framer Motion**: Used for animations (version 12.9.4)
- **Particles**: TSParticles for background effects
- **AOS**: Animate On Scroll library
- **Radix UI**: For accessible tab components
- **Tabler Icons & React Icons**: Icon libraries

## Environment Setup

### Required Environment Variables
```
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-app-specific-password
```

### Dependencies to Note
- Next.js 15+ with React 19 (latest versions)
- TypeScript 5+ with strict configuration
- Tailwind CSS 4.x (newer version)
- Node.js v14+ required (as per README)

### Path Aliases
- `@/*` maps to root directory (configured in tsconfig.json)

## Component Patterns

### Section Components
All main sections follow this pattern:
- Accept optional props for configuration
- Use SectionTitle component for consistent headers
- Implement responsive design with Tailwind classes
- Include proper semantic HTML with section elements and IDs

### UI Component Patterns
- **CustomButton**: Supports primary/secondary variants with icons
- **InputField**: Handles both input and textarea with consistent styling
- **SectionTitle**: Standard title/subtitle pattern used across sections

### Data Flow
- Static testimonial data flows from `/data/index.ts` to components
- Contact form uses controlled components with local state
- No global state management - all state is component-local

## Development Guidelines

### File Organization
- Components are organized by type (main sections vs. UI components)
- Each component file follows PascalCase naming
- TypeScript types are centralized in `/types/index.ts`

### Styling Approach
- Utility-first with Tailwind CSS
- Custom gradients and animations defined inline
- Responsive design using Tailwind responsive prefixes
- Dark mode support via theme provider

### Contact Form Integration
The contact form requires proper email configuration and handles:
- Form validation on both client and server
- SMTP connection verification
- Error handling with user feedback
- Email template formatting

## Testing & Deployment

### Build Process
- Next.js handles optimization and bundling
- Static assets served from `/public/` directory
- Vercel deployment ready (as mentioned in README)

### Asset Management
- Project images in `/public/ProjectImages/`
- Documentation images in `/public/DocumentationImages/`  
- Personal assets (CV, profile photo) in `/public/`

## Deployment Troubleshooting

### Common Issues & Solutions

#### Missing Tailwind Configuration
- **Problem**: Empty `tailwind.config.js` causes styling issues
- **Solution**: Ensure proper Tailwind config with content paths and theme extensions

#### Environment Variables
- **Problem**: Contact form fails without email configuration
- **Solution**: Set `EMAIL_USER` and `EMAIL_PASS` in deployment platform
- **Gmail Setup**: Enable 2FA and use app-specific password

#### Node.js Version
- **Problem**: Deployment fails with older Node versions
- **Solution**: Ensure Node.js ≥18.0.0 (specified in package.json engines)

#### Build Cache Issues (Windows)
- **Problem**: EPERM errors during build on Windows
- **Solution**: Clear `.next` directory or ignore cache warnings (doesn't affect production)

### Platform-Specific Notes

#### Vercel Deployment
- Uses `vercel.json` for configuration
- Contact API has 10-second timeout limit
- Environment variables set in Vercel dashboard
- Automatic framework detection for Next.js

#### General Deployment Checklist
1. Verify `npm run build` works locally
2. Set environment variables on hosting platform
3. Ensure all dependencies are in package.json
4. Check Node.js version compatibility
5. Test contact form functionality after deployment
