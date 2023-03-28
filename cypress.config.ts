import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    experimentalStudio: true,
    defaultCommandTimeout: 5000
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
