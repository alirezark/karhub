/**
 * MUI Generator
 */

/* eslint strict: ["off"] */

'use strict';

const muiExists = require('../utils/muiExists');

module.exports = {
  description: 'Add an unconnected mui',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Which material component should be styled?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return true
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js
    const actions = [
      {
        type: 'add',
        path: '../../app/mui/M{{properCase name}}/index.js',
        templateFile: './mui/index.js.hbs',
        abortOnFail: true,
      },
    ];
    actions.push({
      type: 'prettify',
      folderPath: `/mui/M${data.name}`,
    });

    return actions;
  },
};
