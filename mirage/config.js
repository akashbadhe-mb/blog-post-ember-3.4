export default function () {
  this.urlPrefix = "https://jsonplaceholder.typicode.com/";
  this.get("/posts", (schema) => {
    return schema.db.posts;
  });

  this.get("/posts/:post_id", (schema, request) => {
    return schema.db.posts.find(request.params.post_id);
  });

  this.get("/posts/:post_id/comments", (schema, request) => {
    return schema.db.comments.where(c => c.postId === request.params.post_id);
  });
}
