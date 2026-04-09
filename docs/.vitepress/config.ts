/* Import defineConfig from VitePress.
   This helper lets us write the site configuration
   with better structure and TypeScript support. */
import { defineConfig } from 'vitepress'

/* Export the full VitePress site configuration */
export default defineConfig({
  /* Title of the website.
     This appears in the navbar and browser tab. */
  title: 'PaperBeam',

  /* Short site description.
     This helps describe the website and can also
     be used in metadata. */
  description: 'A fictional web technology site',

  /* Theme-specific settings for the site layout */
  themeConfig: {
    /* Add the site logo to the top-left navbar area.
       This image must be inside docs/public/logo.png */
    logo: '/logo.png',

    /* Top navigation bar menu items */
    nav: [
      /* First navbar item linking to the Products page */
      { text: 'Products', link: '/products' },

      /* Second navbar item linking to the API page */
      { text: 'API', link: '/api' },

      /* Third navbar item is a dropdown menu called Learning */
      {
        text: 'Learning',

        /* Dropdown pages inside the Learning menu */
        items: [
          /* Link to the Documentation subpage */
          { text: 'Documentation', link: '/learning/docs' },

          /* Link to the Cheatsheets subpage */
          { text: 'Cheatsheets', link: '/learning/cheatsheets' },

          /* Link to the Blog subpage */
          { text: 'Blog', link: '/learning/blog' }
        ]
      },

      /* Fourth navbar item linking to the Contact page */
      { text: 'Contact', link: '/contact' }
    ],

    /* Sidebar settings for pages in the site */
    sidebar: {
      /* Apply this sidebar structure to all pages under "/" */
      '/': [
        {
          /* First sidebar section title */
          text: 'Overview',

          /* Pages listed under the Overview section */
          items: [
            /* Link to Products page */
            { text: 'Products', link: '/products' },

            /* Link to API page */
            { text: 'API', link: '/api' },

            /* Link to Contact page */
            { text: 'Contact', link: '/contact' }
          ]
        },
        {
          /* Second sidebar section title */
          text: 'Learning',

          /* Pages listed under the Learning section */
          items: [
            /* Link to Documentation page */
            { text: 'Documentation', link: '/learning/docs' },

            /* Link to Cheatsheets page */
            { text: 'Cheatsheets', link: '/learning/cheatsheets' },

            /* Link to Blog page */
            { text: 'Blog', link: '/learning/blog' }
          ]
        }
      ]
    }
  }
})