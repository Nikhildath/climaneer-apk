# Overview

This is a full-stack React application built with Express.js that creates a "zoomed-out" or "desktop mode" view of the AquaClima climate visualization website (https://nikhildath.github.io/aquaclima). The application displays the external website in an iframe with responsive scaling and control features, allowing users to view the full desktop version regardless of their device screen size. The app is named "CLIMANEER" and successfully renders the target website at a fixed desktop width (1280px) then scales it to fit the user's screen perfectly.

## Recent Changes (August 17, 2025)
- Successfully implemented the CLIMANEER webview application as specified in the user requirements
- Created WebviewFrame component with proper scaling from 1280px desktop width to fit any screen size
- Added header with refresh, info (external link), and fullscreen controls
- Implemented loading states and error handling for the iframe
- Applied ocean-themed color scheme matching the climate visualization theme
- Confirmed working by user - application displays and scales the AquaClima website correctly

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for development and building
- **UI Components**: ShadCN/UI component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Component Structure**: 
  - Main WebviewFrame component handles iframe display, scaling calculations, and controls
  - Responsive scaling system that fits desktop content (1280px width) to any screen size
  - Control toolbar with refresh, info, fullscreen, and external link buttons

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: TSX for TypeScript execution in development
- **Build Process**: ESBuild for production bundling
- **Storage Interface**: Abstract storage layer with in-memory implementation for user management
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Development Integration**: Vite middleware integration for seamless development experience

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for schema management and queries
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple

## Authentication and Authorization
- **User Model**: Basic user schema with UUID primary keys, unique usernames, and password storage
- **Session Management**: Express sessions with PostgreSQL storage backend
- **Schema Validation**: Zod schemas integrated with Drizzle for type-safe data validation

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon Database
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling Dependencies
- **@radix-ui/react-***: Complete suite of accessible UI primitives for all interactive components
- **@tanstack/react-query**: Server state management and caching
- **class-variance-authority**: Utility for creating type-safe component variants
- **clsx**: Conditional className utility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for UI controls

### Development and Build Tools
- **vite**: Frontend build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **esbuild**: JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for development

### Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: Runtime type validation and schema definition

### Additional UI Libraries
- **embla-carousel-react**: Carousel component functionality
- **cmdk**: Command palette and search functionality
- **date-fns**: Date manipulation utilities
- **wouter**: Lightweight routing library