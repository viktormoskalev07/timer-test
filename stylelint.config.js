module.exports = {
  processors: [
    ['stylelint-processor-styled-components', {
      ignoreFiles: ['./**/*.css']
    }],
  ],
  extends: [
    // Use the standard set of stylelint rules
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  rules: {
    // Override the rule configuration from stylelint-config-standard which prevents us from
    // having an empty line between declarations without a comment.
    'declaration-empty-line-before': ['always', {
      except: [
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'after-declaration',
        'inside-single-line-block',
      ],
    }],
    'property-no-unknown': [true, {
      // https://emotion.sh/docs/labels#gatsby-focus-wrapper
      ignoreProperties: ['label'],
    }],
    'max-line-length': 120,
    // Until styled-components stylelint libraries are updated to address styleling v13 value-keyword-case errors on
    // things like:
    /*
      css`
        ${styles}
      `
    */
    // we need to manually disable stylelint checks for such properties
    'value-keyword-case': ['lower', {
      ignoreProperties: [
        // eslint-disable-next-line no-useless-escape
        '/^.*\$.*$/',
      ],
    }],
  },
};
