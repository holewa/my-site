import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'  // this allows dynamic SPA-style routing
    }),
    paths: {
      base: 'https://holewa.github.io/my-site' // no trailing slash
    }
  }
};
