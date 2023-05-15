const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}

module.exports = {
  e2e: {
    setupNodeEvents,
      // implement node event listeners here

    specPattern: "cypress/Integeration/*.js",
  },
};

