import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Products } from '../imports/api/products/products';

// Subscribe/publish: el cliente pide datos, el servidor decide qué manda.
// Products.find() en cliente queda reactivo automáticamente (minimongo).
Meteor.subscribe('products');

Meteor.startup(() => {
  const list = document.getElementById('products');

  // UI mínima sin Blaze/React: Tracker.autorun re-corre solo cuando
  // Products.find() cambia (llega la subscripción, se agrega un producto, etc).
  Tracker.autorun(() => {
    const products = Products.find().fetch();
    list.innerHTML = products
      .map((p) => `<li>${p.name} — $${p.price}</li>`)
      .join('');
  });
});
