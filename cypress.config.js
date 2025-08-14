const { defineConfig } = require('cypress')
module.exports = {
  
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || 'https://example.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
