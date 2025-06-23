/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        ({ request }, callback) => {
          if (request && (request.includes('googleapis') || request.includes('gstatic'))) {
            return callback(null, 'commonjs ' + request);
          }
          callback();
        },
      ];
    }
    return config;
  },
};

module.exports = nextConfig; 