export default function () {
  this.urlPrefix = "https://jsonplaceholder.typicode.com/";
  this.get("/posts", (schema) => {
    return schema.posts.all();
  });

  this.get("/posts/:post_id", (schema, request) => {
    return schema.posts.find(request.params.id);
  });
}
