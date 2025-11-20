# webgltrs — Takhsees Pricing Site

This repo hosts the Takhsees Typing Center pricing experience for Abu Dhabi (2025). It lists every residency, permit, visa, insurance, fines, education, passport, commercial, contract, travel, and documentation service along with its industry-average typing fee.

## Stack
- React 19 + Vite 6
- Framer Motion + Tailwind-esque utility classes
- Lucide icons

## Run Locally
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Set up environment variables**
   - Create a `.env.local` file in the project root with:
     ```
     VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
     VITE_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
     ```
     > Without these values the site still works, but form submissions fall back to encrypted `localStorage` for demos.
3. **Start the dev server**
   ```bash
   npm run dev
   ```
   Vite will print a local URL (default `http://localhost:5173`).
4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview the production build (optional)**
   ```bash
   npm run preview
   ```

## Database / Admin Panel
- Create a Supabase table named `leads` with columns:  
  `id (uuid, default uuid_generate_v4())`, `full_name (text)`, `phone (text)`, `service (text)`, `notes (text)`, `channel (text)`, `status (text)`, `created_at (timestamptz, default now())`.
- The public site writes to this table; the in-page admin panel reads the latest 200 rows. When env vars are missing the UI transparently uses browser storage and labels the panel as "وضع تجريبي".
- WhatsApp CTA and floating button are wired to `+971 55 701 1188`.

## Deploy to Vercel
1. Push the `main` branch to GitHub.
2. In Vercel, choose **Add New Project → Import Git Repository** and select this repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` • Output directory: `dist`.
5. Add the same `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` variables in the project settings, then deploy.

## Notes
- Displayed fees exclude government charges (≈ AED 500–1000), VAT, and express add-ons, per the data pulled from ICP/MOHRE portals and 20+ Al Shamkha typing centers.
- Logo sits top-right per client request; services are organized via interactive tabs for clarity.
