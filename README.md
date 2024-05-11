
# Demo del proyecto 🚀

https://mercadoweb.vercel.app/



## Mercado Web

Generacionde paginas Web dinamicas desde el backend con Handlebars y los motores de
plantillas, parciales, helpers y de la integración de jQuery y Bootstrap.

- Partials:
    - Navbar.hbs
    - Productos.hbs
    - Footer.hbs    

- Rutas:
```bash
app.use(express.static(path.join(process.cwd(), "public")));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/cssjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery',express.static(__dirname + '/node_modules/jquery/dist'));

```
