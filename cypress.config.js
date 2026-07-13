const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
//  allowCypressEnv: false,

  e2e: {
    async setupNodeEvents(on, config) {
        await addCucumberPreprocessorPlugin(on, config)
        
        on('file:preprocessor', createBundler({
            plugins: [createEsbuildPlugin.default(config)]
        }))
        
        return config
    },
      specPattern: 'cypress/e2e/features/**/*.feature',
      supportFile: 'cypress/support/e2e.js',
      stepDefinitions: ['cypress/step_definitions/**/*.(js,mjs,ts,tsx)'],
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
          reportDir: 'mochawesome-report',
          overwrite: true,
          html: true,
          json: false,
          embeddedScreenshots: true,
          inlineAssets: true
      }
  },
});
