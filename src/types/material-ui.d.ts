import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    sidebar: Palette['primary']
    font: Palette['primary']
  }
  interface PaletteOptions {
    sidebar: PaletteOptions['primary']
    font: PaletteOptions['primary']
  }
}
