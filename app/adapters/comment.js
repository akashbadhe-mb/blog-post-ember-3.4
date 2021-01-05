import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  query(store, type, query) {
    return this.ajax(`https://jsonplaceholder.typicode.com/posts/${query}/comments`);
  },
});
