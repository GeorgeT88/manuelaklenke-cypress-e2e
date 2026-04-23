import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://manuelaklenke.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(_on, _config) {},
  },
})
