'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://nohttpurl.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://nohttpurl.com';",
      output: "var test = 'http://nohttpurl.com';",
      errors: [
        {
          message: 'Recommended "http://nohttpurl.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://nohttpurl.com' />",
      output: "<img src='http://nohttpurl.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://nohttpurl.com" switch to HTTPS',
        },
      ],
    },
  ],
});
