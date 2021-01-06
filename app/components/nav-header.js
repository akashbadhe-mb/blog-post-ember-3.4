import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("links", [
      {
        title: "Home",
        url: "index",
      },
    ]);
  },
  menuVisible: false,

  actions: {
    toggleMenu() {
      this.toggleProperty("menuVisible");
    },
  },
});
