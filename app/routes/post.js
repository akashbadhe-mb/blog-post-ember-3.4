import Route from "@ember/routing/route";
import { hash } from 'rsvp'
export default Route.extend({
  model(params) {
    return hash({
        post: this.store.findRecord("post", params.post_id),
        comments: this.store.query('comment', params.post_id, 'comments'),
    });
  },
});
