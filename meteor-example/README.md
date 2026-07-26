# Ejemplo Meteor

Mismo listado de productos, pero usando los patrones propios de Meteor — no una copia del patrón DI/repository del ejemplo Nest (Meteor no usa eso).

- `imports/api/products/products.js` — `Mongo.Collection`, la capa de datos estándar de Meteor (no hace falta envolverla en un repository), más `Meteor.publish('products', ...)`.
- `server/main.js` — `Meteor.startup` siembra datos de prueba si la colección está vacía.
- `client/main.html` / `client/main.js` — UI mínima sin framework: `Tracker.autorun` redibuja un `<ul>` cada vez que `Products.find()` cambia (colección isomórfica, minimongo del lado cliente).

Patrones Meteor clave: Collections como capa de datos, publish/subscribe para sincronizar datos cliente-servidor, `Meteor.startup` para fixtures, código isomórfico (misma API de colección en cliente y servidor).

Para comparar contra el ejemplo module/controller/service/repository de Nest en `../nest-example/src/products`.

## Uso

```bash
npm install
npm start
```

Corre en el puerto 3001 (fijado en `package.json`, así no pisa a `nest-example` en 3000). Mongo embebido arranca solo.
