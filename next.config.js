module.exports = {
  webpack(config) {
    config.module.rules.push({
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
    })

    return config
  },
  future: {
    webpack5: true,
  },
}
