# KQ Chess Academy Website

A professional, modern website for KQ Chess Academy, built with React, Vite, and Tailwind CSS. The design reflects a premium "Grandmaster" aesthetic with dark, gold, and silver tones.

## Features

- **Modern UI/UX**: Responsive design with smooth Framer Motion animations.
- **Components**:
    - **Hero Section**: Cinematic visual with CTA.
    - **About Section**: Highlighting the legacy since 2008 and Founder/Coach details.
    - **Programs**: Curriculum details, online/offline coaching modes.
    - **Testimonials**: Student success stories.
    - **Contact**: Interactive-looking form and branch details (Kotturpuram, Mylapore, T. Nagar).
- **Tech Stack**:
    - React 19
    - Vite
    - Tailwind CSS v4
    - Framer Motion
    - React Router DOM
    - Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/kq-chess-academy.git
    cd kq-chess-academy
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173` (or the port shown in terminal).

### Project Structure

```
src/
├── assets/          # Images and static assets
├── components/
│   ├── layout/      # Navbar, Footer, Layout wrapper
│   ├── sections/    # Hero, Team, Testimonials, etc.
│   └── ui/          # Reusable UI components
├── pages/           # Home, About, Programs, Contact
├── App.jsx          # Main App component with Routing
├── index.css        # Global styles & Tailwind directives
└── main.jsx         # Entry point
```

## Customization

- **Tailwind Theme**: Colors and fonts are configured in `src/index.css` under the `@theme` directive.
- **Content**: Edit the components in `src/components/sections/` and `src/pages/` to update text and images.

## License

All rights reserved © 2025 KQ Chess Academy.
