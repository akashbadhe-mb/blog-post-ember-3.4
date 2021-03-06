import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | nav-header", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`{{nav-header}}`);

    assert.equal(this.element.textContent.trim(), "Home");
  });
});
