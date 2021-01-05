import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  enter: function () {
    window.scrollTo(0, 0);
    this._super.apply(this, arguments);
  },
});

Router.map(function () {
  this.route("posts");
  this.route("post", { path: "/posts/:post_id" });
});

export default Router;
