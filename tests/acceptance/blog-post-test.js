import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { click, currentURL, visit } from "@ember/test-helpers";

module("Acceptance | blog post", function (hooks) {
  setupApplicationTest(hooks);
  // setupMirage(hooks);
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
    assert.notEqual(
      this.element.querySelectorAll(".post-card").length,
      0,
      "should display posts"
    );
  });

  test("should show details for a specific post", async function (assert) {
    await visit("/posts");
    await click(this.element.querySelector('a[href*="/posts/2"]'));
    assert.equal(currentURL(), "/posts/2", "should navigate to details route");
    assert.ok(
      this.element
        .querySelector(".post-details .post-header")
        .textContent.toLowerCase()
        .includes("qui est esse"),
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
