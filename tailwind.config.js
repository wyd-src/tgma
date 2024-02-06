/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color, #18222d)',
        'button-color': 'var(--button-color, #2481CC)',
        'button-color-5': 'var(--button-color-5, #2481CC10)',
        'hint-color': 'var(--hint-color, #b1c3d5)',
        'secondary-bg-color': 'var(--secondary-bg-color, #131415)',
        'header-bg-color': 'var(--header-bg-color, #131415)',
        'text-color': 'var(--text-color, #ffffff)',
        'button-text-color': 'var(--button-text-color, #ffffff)',
        'section-bg-color': 'var(--section-bg-color, #18222d)',
        'accent-text-color': 'var(--accent-text-color, #2ea6ff)',
        'subtitle-text-color': 'var(--subtitle-text-color, #b1c3d5)',
        'link-color': 'var(--link-color, #62bcf9)',
        'link-color-5': 'var(--link-color-5, #62bcf920)',
        'section-header-text-color': 'var(--section-header-text-color, #b1c3d5)',
        'destructive-text-color': 'var(--destructive-text-color, #ef5b5b)',
        'destructive-text-color-5': 'var(--destructive-text-color-5, #ef5b5b10)',
        'restaurant': '#f49945',
        'shopping': '#a37dd4',
        'cinema': '#34bdf7',
        'rate': '#FFB647',
      },
    },
  },
  plugins: [],
}

