import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | post-comment", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let comment = {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
    };
    this.set("comment", comment);

    // Template block usage:
    await render(hbs`
      {{#post-comment comment=comment}}
      {{/post-comment}}
    `);
    assert.ok(
      this.element
        .querySelector(".panel-heading strong")
        .textContent.includes(comment.email),
      "should show email in title"
    );
    assert.ok(
      this.element
        .querySelector(".panel-heading strong")
        .textContent.includes(comment.name),
      "should show name in title"
    );

    assert.ok(
      this.element
        .querySelector(".panel-body")
        .textContent.includes(comment.body),
      "should show body"
    );

    assert.ok(
      this.element
        .querySelector(".thumbnail img"),
      "should show image"
    );

  });
});
