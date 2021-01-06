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
    this.server.createList("post", 3);
    await visit("/posts");
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
    await visit(`/posts/${post.id}`);
    assert.ok(
      this.element
        .querySelector(".post-details .post-header")
        .textContent.includes(post.title),
      "should show post title"
    );
  });

  test("should display post comments", async function (assert) {
    let comment = { name: 'akash', email: 'akash@gmail.com' };
    let post = this.server.create("post", {
      title: "My first blog",
      body: "This is my very first blog.",
      comments: [
        this.server.create('comment', comment),
      ]
    });
    await visit(`/posts/${post.id}`);
    assert.ok(
      this.element.querySelector(".comment-container .panel-heading").textContent.includes(comment.name),
      post.title,
      "should display user name in comments"
    );

    assert.ok(
      this.element.querySelector(".comment-container .panel-heading").textContent.includes(comment.email),
      post.title,
      "should display user email in comments"
    );
  });
});
