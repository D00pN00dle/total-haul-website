// svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    csp: {
      mode: 'nonce',
      directives: {
        'default-src': ['self'],
        'script-src': [
          'self',
          "'unsafe-eval'",
          'unsafe-inline',
          'https://challenges.cloudflare.com'
        ],
        'style-src': ['self', "'unsafe-inline'"],
        'img-src': ['self', 'data:', 'https:'],
        'connect-src': [
          'self',
          'https://challenges.cloudflare.com',
          'wss:'
        ],
        'frame-src': ['self', 'https://challenges.cloudflare.com'],
        'worker-src': ["'self'", 'blob:']
      }
    }
  }
};

export default config;
