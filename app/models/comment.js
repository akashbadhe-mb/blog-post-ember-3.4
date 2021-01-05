import DS from 'ember-data';

export default DS.Model.extend({
    postId: DS.attr(),
    name: DS.attr(),
    email: DS.attr(),
    body: DS.attr(),
});
