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
2. **Start the dev server**
   ```bash
   npm run dev
   ```
   Vite will print a local URL (default `http://localhost:5173`).
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview the production build (optional)**
   ```bash
   npm run preview
   ```

## Deploy to Vercel
1. Push the `main` branch to GitHub.
2. In Vercel, choose **Add New Project → Import Git Repository** and select this repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` • Output directory: `dist`.
5. Deploy; promote the preview deployment to production when ready.

## Notes
- Displayed fees exclude government charges (≈ AED 500–1000), VAT, and express add-ons, per the data pulled from ICP/MOHRE portals and 20+ Al Shamkha typing centers.
- Logo sits top-right per client request; services are organized via interactive tabs for clarity.
