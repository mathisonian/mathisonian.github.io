const routes = module.exports = require('next-routes')();

routes
  .add('home')
  .add('work', '/work/:category')
  .add('press', '/press')
  .add('writing', '/writing')
  .add('weblog-redirect', '/weblog/:slug?')
  .add('about-redirect', '/about')
  .add('keith-redirect', '/com.asmallgrin.www')
  .add('portfolio-redirect', '/portfolio');
