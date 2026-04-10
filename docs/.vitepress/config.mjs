import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PaperBeam',         // site title shown in browser tab and navbar
  description: 'A fictional web technology site',   // meta description for SEO
  appearance: true,         // enables dark/light mode toggle

  themeConfig: {
    logo: '/logo.png',        // logo image from docs/public/logo.png


    // Top navigation links shown on every page
    nav: [
      { text: 'Products', link: '/products' },        // links to docs/products.md
      { text: 'API', link: '/api' },          // links to docs/api.md
      {

        // Learning is a dropdown menu containing subpages
        text: 'Learning',
        items: [
          { text: 'Documentation', link: '/learning/docs' },        // links to docs/learning/docs.md
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },     // links to docs/learning/cheatsheets.md
          { text: 'Blog', link: '/learning/blog' },                 // links to docs/learning/blog.md
          { text: 'Videos', link: '/learning/videos' }              // links to docs/learning/videos.md
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],



    // Sidebar shown on all pages except homepage
    // Scoped to '/' so it applies site-wide
    sidebar: {
      '/': [
        {
          text: 'Overview',       // first sidebar section
          items: [
            { text: 'Products', link: '/products' },
            { text: 'API', link: '/api' },
            { text: 'Contact', link: '/contact' }
          ]
        },
        {
          text: 'Learning',     // second sidebar section
          items: [
            { text: 'Documentation', link: '/learning/docs' },
            { text: 'Cheatsheets', link: '/learning/cheatsheets' },
            { text: 'Blog', link: '/learning/blog' },
            { text: 'Videos', link: '/learning/videos' }
          ]
        }
      ]
    },

    // GitHub icon link shown on the right side of the navbar
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bushratzhn/VitePress-Project' }
    ]
  }
})