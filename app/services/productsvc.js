import Ember from 'ember';

export default Ember.Service.extend({
  getProducts() {
    let products = [];

    products.push({
      id: '1',
      name: 'Basic Scarves',
      description: 'A simple hand-crafted scarf',
      cost: 50
    });

    products.push({
      id: '2',
      name: 'Simple hat',
      description: 'A basic hand-sewn hat',
      cost: 25
    });

    products.push({
      id: '3',
      name: 'Parka!',
      description: 'Parka parka parka :-)',
      cost: 100
    });

    return products;
  },
  getProduct(id) {
    return this.getProducts().findBy('id', id);
  }
});
