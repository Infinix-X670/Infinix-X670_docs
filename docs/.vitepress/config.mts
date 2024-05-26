import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "infinix-x670",
  description: "infinix-x670 development website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Petunjuk', link: '/petunjuk' }
    ],

    sidebar: [
      {
        text: 'Unlock Bootloader [UBL]',
        items: [
          { text: 'bahan-bahan yg diperlukan', link: '/Petunjuk/Bahan-Bahan yg diperlukan' },
          { text: 'cara unlock bootloader [UBL]', link: '/Petunjuk/Cara Unlock Bootloader' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Infinix-X670' }
    ]
  }
})
