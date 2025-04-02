/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
      screens: {
        sm: "544px",
        md: "832px",
        lg: "1040px",
        xl: "1232px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      screens: {
        tablet: "842px",
        "3xl": "1650px",
        desk: "1920px",
      },
      colors: {
        theme: "var(--theme-color)",
        highlight: "var(--highlight-color)",
        bg: "var(--bg-color)",
        "hero-secondary-tag-bg": "var(--hero-secondary-tag-bg)",
        "hero-secondary-tag-text": "var(--hero-secondary-tag-text)",
        navy: "#3971B5",
        blue: {
          DEFAULT: "#2586F5",
          secondary: "#288BFD",
          lite: "#D3E7FF",
          dark: "#003A7B",
          hover: "#006BE4",
          border: "#C2D9F4",
          50: "#F8FBFF",
          100: "#F0F7FF",
          150: "#E1EFFF",
          200: "#CCE3FF",
          300: "#A3C8F3",
          400: "#2586F5",
          450: "#F6FAFF",
          600: "#112C75",
          700: "#27427A",
        },
        purple: {
          300: "#735DFF",
        },
        red: {
          100: "#FFEAEB",
          300: "#F6737C",
          400: "#FFFAF8",
        },
        teal: {
          200: "#B5EBFF",
          300: "#36E3FA",
          400: "#00C0DA",
        },
        magenta: {
          100: "#FFEEFF",
          300: "#E785E7",
          350: "#F26FE8",
        },
        yellow: {
          100: "#FFF6DA",
          300: "#F7C01A",
        },
        peach: {
          DEFAULT: "#F77C56",
          200: "#FFDED3",
        },
        emeraLd: {
          DEFAULT: "#2F8626",
        },
        "zen-Green": {
          DEFAULT: "#7BA24E",
        },
        yolk: {
          DEFAULT: "#FFDE8C",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(115.6% 115.6% at 50% 164.05%, #288BFD 0%, #FFFFFF 100%);",
        "service-gradient":
          "radial-gradient(56.78% 53.5% at 50% 100%, rgba(255, 211, 214, 0.50) 0%, rgba(255, 211, 214, 0.00) 100%)," +
          "#F0F7FF",
        "mid-cta-gradient":
          "radial-gradient(63.74% 60.05% at 50% 139.71%,rgba(40, 139, 253, 0.5) 0%,rgba(40, 139, 253, 0) 100%);",
        "numbered-item-red":
          "radial-gradient(170.91% 274.39% at 50% -152.98%, rgba(253, 170, 145, 0.5) 8.99%, rgba(253, 170, 145, 0) 81.09%);",
        "numbered-item-teal":
          "radial-gradient(170.91% 274.39% at 50% -152.98%, rgba(181, 235, 255, 0.5) 15.71%, rgba(181, 235, 255, 0) 83.25%);",
        "numbered-item-purple":
          "radial-gradient(170.91% 274.39% at 50% -152.98%, rgba(202, 194, 255, 0.5) 15.71%, rgba(202, 194, 255, 0) 89.72%);",
        "numbered-content-section":
          "linear-gradient(0deg, #CCE3FF 5.59%, #FFFFFF 47.54%);",
        "contact-block":
          "radial-gradient(120.72% 84.4% at 49.99% 95.6%, rgba(40, 139, 253, 0.15) 0%, rgba(40, 139, 253, 0) 82.59%);",
        "post-hero":
          "radial-gradient(167.6% 110.88% at 51.51% -10.87%, #FFEEEE 0%, #EE8E65 54.02%, #FB685B 100%);",
        "technology-card":
          "radial-gradient(115.55% 61.61% at 50% 139.14%, #A3C8F3 0%, rgba(204, 227, 255, 0) 100%);",
        "technology-card-mobile":
          "radial-gradient(142.24% 139.14% at 50% 139.14%, #A3C8F3 0%, rgba(204, 227, 255, 0) 100%);",
        "featured-case-studies":
          "linear-gradient(180deg, #ffffff 0%, #e8f2ff 32%, #ffffff 100%);",
        "featured-suggestions":
          "linear-gradient(180deg, #FFFFFF 0%, #E8F2FF 23.5%, #EDF5FF 100%);",
        "featured-card-section":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8F2FF 17.83%, #EDF5FF 81.97%);",
      },
      boxShadow: {
        btn: "0px 12px 12.3px 0px #4265AB24",
        navbar: "0px 12px 18.1px 0px #4265AB24",
        tab: "0px 8px 18.8px 0px #6EB2FF8C",
        testimonial: "0px 36px 21.8px -24px #288BFD26",
        "numbered-item": "0px 5px 15.6px 0px #288BFD3D",
        "numbered-item-circle": "0px 4.35px 6.31px 0px #CCE3FF",
        "contact-block-form": "0px 6px 12.1px 0px #288BFD3D",
        "case-study": "0px 12px 16.6px 0px #7190BE2E",
        "carousel-arrow": "0px 4px 6.9px 0px #7190BE70",
        "icon-circle": "0px 4px 5.8px 0px #CCE3FF",
        "icon-circle-hover": "0px 28px 22.7px 0px #CCE3FF",
        "technology-card": "0px 12px 16.6px 0px #CAD8EC70",
        "service-card": "0px 12px 15.5px 0px rgba(235, 241, 249, 0.40)",
        "featured-card": "0px 36px 48.1px 0px #288BFD26",
      },
    },
  },
};
