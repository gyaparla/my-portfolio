# React + Vite Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

## Running locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open the URL shown in the terminal (usually http://localhost:5173)

## EmailJS (Contact form)

The contact form uses EmailJS. Copy the example env file and fill in your own IDs:

```bash
cp .env.example .env
```

Then add your values for:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Notes

- Styling is done with Tailwind CSS
- The app uses a data-driven layout (see `src/constants.jsx`)
