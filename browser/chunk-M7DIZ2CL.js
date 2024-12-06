import{e as r,s}from"./chunk-UEFORAMN.js";import{a as t}from"./chunk-TRNF7YA4.js";var n=class i{productoSeleccionado=null;productos=[{id:"1",nombre:"Caf\xE9 Latte",precio:25,imagenUrl:"https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=800&h=800&q=80",rating:4.5,descripcion:"Suave y cremoso caf\xE9 con leche perfectamente equilibrado.",categoria:"Bebidas",tiempoPreparacion:"10-15 min",ingredientes:["Caf\xE9 espresso","Leche vaporizada","Espuma de leche"],detalles:"Nuestro Caf\xE9 Latte est\xE1 preparado con granos selectos y leche fresca local."},{id:"2",nombre:"Muffin de Ar\xE1ndanos",precio:30,imagenUrl:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&h=800&q=80",rating:4.2,descripcion:"Delicioso muffin casero repleto de ar\xE1ndanos jugosos.",categoria:"Postres",tiempoPreparacion:"20-25 min",ingredientes:["Harina","Ar\xE1ndanos frescos","Az\xFAcar","Mantequilla","Huevos"],detalles:"Horneado fresco cada ma\xF1ana con ar\xE1ndanos de temporada."},{id:"3",nombre:"Cheesecake",precio:40,imagenUrl:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&h=800&q=80",rating:4.8,descripcion:"Cremoso cheesecake con una base crujiente de galleta.",categoria:"Postres",tiempoPreparacion:"30-35 min",ingredientes:["Queso crema","Galletas","Az\xFAcar","Mantequilla","Frutos rojos"],detalles:"Receta tradicional de Nueva York con un toque especial."},{id:"4",nombre:"Wrap de Vegetales",precio:42,imagenUrl:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&h=800&q=80",rating:4.3,descripcion:"Wrap saludable lleno de vegetales frescos y crujientes.",categoria:"Comidas",tiempoPreparacion:"15-20 min",ingredientes:["Tortilla integral","Lechuga","Tomate","Aguacate","Aderezo especial"],detalles:"Preparado con vegetales org\xE1nicos locales."},{id:"5",nombre:"Capuchino",precio:38,imagenUrl:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&h=800&q=80",rating:4.6,descripcion:"Capuchino arom\xE1tico con espuma de leche perfecta.",categoria:"Bebidas",tiempoPreparacion:"8-10 min",ingredientes:["Caf\xE9 espresso","Leche vaporizada","Cacao en polvo"],detalles:"Elaborado con granos de caf\xE9 premium tostados artesanalmente."},{id:"6",nombre:"T\xE9 Verde",precio:20,imagenUrl:"https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&h=800&q=80",rating:4.1,descripcion:"Refrescante t\xE9 verde con propiedades antioxidantes.",categoria:"Bebidas",tiempoPreparacion:"5-7 min",ingredientes:["Hojas de t\xE9 verde","Agua filtrada","Miel (opcional)"],detalles:"T\xE9 verde org\xE1nico importado directamente de Jap\xF3n."},{id:"7",nombre:"Mocha Especial",precio:45,imagenUrl:"https://images.unsplash.com/photo-1579888071069-c107a6f79d82?auto=format&fit=crop&w=800&h=800&q=80",rating:4.7,descripcion:"Deliciosa mezcla de espresso, chocolate belga y leche cremosa.",categoria:"Bebidas",tiempoPreparacion:"10-12 min",ingredientes:["Caf espresso","Chocolate belga","Leche vaporizada","Crema batida"],detalles:"Preparado con chocolate belga de primera calidad y caf\xE9 premium."},{id:"8",nombre:"Frappuccino Caramelo",precio:48,imagenUrl:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&h=800&q=80",rating:4.9,descripcion:"Bebida helada con caf\xE9, caramelo y crema batida.",categoria:"Bebidas",tiempoPreparacion:"8-10 min",ingredientes:["Caf\xE9","Caramelo","Leche","Hielo","Crema batida"],detalles:"Refrescante bebida perfecta para d\xEDas calurosos."},{id:"9",nombre:"Chai Latte Especiado",precio:35,imagenUrl:"https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&h=800&q=80",rating:4.6,descripcion:"T\xE9 chai con leche y mezcla \xFAnica de especias arom\xE1ticas.",categoria:"Bebidas",tiempoPreparacion:"7-9 min",ingredientes:["T\xE9 negro","Especias","Leche vaporizada","Miel"],detalles:"Mezcla especial de especias importadas de la India."},{id:"10",nombre:"Croissant de Almendras",precio:32,imagenUrl:"https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&h=800&q=80",rating:4.8,descripcion:"Croissant horneado con almendras caramelizadas.",categoria:"Postres",tiempoPreparacion:"5-7 min",ingredientes:["Masa de hojaldre","Almendras","Az\xFAcar glass","Mantequilla"],detalles:"Horneado fresco cada ma\xF1ana con mantequilla francesa."},{id:"11",nombre:"Bowl de A\xE7a\xED",precio:52,imagenUrl:"https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&h=800&q=80",rating:4.5,descripcion:"Bowl refrescante de a\xE7a\xED con frutas frescas y granola.",categoria:"Desayunos",tiempoPreparacion:"10-12 min",ingredientes:["A\xE7a\xED","Pl\xE1tano","Fresa","Granola","Miel"],detalles:"Preparado con a\xE7a\xED org\xE1nico y frutas de temporada."},{id:"12",nombre:"Sandwich Club",precio:58,imagenUrl:"https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&h=800&q=80",rating:4.4,descripcion:"Sandwich triple con pavo, tocino y aguacate.",categoria:"Comidas",tiempoPreparacion:"12-15 min",ingredientes:["Pan integral","Pavo","Tocino","Aguacate","Lechuga"],detalles:"Pan reci\xE9n horneado y ingredientes premium."},{id:"13",nombre:"Tarta de Chocolate",precio:45,imagenUrl:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&h=800&q=80",rating:4.9,descripcion:"Tarta de chocolate belga con ganache.",categoria:"Postres",tiempoPreparacion:"5-7 min",ingredientes:["Chocolate belga","Crema","Cacao en polvo","Frambuesas"],detalles:"Receta exclusiva con chocolate belga 70% cacao."},{id:"14",nombre:"Brownie de Chocolate",precio:42,imagenUrl:"https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800",rating:4.3,descripcion:"Delicioso brownie de chocolate negro, h\xFAmedo por dentro y crujiente por fuera.",categoria:"Postres",tiempoPreparacion:"5-7 min",ingredientes:["Chocolate negro 70%","Mantequilla","Huevos","Nueces","Cacao en polvo"],detalles:"Horneado diariamente con chocolate premium y nueces seleccionadas."},{id:"15",nombre:"Ensalada C\xE9sar",precio:48,imagenUrl:"https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&h=800&q=80",rating:4.4,descripcion:"Ensalada fresca con pollo a la parrilla y aderezo c\xE9sar.",categoria:"Comidas",tiempoPreparacion:"10-12 min",ingredientes:["Lechuga romana","Pollo","Crutones","Queso parmesano"],detalles:"Aderezo c\xE9sar preparado en casa."}];setProductoSeleccionado(e){this.productoSeleccionado=e}getProductoSeleccionado(){return this.productoSeleccionado}getProductoPorId(e){let a=this.productos.find(o=>o.id===e);return a?r(a):r(this.productoSeleccionado)}getProductos(){return r(this.productos)}agregarProducto(e){return new Promise((a,o)=>{if(this.productos.some(d=>d.id===e.id))return o("El producto ya existe");this.productos.push(e),a(e)})}actualizarPromocion(e,a){let o=this.productos.findIndex(c=>c.id===e);return o===-1?Promise.reject("Promoci\xF3n no encontrada"):(this.productos[o]=t(t({},this.productos[o]),a),Promise.resolve(this.productos[o]))}static \u0275fac=function(a){return new(a||i)};static \u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"})};export{n as a};