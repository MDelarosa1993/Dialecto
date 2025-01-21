import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LandingPageController extends Controller {
  @service('router') router;
  @action
  getStarted() {
    this.router.transitionTo('signup');
  }

  @action
  login() {
    this.router.transitionTo('login');
  }
}
