const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: '#00000000',
      'aldermore-yellow': '#FFCD00',
      black: '#000000',
      white: '#FFFFFF',
      'deep-teal': '#0B4958',
      verdant: '#478073',
      cassis: '#9A4A9E',
      'deep-sangria': '#9C231F',
      rust: '#F08100',
      teal: '#009AB2',
      'deep-teal-watermark': '#1D5563',
      'verdant-watermark': '#599083',
      'cassis-watermark': '#9E5AA2',
      'pale-grey-watermark': '#F8F8F8',
      'pale-yellow-watermark': '#FFFAE6',
      'cassis-table': '#9E5AA2',
      'cassis-grey-table': '#E9E2EA',
      'cassis-pale-table': '#F5EDF5',
      'dark-grey-tint': '#4B4F50',
      'dark-mid-grey-tint': '#65696B',
      'mid-grey-tint': '#C4C4C4',
      'light-grey-tint': '#F2F2F2',
      'form-red': '#D02B31',
      'form-red-tint': '#FFD9D9',
      'form-green': '#0DA400',
      'form-green-tint': '#E7F6E6'

    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
      translate: ['group-hover'],
      width: ['group-hover'],
      height: ['group-hover']
    },
  },
  plugins: [],
}
