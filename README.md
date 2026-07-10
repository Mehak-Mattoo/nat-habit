# Nat Habit — Scalable Product Discovery Storefront

A production-oriented e-commerce storefront built with **Next.js (App Router)**, **React**, **TypeScript**, and **TanStack Query**. The app consumes the [DummyJSON Products API](https://dummyjson.com/docs/products) and is designed with scale, SEO, caching, and Core Web Vitals in mind.

**Live demo:** [nat-habit.vercel.app]  
**Repository:** https://github.com/Mehak-Mattoo/nat-habit

---

**Project Structure**

src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── loading.tsx              # Homepage skeleton
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   ├── search/page.tsx          # Search route
│   ├── products/[id]/
│   │   ├── page.tsx             # Product detail
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── layout.tsx               # Root layout + metadata
│   └── providers.tsx            # React Query provider
├── components/
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── FeaturedProducts.tsx
│   ├── SearchPage.tsx
│   └── skeleton/Skeleton.tsx
└── lib/
    ├── api.ts                   # Server-side fetch (ISR)
    ├── client-apis.ts           # Client-side fetch (TanStack Query)
    ├── featuredProducts.ts      # Curated featured products
    └── types.ts

## Features

### Homepage (`/`)
- Curated **featured products** (local config + images)
- **Product categories** from DummyJSON
- **Product listing grid**
- Responsive layout
- Skeleton loading state (`loading.tsx`)
- Error boundary (`error.tsx`)

### Product Detail (`/products/[id]`)
- Product image, title, description, category, price, rating
- **Live stock** via client-side TanStack Query
- Invalid product IDs → custom 404 page
- Skeleton loading state
- SEO metadata via `generateMetadata`

### Search (`/search?q=...`)
- Live search as you type (debounced)
- Search query stored in URL (refresh, share, back/forward work)
- Empty states (no query / no results)
- Fresh results via TanStack Query (`cache: no-store`)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Server state | Next.js `fetch` + ISR (`revalidate`) |
| Client state | TanStack Query (search, live stock) |
| API | DummyJSON Products API |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/Mehak-Mattoo/nat-habit.git
cd nat-habit/my-app
npm install
npm run dev