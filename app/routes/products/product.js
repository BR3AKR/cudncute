import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const productsvc = this.get('productsvc');
    const id = params.product_id;
    return productsvc.getProduct(id);
  },
  productsvc: Ember.inject.service('productsvc')
})
