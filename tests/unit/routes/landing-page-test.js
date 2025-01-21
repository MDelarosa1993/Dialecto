import { module, test } from 'qunit';
import { setupTest } from 'dialecto/tests/helpers';

module('Unit | Route | landingPage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:landing-page');
    assert.ok(route);
  });
});
