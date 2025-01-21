const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    responseTimeout: 90000,
  },
  "experimentalInteractiveRunEvents": true
});
