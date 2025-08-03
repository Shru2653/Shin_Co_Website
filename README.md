# The Shinnovation Co Landing Page

A modern, responsive landing page built with React.js and Tailwind CSS, following a comprehensive design system for a company with two distinct products: Project-M and Project-R.

## 🎨 Design System

This project strictly follows the design system defined in `Design.json`, which includes:

- **Color Palette**: Neutral-heavy with vibrant accent colors for each product
- **Typography**: Inter font family with a clear typographic scale
- **Spacing**: 4px base unit system for consistent spacing
- **Components**: Predefined button, card, and input field styles
- **Effects**: Subtle shadows, border radius, and transitions

## 🚀 Features

- **Fully Responsive**: Works perfectly on all device sizes
- **Modern Design**: Clean, professional aesthetic inspired by Stripe and Linear
- **Accessible**: Proper semantic HTML and ARIA labels
- **Interactive**: Smooth animations and hover effects
- **Component-Based**: Modular React components for easy maintenance

## 📦 Sections

1. **Header**: Sticky navigation with mobile menu
2. **Hero**: Impactful headline with primary CTA
3. **Products**: Two-column grid showcasing Project-M and Project-R
4. **Mission**: Company vision and values
5. **Team**: Team member cards with social links
6. **Contact**: Email waitlist signup form
7. **Footer**: Links and social media icons

## 🛠️ Tech Stack

- **React 18**: Functional components with hooks
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Lucide React**: Clean, modern icons
- **Vite**: Fast development and build tool

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── ProductCard.jsx
│   │   ├── The Shinnovation Co.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Design.json
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Design System Implementation

### Colors
- **Brand**: Primary (#111827) and Secondary (#4B5563)
- **Neutrals**: Background, borders, and subtle variations
- **Accents**: Project-M (#2563EB) and Project-R (#14B8A6)
- **States**: Success, error, warning, and disabled

### Typography
- **Display**: 4.5rem for hero headlines
- **H1**: 3rem for section titles
- **H2**: 2.25rem for secondary titles
- **H3**: 1.5rem for card titles
- **Body**: 1rem for standard text
- **Caption**: 0.875rem for metadata

### Spacing
- **Base Unit**: 4px
- **Scale**: xs(4px), s(8px), m(16px), l(24px), xl(32px), xxl(48px), xxxl(64px)

### Components
- **Buttons**: Primary, secondary, and unified styles with hover effects
- **Cards**: Clean design with subtle shadows and hover animations
- **Input Fields**: Modern form inputs with focus states

## 🔧 Customization

The design system is easily customizable by modifying:

1. **Colors**: Update the color values in `tailwind.config.js`
2. **Typography**: Adjust font sizes and weights in the config
3. **Spacing**: Modify the spacing scale as needed
4. **Components**: Update the CSS classes in `src/index.css`

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🎨 Icons

All icons are from [Lucide React](https://lucide.dev/), providing a consistent, modern icon set that matches the design system.

## 📄 License

This project is for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React and Tailwind CSS 