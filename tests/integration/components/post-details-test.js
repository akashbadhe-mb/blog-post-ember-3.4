import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | post-details", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    let postDetails = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    };

    this.set('postDetails', postDetails);
    // Template block usage:
    await render(hbs`
      {{#post-details post=postDetails}}
      {{/post-details}}
    `);

    assert.ok(
      this.element
        .querySelector(".post-header")
        .textContent.includes(postDetails.title),
      "should show title"
    );

    assert.ok(
      this.element
        .querySelector(".post-body")
        .textContent.includes(postDetails.body),
      "should show body"
    );
  });
});
