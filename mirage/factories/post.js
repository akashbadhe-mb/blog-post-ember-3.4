import { Factory, trait} from "ember-cli-mirage";

export default Factory.extend({
  title(i) {
    return `Blog post ${i}`;
  },
  body(i) {
    return `Blog post body ${i}`;
  },
  userId() {
    let min = 1;
    let max = 20;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  withComments: trait({
    afterCreate(post, server) {
      server.createList('comment', 5, { post });
    }
  })
});
