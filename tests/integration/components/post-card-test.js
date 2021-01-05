import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, settled } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | post-card", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    let post = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    };
    this.set("post", post);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{post-card}}`);

    assert.equal(this.element.textContent.trim(), "");

    // Template block usage:

    await render(hbs`
      {{#post-card post=post}}
        template block text
      {{/post-card}}
    `);

    return settled().then(() => {
      assert.dom(this.element.querySelector(".card-link")).hasText(post.title);
      assert.dom(this.element.querySelector(".card-text")).hasText(post.body);
    });
  });
});
