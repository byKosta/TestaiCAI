const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hk9jhk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
