import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayHello: function() {
      alert('Hello');
    }
  },
  title: 'My Blog Post',
  body: 'This is the body of my blog post',
  authors: ['William', 'Robert', 'Jason', 'Eunice'],
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'John Doe',
      comment: 'Nice Post!'
    },
    {
      name: 'Jeff William',
      comment: 'Good Job!'
    }
  ]
});
