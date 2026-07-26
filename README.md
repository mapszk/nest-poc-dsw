# nest-poc

Ejemplo básico de NestJS para demostrar en la presentación de NestJS de la materia Desarrollo de Software.

Dos ejemplos, cada uno en su propia carpeta (sin mezclar `package.json`):

- `nest-example/`: endpoint `GET /products` con productos hardcodeados (sin DB), arquitectura clásica de Nest (module, controller, service, repository) para explicar inyección de dependencias.
- `meteor-example/`: mismo caso (listado de productos) pero con los patrones propios de Meteor — Collection, publish/subscribe, `Meteor.startup` — para contrastar contra el enfoque de Nest.

## Informe

https://docs.google.com/document/d/1-NeYEYYbMZmbcf9atty0duV3TnvL3P7WHvGgTnHI9Ws/edit?usp=sharing

## Presentación

https://gamma.app/docs/NestJS-d1x3mtvyy5wd1un

## Integrantes

- Pilaszek, Martin / 50672
- Cerquetti, Lázaro / 50336
- Cussitt, Bruno / 48784

## Uso

Nest:

```bash
cd nest-example
npm install
npm run start:dev
```

Servidor en `http://localhost:3000/products`.

Meteor (requiere [Meteor CLI](https://www.meteor.com/install)), corre ambos a la vez sin pisarse:

```bash
cd meteor-example
npm install
npm start
```

UI en `http://localhost:3001/` — lista de productos con Tracker/minimongo.
