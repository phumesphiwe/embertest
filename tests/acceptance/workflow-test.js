import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | workflow', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /workflow', async function(assert) {
    await visit('/workflow');

    assert.equal(currentURL(), '/workflow');
  });
});
