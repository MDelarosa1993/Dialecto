import EmberRouter from '@ember/routing/router';
import config from 'dialecto/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = '/';
}

Router.map(function () {
  this.route('landingPage', { path: '/' });
  this.route('signup');
  this.route('login');
});
