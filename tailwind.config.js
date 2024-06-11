const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,tsx}'
  ],
  prefix: 'sfs-',
  corePlugins: {
    preflight: false
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        spillover: {
          offBlack: '#222222',
          lightGray: '#DDDDDD',
          darkGray: '#666666',
          darkRed: '#561513',
          brandRed: '#A71E22',
          gray: '#AFB7BC',
          orange: '#F57200',
          cyan: '#0E7F82',
          facebook: '#4468B1',
          instagram: '#C13684',
          twitter: '#439BD6',
          sentiments: {
            star: '#F7D804',
            green: '#08A036',
            yellow: '#EFCD0B',
            red: '#C90F0F'
          }
        },
        border: 'hsl(var(--sfs-border))',
        input: 'hsl(var(--sfs-input))',
        ring: 'hsl(var(--sfs-ring))',
        background: 'hsl(var(--sfs-background))',
        foreground: 'hsl(var(--sfs-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--sfs-primary))',
          foreground: 'hsl(var(--sfs-primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--sfs-secondary))',
          foreground: 'hsl(var(--sfs-secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--sfs-destructive))',
          foreground: 'hsl(var(--sfs-destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--sfs-muted))',
          foreground: 'hsl(var(--sfs-muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--sfs-accent))',
          foreground: 'hsl(var(--sfs-accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--sfs-popover))',
          foreground: 'hsl(var(--sfs-popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--sfs-card))',
          foreground: 'hsl(var(--sfs-card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--sfs-radius)',
        md: 'calc(var(--sfs-radius) - 2px)',
        sm: 'calc(var(--sfs-radius) - 4px)'
      },
      fontFamily: {
        sans: ['var(--sfs-font-sans)', ...fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'sfs-accordion-down 0.2s sfs-ease-out',
        'accordion-up': 'sfs-accordion-up 0.2s sfs-ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
