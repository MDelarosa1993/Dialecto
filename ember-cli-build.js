'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js',
            },
          },
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
