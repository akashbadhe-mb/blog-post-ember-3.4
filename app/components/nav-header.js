import Component from "@ember/component";

export default Component.extend({
  links: [
    {
      title: "Home",
      url: "index",
    },
  ],
  menuVisible: false,

  actions: {
    toggleMenu() {
      this.toggleProperty("menuVisible");
    },
  },
});
