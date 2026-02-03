# CleanPro - Professional Cleaning Services Website

A modern, production-ready React TypeScript website for a cleaning services company built with Vite, Tailwind CSS, and shadcn UI.

## Features

- ✨ **Glassmorphism Navbar** - Beautiful transparent navbar with backdrop blur effect
- 📱 **Fully Responsive** - Optimized for all device sizes (mobile, tablet, desktop)
- 🎠 **Testimonial Carousel** - Smooth carousel showcasing customer reviews
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🌓 **Theme Detection** - Automatically detects and applies system theme preference (light/dark)
- ⚡ **Smooth Scrolling** - Seamless navigation between sections
- 🚀 **Production Ready** - Optimized build with TypeScript and best practices

## Tech Stack

- **React 19** - Latest React with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn UI** - High-quality component library
- **Embla Carousel** - Smooth, accessible carousel component
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn UI components (Button, Carousel)
│   ├── Navbar.tsx    # Glassmorphism navbar component
│   └── TestimonialCarousel.tsx  # Testimonial carousel component
├── lib/
│   └── utils.ts      # Utility functions (cn helper)
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind directives
```

## Customization

### Colors & Theme

Edit `src/index.css` to customize the color scheme. The theme uses CSS variables that automatically adapt to light/dark mode.

### Content

- Update testimonials in `src/components/TestimonialCarousel.tsx`
- Modify services and content in `src/App.tsx`
- Update contact information in the contact section

### Styling

The project uses Tailwind CSS. Customize styles by:

- Modifying `tailwind.config.js` for theme customization
- Adding custom classes in component files
- Updating CSS variables in `src/index.css`

## Features in Detail

### Glassmorphism Navbar

The navbar features a beautiful glassmorphism effect that becomes more prominent on scroll, with smooth transitions and backdrop blur.

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly carousel controls on mobile
- Optimized layouts for all screen sizes

### Theme Detection

The website automatically detects your system's theme preference and applies light or dark mode accordingly. No manual toggle needed - it just works!

### Smooth Scrolling

All navigation links use smooth scrolling for a polished user experience.

## Contact form (send emails)

This project ships with a client-side contact form that can post to Formspree and forward messages to your email address.

Steps to enable sending to ocenmoses76@gmail.com:

1. Create a free account and form at https://formspree.io/.
2. During Formspree setup set the destination/recipient email to: ocenmoses76@gmail.com.
3. Copy the form ID or full endpoint Formspree gives you.
4. Create a local `.env` file at the project root (do NOT commit it) and set one of the following keys:

```env
# Option A (full endpoint):
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id_here"

# Option B (form id only):
VITE_FORMSPREE_FORM_ID="your_form_id_here"
```

5. Restart the dev server (`npm run dev`).

The contact form in `src/App.tsx` will post to that endpoint and Formspree will email submissions to the configured address.

If you prefer a backend or a different provider (EmailJS, SendGrid, etc.) I can add a server endpoint instead — tell me which provider you'd like.

## License

MIT
