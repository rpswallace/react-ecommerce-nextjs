module.exports = {
  trailingSlash: true,
  // https://nextjs.org/docs/basic-features/image-optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    loader: 'imgix',
    path: '/img/'
  }
}
