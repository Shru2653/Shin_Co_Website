/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                // Brand colors
                'brand-primary': '#111827',
                'brand-secondary': '#4B5563',

                // Neutral colors
                'neutral-background': '#FFFFFF',
                'neutral-background-subtle': '#F9FAFB',
                'neutral-border': '#E5E7EB',
                'neutral-border-hover': '#D1D5DB',

                // Accent colors
                'accent-project-m': '#2563EB',
                'accent-project-r': '#14B8A6',
                'accent-unified-cta': '#111827',

                // State colors
                'state-success': '#10B981',
                'state-error': '#EF4444',
                'state-warning': '#F59E0B',
                'state-disabled': '#9CA3AF',
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
                'h2': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
                'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
                'body-large': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
                'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
                'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
            },
            spacing: {
                'xs': '4px',
                's': '8px',
                'm': '16px',
                'l': '24px',
                'xl': '32px',
                'xxl': '48px',
                'xxxl': '64px',
            },
            borderRadius: {
                'standard': '8px',
                'large': '16px',
                'full': '9999px',
            },
            boxShadow: {
                'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'standard': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'lifted': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'interactive': '0 0 0 3px rgba(66, 153, 225, 0.5)',
            },
            maxWidth: {
                'container': '1280px',
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
        },
    },
    plugins: [],
} 