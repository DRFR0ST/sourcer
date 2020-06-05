module.exports = {
    module: {
      rules: [
        // new rule: anything ending with ".md" is loaded with raw-loader
        {
          test: /\.md$/i,
          use: 'raw-loader'
        },
      ],
    },
  }