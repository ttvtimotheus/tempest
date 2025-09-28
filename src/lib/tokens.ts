// Design tokens for Tempest eSports brand

export const tokens = {
  colors: {
    // Brand colors
    brand: {
      primary: "#0ea5e9", // Sky blue
      secondary: "#1e293b", // Slate
      accent: "#00ffff", // Neon cyan
    },
    
    // Neon gaming colors
    neon: {
      cyan: "#00ffff",
      purple: "#bf00ff", 
      pink: "#ff00aa",
      green: "#00ff88",
      blue: "#0088ff",
    },
    
    // Game specific colors
    games: {
      valorant: "#fa5252", // Red
      cs2: "#fd7e14", // Orange
      lol: "#339af0", // Blue
    },
    
    // Status colors
    status: {
      success: "#00ff88",
      warning: "#ffd43b", 
      error: "#ff6b6b",
      info: "#74c0fc",
    },
  },
  
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
  },
  
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    glow: "0 0 0 1px currentColor, 0 0 10px currentColor",
    glowLg: "0 0 0 1px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
  },
  
  transitions: {
    fast: "150ms ease",
    base: "200ms ease",
    slow: "300ms ease",
    slower: "500ms ease",
  },
  
  typography: {
    fontFamilies: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "SFMono-Regular", "Consolas", "monospace"],
    },
    
    fontSizes: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
    },
    
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  
  breakpoints: {
    sm: "640px",
    md: "768px", 
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  
  zIndex: {
    hide: "-1",
    auto: "auto",
    base: "0",
    docked: "10",
    dropdown: "1000",
    sticky: "1100",
    banner: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
} as const

export type Tokens = typeof tokens
