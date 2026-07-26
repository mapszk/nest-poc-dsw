import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// La Collection ES la capa de datos: en Meteor no se envuelve con un
// repository propio, se usa directo (es el patrón idiomático).
export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  Meteor.publish('products', () => Products.find());
}
