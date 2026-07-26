import { Meteor } from 'meteor/meteor';
import { Products } from '../imports/api/products/products';

Meteor.startup(async () => {
  if ((await Products.find().countAsync()) === 0) {
    await Products.insertAsync({ name: 'Teclado mecánico', price: 89.99 });
    await Products.insertAsync({ name: 'Mouse inalámbrico', price: 29.99 });
    await Products.insertAsync({ name: 'Monitor 27"', price: 249.99 });
  }
});
