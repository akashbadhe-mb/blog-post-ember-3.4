import { Factory } from "ember-cli-mirage";

export default Factory.extend({
  name(i) {
    return `User name ${i}`;
  },
  email(i) {
    return `user${i}@mindbody.com`;
  },

  body(i) {
    return `My view on this post ${i}`;
  },
});
