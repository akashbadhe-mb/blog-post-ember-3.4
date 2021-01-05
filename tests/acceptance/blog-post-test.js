import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { currentURL, visit } from "@ember/test-helpers";

module("Acceptance | blog post", function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test("should redirect to posts route", async function (assert) {
    await visit("/");
    assert.equal(
      currentURL(),
      "/posts",
      "should redirect to posts automatically"
    );
  });

  test("should show post list", async function (assert) {
    await visit("/posts");
    this.server.createList("post", 3);
    assert.equal(
      this.element.querySelectorAll(".post-card").length,
      3,
      "should display posts"
    );
  });

  test("should show details for a specific post", async function (assert) {
    let post = this.server.create("post", {
      title: "My first blog",
      body: "This is my very first blog.",
    });
    await visit(`/movies/${post.id}`);
    assert.ok(
      this.element
        .querySelector(".post-details .post-header")
        .textContent.toLowerCase()
        .includes(post.title),
      "should show post title"
    );
  });

  test("should display post comments", async function (assert) {
    await visit("/posts/2");
    assert.notEqual(
      this.element.querySelectorAll(".comment-container").length,
      0,
      "should display post comments"
    );
  });
});
