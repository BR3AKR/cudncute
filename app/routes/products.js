import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const productsvc = this.get('productsvc')
    return productsvc.getProducts();
  },
  productsvc: Ember.inject.service('productsvc')
});
