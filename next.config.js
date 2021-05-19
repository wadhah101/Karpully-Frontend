const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack(config) {
    const myRules = [
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgo: true,
            },
          },
        ],
      },
    ];

    config.module.rules = config.module.rules.concat(myRules);
    return config;
  },
  future: {
    webpack5: true,
  },
});
