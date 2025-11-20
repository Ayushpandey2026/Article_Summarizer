module.exports = {
  // Define the environment in which the code runs
  env: { 
    browser: true,  // Code will run in a browser
    es2020: true    // Enable modern ECMAScript 2020 features
  },

  // Base rules and plugin recommendations
  extends: [
    "eslint:recommended",            // Use ESLint’s recommended rules
    "plugin:react/recommended",      // Recommended rules for React
    "plugin:react/jsx-runtime",      // Support for JSX runtime (React 17+)
    "plugin:react-hooks/recommended",// Rules for React hooks
    "plugin:import/errors",          // Detect import errors
    "plugin:import/warnings",        // Detect import warnings
    "plugin:@next/next/recommended", // Recommended rules for Next.js projects
  ],

  // Parser options for modern JS
  parserOptions: { 
    ecmaVersion: "latest",  // Use the latest ECMAScript version
    sourceType: "module"    // Enable ES modules
  },

  // Settings for plugins
  settings: { 
    react: { 
      version: "18.2" // Specify React version for linting
    } 
  },

  // Plugins to enhance linting
  plugins: ["react-refresh"],

  // Custom rules
  rules: {
    "react-refresh/only-export-components": "warn", // Warn if non-component exports are used with react-refresh
  },

  // Overrides for specific file types
  overrides: [
    {
      files: ["*.js"],                      // Apply these rules to JS files
      extends: ["plugin:react-refresh/recommended"], // Use react-refresh recommended rules
    },
  ],
};
