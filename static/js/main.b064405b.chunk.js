(this.webpackJsonpcocina=this.webpackJsonpcocina||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(31),r=c.n(s),i=(c(37),c(38),c(5)),o=c(7),l=c(23),d=c(15),j=c(28),b=c(4),u=c(21);c(49),c(40);u.a.initializeApp({appId:"1:321255239429:web:46a9952644af1dc393d16c",apiKey:"AIzaSyB01-3puILPI-r0yT9zSGOGdkw-ULRtVDw",projectId:"la-cocina-de-la-pipi",authDomain:"la-cocina-de-la-pipi.firebaseapp.com",databaseURL:"https://la-cocina-de-la-pipi-default-rtdb.firebaseio.com",storageBucket:"la-cocina-de-la-pipi.appspot.com",messagingSenderId:"321255239429"});var m=u.a.auth(),h=u.a.firestore(),O={};O.auth=m,O.getCollection=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=h.collection(t),n=c.doc?a.doc(c.doc):a,s=c.where?a.where(c.where[0],c.where[1],c.where[2]):n,r=c.sort?s.orderBy(c.sort.key,c.sort.order):s;r.get().then((function(t){e(c.doc?[t.data()]:t.docs.map((function(e){return e.data()})))})).catch((function(e){console.error("Error geting documents: ",e)}))},O.setCollection=function(e,t,c,a){var n=h.collection(e);t.forEach((function(e){e[c]?n.doc(e[c]).set(e):n.add(e).then((function(e){console.log("Document written with ID: ",e.id),a(e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}))},O.updateCollectionDoc=function(e,t,c){h.collection(e).doc(t).update(c).catch((function(e){console.error("Error updating document: ",e)}))},O.updateStock=function(e,t,c){h.collection(e).doc(t).update({stock:u.a.firestore.FieldValue.increment(c)}).catch((function(e){console.error("Error updating document: ",e)}))},O.deleteCollectionDoc=function(e,t,c){h.collection(e).doc(t).delete(),c(null)},O.getActiveUserOrders=function(e){O.activeUser(e)};var p=c(0),x=n.a.createContext([]),f=function(){return Object(a.useContext)(x)},g=function(e){var t=e.children,c=Object(a.useState)(),n=Object(b.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)(""),o=Object(b.a)(i,2),d=o[0],j=o[1],u={},m=O.auth;return u.setUser=r,u.error=d,u.setError=j,Object(a.useEffect)((function(){u.error=d}),[d]),Object(a.useEffect)((function(){u.clearError()}),[s]),u.login=function(e,t){console.log(e,t),m.signInWithEmailAndPassword(e,t).then((function(e){u.active()})).catch((function(e){return u.errores(e)}))},u.logout=function(){m.signOut().then((function(){u.active()})).catch((function(e){return u.errores(e)}))},u.create=function(e,t,c){c?m.createUserWithEmailAndPassword(e,t).then((function(e){r(e.user),u.updateAccountName(c),u.verificateEmail()})).catch((function(e){return u.errores(e)})):u.errores({code:"auth/no-name",message:"You must enter your Name"})},u.updateAccountName=function(e){m.currentUser.updateProfile({displayName:e}).then((function(){return u.active()})).catch((function(e){return u.errores(e)}))},u.updateUserProfile=function(e,t){},u.getUserProfile=function(e,t){},u.deleteUserProfile=function(e,t){},u.verificateEmail=function(){m.currentUser.sendEmailVerification().then((function(){})).catch((function(e){return u.errores(e)}))},u.active=function(){m.currentUser&&r(m.currentUser),m.onAuthStateChanged((function(e){return r(e)}))},u.recuperarCuenta=function(e){e?m.sendPasswordResetEmail(e).then((function(){})).catch((function(e){return u.errores(e)})):u.errores({code:"auth/invalid-email",message:"You must enter a valid email address"})},u.errores=function(e){var t={};t.error=!!e.code,t.code=e.code,t.full=e;var c=[{msg:"auth/no-name",dest:["name"]},{msg:"auth/wrong-password",dest:["pass"]},{msg:"auth/weak-password",dest:["pass"]},{msg:"auth/user-not-found",dest:["mail"]},{msg:"auth/invalid-email",dest:["mail"]},{msg:"auth/email-already-in-use",dest:["mail"]},{msg:"auth/too-many-requests",dest:["pass","mail"]}].filter((function(e){return e.msg===t.code})).map((function(e){return e.dest}))[0];c=c||["mail","pass","name"];var a,n=Object(l.a)(c);try{for(n.s();!(a=n.n()).done;){var s=a.value;t[s]=!0}}catch(t){n.e(t)}finally{n.f()}j(t),setTimeout((function(){u.clearError(t.code)}),1e4)},u.clearError=function(e){j({error:!1,code:e||"errorCleared",full:""})},Object(p.jsx)(x.Provider,{value:[s,u],children:t})},v=n.a.createContext([]),N=function(){return Object(a.useContext)(v)},y=function(e){var t=e.children,c={},n=[],s=Object(a.useState)(n),r=Object(b.a)(s,2),i=r[0],o=r[1],u=f(),m=Object(b.a)(u,2),h=m[0],x=(m[1],Object(a.useState)(null)),g=Object(b.a)(x,2),N=g[0],y=g[1],C=Object(a.useState)(n),w=Object(b.a)(C,2),k=w[0];w[1];return Object(a.useEffect)((function(){N&&o(n)}),[N]),Object(a.useEffect)((function(){}),[i,k,h]),c.cart=i,c.order=N,c.setOrder=y,c.addToCart=function(e,t){return t>0&&(c.isInCart(e.codigo)?i[c.indexOf(e.codigo)].cantidad+=t:o([].concat(Object(j.a)(i),[Object(d.a)({cantidad:t},e)])))&&c.set(),!0},c.set=function(){return o(Object(j.a)(i))},c.clearCart=function(){return o(n)},c.isInCart=function(e){return i.some((function(t){return t.codigo===e}))},c.indexOf=function(e){return i.findIndex((function(t){return t.codigo===e}))},c.removeItem=function(e){return i.splice(c.indexOf(e.codigo),1)&&c.set()},c.getTotal=function(){return i.reduce((function(e,t){return t.cantidad*t.precio+e}),0)},c.cantidades=function(e,t){var a=c.indexOf(e.codigo);i[a].cantidad+=t,i[a].cantidad>i[a].stock?i[a].cantidad=i[a].stock:i[a].cantidad<=0&&c.removeItem(e),c.set()},c.buy=function(e){if(h&&!h.emailVerified){var t={buyer:{id:h.uid,email:h.email,name:h.displayName},cart:i,date:new Date,total:c.getTotal(),estado:"pendiende"};N?c.update(N):O.setCollection("orders",[t],"",y)}c.set()},c.setReservation=function(e){var t,c=Object(l.a)(i);try{for(c.s();!(t=c.n()).done;)t.value}catch(a){c.e(a)}finally{c.f()}},c.update=function(e){var t={cart:i,total:c.getTotal()};O.updateCollectionDoc("orders",e,t),c.set()},c.clearBuy=function(e){e&&O.deleteCollectionDoc("orders",e,y)},c.updatesStock=function(){i.forEach((function(e){O.updateCollectionDoc("items",e.codigo,{stock:e.stock-e.cantidad})}))},c.getCantidadTotal=i.reduce((function(e,t){return t.cantidad+e}),0),c.errores=function(e){},c.clearOrder=function(){y(null)},Object(p.jsx)(v.Provider,{value:[i,c],children:t})};function C(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"row py-3 justify-content-center",children:[Object(p.jsx)("div",{className:"col-8 pb-4 align-self-center",children:Object(p.jsx)("h1",{children:"No es solo hacer comida."})}),Object(p.jsxs)("div",{className:"col-10 col-md-9 col-lg-8 align-self-center",children:[Object(p.jsx)("p",{children:"En este momento tan especial de aislamiento social obligatorio, solo se necesitan unos minutos de paseo en las distintas redes sociales -nuestro \xfanico encuentro posible con otros adem\xe1s de la aventura de ir al s\xfaper- para darnos cuenta de un fen\xf3meno clar\xedsimo: cocinar se convirti\xf3 en una de las actividades estrella de la cuarentena."}),Object(p.jsx)("p",{children:"Tiene todas las de ganar: es una actividad placentera que muchas veces no podemos hacer por falta de tiempo pero que ahora es un oasis para la cabeza de cada cocinero -aficionado, profesional o novato- en el medio de la incertidumbre y la ansiedad que trajo la pandemia del coronavirus."}),Object(p.jsx)("p",{children:"\u201cDe esta cuarentena salimos todos cocineros\u201d. \u201cYa hice masa madre, me falta hacer gimnasia por Instagram y ya me recibo de cuarentena\u201d. Los chistes en Twitter, las im\xe1genes de pan y otras recetas caseras reci\xe9n hechas en los perfiles de amigos y familiares en Instagram y Facebook, \xa1a nosotros se nos dio por hacer milanesas!."})]})]}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-7",children:Object(p.jsxs)("div",{id:"calesita",className:"carousel slide","data-bs-ride":"carousel",children:[Object(p.jsx)("div",{className:"carousel-inner",children:[{src:"images/productos/berenjenas.png",alt:"Berenjenas"},{src:"images/productos/brocoli.png",alt:"Brocoli"},{src:"images/productos/garbanzos.png",alt:"Garbanzos"},{src:"images/productos/ham_carne_cocida.png",alt:"Ham Carne"},{src:"images/productos/ham_carne_cruda.png",alt:"Ham Carne"},{src:"images/productos/ham_cerdo_cruda.png",alt:"Ham Cerdo"},{src:"images/productos/ham_remolacha_cruda.png",alt:"Ham Remolacha"},{src:"images/productos/mila_berenjena_cruda.png",alt:"Mila Berenjena"},{src:"images/productos/mila_calabaza_cocida.png",alt:"Mila Calabaza"},{src:"images/productos/mila_peceto_cruda.png",alt:"Mila Peceto"},{src:"images/productos/mila_pollo_cruda.png",alt:"Mila Pollo"},{src:"images/productos/nalga.png",alt:"Nalga"},{src:"images/productos/peceto.png",alt:"Peceto"},{src:"images/productos/remolacha.png",alt:"Remolacha"},{src:"images/productos/zapallo.png",alt:"Zapallo"},{src:"images/productos/zucchini.png",alt:"Zucchini"}].map((function(e,t){return Object(p.jsx)("div",{className:0===t?"carousel-item active":"carousel-item",children:Object(p.jsx)("img",{className:"d-block w-100 mx-auto",style:{margin:"auto"},src:"./"+e.src,alt:e.alt},t+1)},t)}))}),Object(p.jsxs)("a",{className:"carousel-control-prev",href:"#calesita",role:"button","data-slide":"prev",children:[Object(p.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(p.jsxs)("a",{className:"carousel-control-next",href:"#calesita",role:"button","data-slide":"next",children:[Object(p.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(p.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-8 align-self-center",children:Object(p.jsx)("p",{className:"pt-2",children:"Nuestro objetivo es simple, compartir el amor que le ponemos a la comida, para que todos puedan comer rico y sano =)"})})})]})}function w(){var e=f(),t=Object(b.a)(e,2),c=t[0],n=(t[1],Object(a.useState)("")),s=Object(b.a)(n,2),r=(s[0],s[1],Object(a.useState)("")),i=Object(b.a)(r,2);i[0],i[1];Object(a.useEffect)((function(){}),[c]);return Object(p.jsxs)("div",{className:"row justify-content-center py-3",children:[Object(p.jsx)("div",{className:"col-12 pb-4",children:Object(p.jsx)("h1",{children:"Bienvenidos!"})}),c?Object(p.jsx)("div",{className:"col-8 col-md-7 col-lg-6",children:Object(p.jsxs)("form",{id:"FireLogin",name:"fireLogin",children:[Object(p.jsxs)("div",{className:"input-group input-group-lg row",children:[Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("input",{type:"email",className:"form-control",name:"Nombre",placeholder:c&&c.displayName||"Ingrese nombre",id:"nombre","aria-describedby":"sizing-addon1"})}),Object(p.jsx)("div",{className:"col-2"}),Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("input",{type:"email",className:"form-control",name:"correo",placeholder:c&&c.email||"No se puede cambiar el correo",id:"Correo","aria-describedby":"sizing-addon1",disabled:"true"})})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-lg btn-primary btn-block btn-signin",id:"logIn",onClick:function(e){e.preventDefault()},children:"Guardar Usuario"})]})}):Object(p.jsx)("div",{children:Object(p.jsx)("h2",{children:"Debe ingresar a su cuenta para ver el perfil."})})]})}function k(e){var t=e.size,c=void 0===t?5:t,a=e.space,n=void 0===a?5:a,s=e.text,r=void 0===s?"Loading...":s;return Object(p.jsx)("div",{className:"spinner-border text-primary m-"+n,style:{width:c+"rem",height:c+"rem"},role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:r})})}function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _(e){var t=e.toDate().toString().split(" ");return t[2]+"/"+t[1]+"/"+t[3]+" "+t[4].slice(0,-3)}function P(e){var t=e.listaProductos;return Object(p.jsx)("div",{className:"row",id:"lista_productos",children:t.map((function(e,t){return Object(p.jsx)(I,{nombre:E(e.nombre),texto:e.texto,img:e.img,stock:e.stock,botonera:Object(p.jsx)(S,Object(d.a)({},e)),detalle:Object(p.jsx)(i.b,{to:"../productos/"+e.familia+"/"+e.codigo,children:" Ver detalle "})},t)}))})}function S(e){var t=N(),c=Object(b.a)(t,2),n=(c[0],c[1]),s=Object(a.useState)(0),r=Object(b.a)(s,2),o=r[0],l=r[1],d=Object(a.useState)(!1),j=Object(b.a)(d,2),u=j[0],m=j[1],h=function(e){return Object(p.jsx)("span",{className:"ns-btna",children:Object(p.jsx)("button",{onClick:function(){return O(e)},type:"button",className:"btn btn-danger botonCompra",children:"Agregar al carrito"})})},O=function(e){return n.addToCart(e.item,o)&&m(!u)},x=function(e){var t=e.dir;return Object(p.jsx)("span",{className:"ns-btn",children:Object(p.jsx)(i.b,{to:"#",onClick:function(){return f(t)},"data-dir":t,children:Object(p.jsx)("span",{className:"icon-"+t})})})},f=function(t){"minus"===t&&o>0?l(o-1):"plus"===t&&e.stock-o>0&&l(o+1)},g=function(){return Object(p.jsx)("input",{type:"text",style:{background:"white"},className:"pl-ns-value",maxLength:"2",defaultValue:o})};return Object(p.jsx)("div",{className:"botonera_productos",children:Object(p.jsxs)("div",{className:"number-spinner",children:[Object(p.jsx)(x,{dir:"minus"})," ",Object(p.jsx)(g,{})," ",Object(p.jsx)(x,{dir:"plus"})," ",Object(p.jsx)(h,{item:e})]})})}function I(e){var t=e.nombre,c=e.texto,a=e.img,n=(e.stock,e.botonera),s=e.detalle;return Object(p.jsx)("div",{className:"col-12 col-md-6 col-xl-4 d-flex align-items-stretch cartas_productos",children:Object(p.jsxs)("div",{className:"card mt-3",children:[Object(p.jsx)("img",{className:"card-img-top",src:"/CursoReact"+a,alt:t}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:t}),Object(p.jsx)("p",{className:"card-text"}),Object(p.jsx)("p",{className:"card-text",children:c}),n," ",s,Object(p.jsx)("p",{className:"card-text"})]})]})})}c(30);function z(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(o.g)().familia;return Object(a.useEffect)((function(){var e={where:!!s&&["familia","==",s]};O.getCollection(n,"items",e)}),[s]),Object(p.jsxs)("div",{className:"row justify-content-center py-3 mw-100",children:[Object(p.jsx)("div",{className:"col-12 pb-4",children:Object(p.jsx)("h1",{children:"No nos guardamos ning\xfan secreto, lo hacemos con amor."})}),Object(p.jsx)("div",{className:"col-10",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)("section",{className:"pt-1 mt-3 mx-3",children:[Object(p.jsx)("p",{className:"pb-2",children:"Todas nuestras milanesas est\xe1n rebozadas con rebozador Preferido y Avena natural, condimentadas con ajo y perejil, no tienen sal y tienen mucho amor."}),Object(p.jsx)("p",{children:"Todas nuestras hamburguesas son preparadas y congeladas en el d\xeda para asegurar su calidad."})]})})}),c.length>0?Object(p.jsx)(P,{listaProductos:c}):Object(p.jsx)(k,{size:"8",space:"5"})]})})]})}function T(e){var t=e.nombre,c=(e.familia,e.precio),a=e.texto,n=e.img,s=e.stock,r=e.botonera;e.detalle;return Object(p.jsx)("section",{className:"mb-5",children:Object(p.jsxs)("div",{className:"row m-5",children:[Object(p.jsx)("div",{className:"col-md-6 col-sm-12 mb-0 p-0",children:Object(p.jsx)("figure",{className:"view overlay rounded z-depth-1",children:Object(p.jsx)("a",{href:"/CursoReact"+n,children:Object(p.jsx)("img",{src:"/CursoReact"+n,alt:t,className:"img-fluid z-depth-1"})})})}),Object(p.jsx)("div",{className:"col-md-6 col-sm-12 m-0 p-0",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)("h5",{className:"card-title",children:E(t)})}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsx)("li",{className:"list-group-item",children:a}),Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsxs)("h6",{children:["Stock disponible: ",s," Kg."]})}),Object(p.jsxs)("li",{className:"list-group-item",children:["Precio: ",Object(p.jsxs)("strong",{children:["$",c]})]})]}),Object(p.jsx)("div",{className:"card-body",children:r})]})})]})})}function D(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(o.g)().id;return Object(a.useEffect)((function(){var e={doc:s};O.getCollection(n,"items",e)}),[s]),c.length>0?Object(p.jsx)(T,Object(d.a)({botonera:Object(p.jsx)(S,Object(d.a)({},c[0]))},c[0])):Object(p.jsx)(k,{size:"8",space:"5"})}function F(e){var t=e.id,c=e.titulo,a=(e.error,e.children),s=n.a.Children.toArray(a);return Object(p.jsx)("div",{className:"modal fade",id:t,tabIndex:"-1","aria-labelledby":"modal","aria-hidden":"true",children:Object(p.jsxs)("div",{className:"modal-dialog",style:{position:"relative"},children:[Object(p.jsxs)("div",{className:"modal-content",style:{position:"absolute"},children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h4",{className:"modal-title mx-4",id:"tituloModal",children:c}),Object(p.jsx)("button",{id:"botonCls",type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(p.jsxs)("div",{className:"modal-body",children:[s[0],Object(p.jsx)("div",{children:s[1]}),Object(p.jsx)("div",{className:"modal-footer",children:s[2]})]})]}),Object(p.jsx)("div",{style:{position:"absolute",zindex:"9000",opacity:"0.9",width:"100%",height:"100%",top:"100px"},children:s[3]})]})})}function L(e){e.nombre,e.cart;var t=e.cartTask,c=e.DetallePedido,a=e.loading,n=e.setLoading,s=t.getCantidadTotal>0?t.getCantidadTotal:"";return Object(p.jsxs)("div",{id:"pedidos",children:[Object(p.jsxs)("div",{id:"botoncompra",style:{display:""},children:[Object(p.jsxs)("button",{"data-toggle":"modal",type:"button",className:"btn btn-danger btn-lg order_desktop","data-target":"#pedido_online",children:["Carrito",Object(p.jsx)("span",{id:"total_carro_d",className:"badge bg-secondary",children:s})]}),Object(p.jsx)("button",{"data-toggle":"modal",type:"button",className:"btn btn-danger btn-lg order_mobile","data-target":"#pedido_online",children:Object(p.jsx)("span",{id:"total_carro_m",className:"badge bg-secondary",children:s})})]}),t.order?Object(p.jsxs)(F,{id:"pedido_online",titulo:"Gracias por su compra!",children:[Object(p.jsxs)(p.Fragment,{children:["Puedes ver tu orden con este numero o ingresando a ",Object(p.jsx)(i.b,{"data-dismiss":"modal",to:"/pedidos",children:"Pedidos"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("br",{}),Object(p.jsx)(i.b,{to:"/pedidos/"+t.order,"data-dismiss":"modal",children:t.order}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){navigator.clipboard.writeText(t.order)},className:"btn btn-secondary",children:"Copiar al portapeles"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{type:"button",onClick:function(){t.clearOrder()},"data-dismiss":s>0?"":"modal",className:"btn btn-secondary",children:"Finalizar"})})]}):Object(p.jsxs)(F,{id:"pedido_online",titulo:"Detalle del pedido",children:[Object(p.jsx)(c,{}),Object(p.jsx)(p.Fragment,{}),Object(p.jsxs)(p.Fragment,{children:[s>0&&Object(p.jsx)("button",{type:"reset",onClick:function(){return t.clearCart()},className:"btn btn-danger",children:"Vaciar carrito"}),s>0?Object(p.jsx)("button",{type:"button",onClick:function(){n(!0),t.buy()},value:"Enviar",className:"btn btn-success",children:"Terminar Compra"}):Object(p.jsx)("button",{type:"button",value:"Enviar","data-dismiss":"modal",className:"btn btn-secondary",children:"Seguir Comprando"})]}),a&&Object(p.jsx)(k,{size:"6"})]})]})}function B(){var e=N(),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(b.a)(s,2),o=r[0],l=r[1];Object(a.useEffect)((function(){l(!1)}),[n.order]),Object(a.useEffect)((function(){}),[c]);return Object(p.jsx)(L,{cartTask:n,cart:c,DetallePedido:function(){return Object(p.jsx)(p.Fragment,{children:c.length>0?Object(p.jsxs)("table",{className:"table table-hover",id:"tabla_pedidos_compuesta",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Producto"}),Object(p.jsx)("th",{scope:"col",children:"Cantidad"}),Object(p.jsx)("th",{scope:"col",children:"Precio"}),Object(p.jsx)("th",{scope:"col"})]})}),c.map((function(e,t){return Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.nombre}),Object(p.jsxs)("td",{className:"cantidad_unidades",children:[Object(p.jsx)("button",{className:"boton_menos",onClick:function(){return n.cantidades(e,-1)}}),e.cantidad,Object(p.jsx)("button",{className:"boton_mas",onClick:function(){return n.cantidades(e,1)}})]}),Object(p.jsxs)("td",{children:[e.precio,"$"]}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{onClick:function(){return n.removeItem(e)},children:"X"})})]})},t)})),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("th",{children:"Total"}),Object(p.jsxs)("th",{children:[n.getTotal(),"$"]})]})})]}):Object(p.jsxs)("table",{className:"table table-hover",id:"tabla_pedidos_compuesta",children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("th",{scope:"col",children:"El carrito esta Vacio"})})}),Object(p.jsx)("tbody",{children:Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsxs)("p",{children:["Hace tu pedido desde ",Object(p.jsx)(i.b,{to:"/productos","data-toggle":"modal",children:"aqui"}),", seleccionando los productos"]})})})})]})})},loading:o,setLoading:l})}function U(e){var t=e.titulo,c=e.children,a=n.a.Children.toArray(c);return console.log("aca",a[0]),Object(p.jsxs)("div",{className:"row justify-content-center py-3",children:[Object(p.jsx)("div",{className:"col-12 pb-4",children:Object(p.jsxs)("h1",{children:[t," "]})}),a[0]&&null!=a[0]&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h2",{children:"Orden Consultada"})}),Object(p.jsx)("div",{className:"col-10",children:a[0]})]}),a[1]&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h2",{children:"Pendientes"})}),Object(p.jsx)("div",{className:"col-10",children:a[1]})]}),a[2]&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h2",{children:"Entregados"})}),Object(p.jsx)("div",{className:"col-10",children:a[2]})]})]})}function R(){var e=Object(o.g)().id,t=N(),c=Object(b.a)(t,2),n=(c[0],c[1],f()),s=Object(b.a)(n,2),r=s[0],i=(s[1],Object(a.useState)([])),l=Object(b.a)(i,2),d=l[0],j=l[1],u=Object(a.useState)([]),m=Object(b.a)(u,2),h=m[0],x=m[1];Object(a.useEffect)((function(){r?O.getCollection(j,"orders",{where:["buyer.id","==",r.uid]}):j([])}),[r]),Object(a.useEffect)((function(){console.log(d)}),[d]),Object(a.useEffect)((function(){e?O.getCollection(x,"orders",{doc:e}):j([])}),[e]);var g=function(e){var t=e.ordenes,c=e.estado;return Object(p.jsxs)("table",{className:"accordion table table-condensed table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Fecha"})," ",Object(p.jsx)("th",{children:"Total"})," ",Object(p.jsx)("th",{children:"Estado"})," ",Object(p.jsx)("th",{})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return e.estado!==c&&c?"":Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("tr",{id:"tablaPedidos",children:[Object(p.jsx)("td",{children:_(e.date)}),Object(p.jsxs)("td",{children:["$",e.total," "]}),Object(p.jsxs)("td",{children:[e.estado," "]}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"btn btn-default btn-xs","data-toggle":"collapse","data-parent":"#tablaPedidos","data-target":"#orden-"+t,"aria-expanded":"true",children:"Ver Detalle"})})]}),Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colspan:"12",className:"hiddenRow",children:Object(p.jsx)("div",{className:"accordian-body collapse",id:"orden-"+t,children:Object(p.jsxs)("table",{className:"table table-striped",children:[Object(p.jsxs)("thead",{children:[" ",Object(p.jsxs)("tr",{children:[" ",Object(p.jsx)("th",{scope:"col",children:"Producto"})," ",Object(p.jsx)("th",{scope:"col",children:"Cantidad"})," ",Object(p.jsx)("th",{scope:"col",children:"Precio"})," ",Object(p.jsx)("th",{scope:"col",children:"Parcial"})]})," "]}),Object(p.jsx)("tbody",{children:e.cart.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.nombre}),Object(p.jsx)("td",{className:"cantidad_unidades",children:e.cantidad}),Object(p.jsxs)("td",{children:[e.precio,"$"]}),Object(p.jsxs)("td",{children:[e.precio*e.cantidad,"$"]})]})}))},t)]})})})})]})}))})]})};return r?Object(p.jsxs)(U,{titulo:"Pedidos de "+r.displayName,children:[e?Object(p.jsx)(g,{ordenes:h}):"",Object(p.jsx)(g,{ordenes:d,estado:"pendiende"}),Object(p.jsx)(g,{ordenes:d,estado:"entregado"})]}):Object(p.jsx)(U,{titulo:"Por favor inicie sesi\xf3n",children:e&&Object(p.jsx)(g,{ordenes:h})})}function A(e){var t=e.listado,c=Object(a.useState)([]),n=Object(b.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){O.getCollection(r,"items")}),[t]),Object(p.jsx)("div",{children:s.length>0?Object(p.jsx)(V,{listaProductos:s}):Object(p.jsx)(k,{size:"5",space:"5"})})}function V(e){var t=e.listaProductos;return Object(p.jsxs)("div",{className:"row justify-content-center py-3 mw-100",children:[Object(p.jsx)("div",{className:"col-12 pb-4",children:Object(p.jsx)("h1",{children:"Productos y precios"})}),Object(p.jsx)("div",{className:"col-10",children:Object(p.jsx)("section",{id:"tabla_precios",children:Object(p.jsxs)("table",{className:"table table-hover",id:"productos",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",colSpan:"1",children:"Producto"}),Object(p.jsx)("th",{scope:"col",colSpan:"1",children:"Variedad"}),Object(p.jsx)("th",{scope:"col",children:"            Precio"})]})}),Object(p.jsx)(M,{items:q(t)},"tabla")]},"tabla1")})})]})}function M(e){return e.items.map((function(e,t){return Object(p.jsxs)("tbody",{children:[Object(p.jsx)("tr",{children:Object(p.jsx)("th",{className:"align-middle",scope:"row",rowSpan:e.cantidad,children:E(e.tipo)},t)},10*t),e.productos.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:[E(e.variedad),"  "]},10*t+2),Object(p.jsxs)("td",{children:["$",e.precio,"  "]},10*t+3)]},10*t+1)}))]},t+1)}))}function q(e){var t,c=[];return e.forEach((function(e){var a=c.find((function(t){return t.tipo===e.familia}));a?(t++,a.cantidad=t,a.productos.push(e)):c.push({tipo:e.familia,cantidad:t=2,productos:[e]})})),c}c(47);function $(e){var t=e.listaNav,c=(e.user,e.setUser,function(e){var t=e.id,c=e.contenido,a=e.to,n=e.drop;return n?Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)(i.c,{activeClassName:"activo",className:"nav-link dropdown-toggle","aria-haspopup":"true","aria-expanded":"true",id:"navbarDropdown",role:"button","data-toggle":"dropdown",to:a,children:c},t+"nav"),Object(p.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown",children:[Object(p.jsx)(i.c,{className:"dropdown-item",to:a,children:c},"original-drop-item"),n.map((function(e,t){return Object(p.jsx)(i.c,{className:"dropdown-item",to:a+e.enlace,children:e.nombre},t+"drop-item")}))]})]},t+"li"):Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.c,{activeClassName:"activo",className:"nav-link",to:a,children:c},t+"nav")},t)});return Object(p.jsx)("nav",{id:"barra_nav",className:"col-12 p-0 justify-content-center navbar navbar-expand-md no-gutters",children:Object(p.jsx)("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:Object(p.jsx)("ul",{className:"navbar-nav ",children:t.length>0?t.map((function(e,t){return Object(p.jsx)(c,{id:t,contenido:e.nombre,to:e.enlace,drop:e.drop},t)})):Object(p.jsx)(c,{id:1,contenido:" - Bienvenidos - ",to:"/nothere2"},"cargando_enlaces")},"navBar00")},"navbar-collapse")},"NavBar")}function G(e){var t=e.click,c=e.idModalDestino,a=e.textoBoton,n=e.menu;return Object(p.jsxs)("div",{className:"btn-group",children:[Object(p.jsx)("button",{className:"btn btn-secondary btn-sm",type:"button","data-toggle":"modal","data-target":"#"+c,onClick:t,children:a}),Object(p.jsx)("button",{type:"button",className:"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown"}),Object(p.jsx)("div",{className:"dropdown-menu",children:n.map((function(e,t){return e.titulo?Object(p.jsx)(i.b,{className:"dropdown-item",to:e.to,onClick:e.click,children:e.titulo},t):Object(p.jsx)("div",{className:"dropdown-divider"},t)}))})]})}function H(e){var t=e.buttonList,c=e.active,a=e.callback;return t.map((function(e,t){return(e.in.includes(parseInt(c))||e.in.includes("*"))&&Object(p.jsx)("button",{id:e.click,style:{backgroundColor:"#c2bb5f",borderColor:"#c2bb5f"},className:"btn btn-lg btn-primary btn-block btn-signin",onClick:function(t){return a(t,e.click)},disabled:e.disabled,children:e.text},t)}))}function Y(e){var t=e.inputList,c=e.error,a=e.active;return t.map((function(e,t){return Object(p.jsxs)("div",{style:{display:e.in.includes(parseInt(a))||e.in.includes("*")?"":"none"},children:[Object(p.jsx)("div",{className:"input-group input-group-lg",children:Object(p.jsx)("input",{id:e.name,name:e.name,type:e.type,placeholder:e.place,className:"inputsLogin form-control ".concat(c.error[e.name]&&"is-invalid"),disabled:e.disabled,onFocus:function(){return c.clearError()},required:!0})}),Object(p.jsx)("br",{})]},t)}))}function J(e){var t=e.tabs,c=e.tabcontrol;return Object(p.jsx)("ul",{className:"nav nav-tabs",children:t.map((function(e,t){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{className:"nav-link "+(c[0]===t&&"active"),to:"#",onClick:function(){return c[1](t)},children:e.name})},t)}))})}function K(e){var t=e.classNameCont,c="FireLogin",n="Inicia_Sesion",s=f(),r=Object(b.a)(s,2),o=r[0],l=r[1],d={mail:"",pass:"",name:"",action:null},j=Object(a.useState)(d),u=Object(b.a)(j,2),m=u[0],h=u[1],O=Object(a.useState)(o?o.displayName:"Iniciar sesion"),x=Object(b.a)(O,2),g=x[0],v=x[1],N=Object(a.useState)(0),y=Object(b.a)(N,2),C=y[0],w=y[1],E=Object(a.useState)(!1),_=Object(b.a)(E,2),P=_[0],S=_[1];Object(a.useEffect)((function(){l.active()}),[]),Object(a.useEffect)((function(){S(!1)}),[o,l.error,g]),Object(a.useEffect)((function(){o&&document.getElementById("botonCls").click(),setTimeout((function(){v(o?o.displayName:"Iniciar sesion")}),500)}),[o]),Object(a.useEffect)((function(){m.action&&(l[m.action](m.mail,m.pass,m.name),S(!0),h(d))}),[m,l]);var I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=document.getElementById(c);e&&a.reset()&&h(d);var n=a.getElementsByTagName("input");return{mail:n.mail.value,pass:n.pass.value,name:n.name.value,action:t}},z=function(e,t){e.preventDefault(),h(I(!1,t))};return Object(p.jsxs)("div",{className:t,children:[Object(p.jsx)(G,{idModalDestino:n,click:function(){I(!0),w(0),l.clearError()},textoBoton:g,menu:[{titulo:"Mis Pedidos",to:"/mispedidos"},{Linea:"divisora"},{titulo:"Cerrar sesion",to:"/home",click:l.logout},{titulo:"Informar",to:"/home",click:l.active}]}),Object(p.jsxs)(F,{titulo:"Inicio de Sesion",id:n,error:l.error,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{tabcontrol:[C,w],tabs:[{name:"Iniciar Sesion"},{name:"Crear cuenta"}]}),Object(p.jsxs)("form",{id:c,name:"fireLogin",children:[Object(p.jsx)(Y,{active:C,error:l,form:m,seter:h,inputList:[{in:["*"],name:"mail",type:"email",place:"Ingrese su correo",disabled:o},{in:["*"],name:"pass",type:"password",place:"Ingrese una Contrase\xf1a",disabled:o},{in:[1],name:"name",type:"name",place:"Ingrese su Nombre",disabled:o}]}),Object(p.jsx)(H,{active:C,callback:z,buttonList:[{in:[0],text:"Ingresar",click:"login",disabled:o},{in:[1],text:"Crear cuenta",click:"create",disabled:o},{in:["*"],text:"Cerrar Sesion",click:"logout",disabled:!o}]})]})]}),l.error.error?Object(p.jsx)("h6",{children:l.error.full.message}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)("div",{className:"opcioncontra",children:Object(p.jsx)(i.b,{to:"",onClick:function(e){return z(e,"recuperarCuenta")},children:"  Olvidaste tu contrase\xf1a? "})}),P&&Object(p.jsx)(k,{size:"6"})]})]})}function W(e){var t=e.titulo,c=e.logo,n=e.enlaces,s=Object(a.useState)([]),r=Object(b.a)(s,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){O.getCollection(l,n,{sort:{key:"orden",order:"asc"}})}),[n]),Object(a.useEffect)((function(){}),[o]),Object(p.jsxs)("header",{className:"row pt-2 justify-content-center align-items-center no-gutters",children:[Object(p.jsx)(K,{classNameCont:"col-2 align-self-start mt-4"}),Object(p.jsx)("div",{className:"col-8 border-bottom pb-1 header-logo",children:Object(p.jsxs)(i.b,{to:o.length>0?o[0].enlace:"",children:[Object(p.jsx)("img",{className:"img-fluid figure-img",src:c,alt:t}),Object(p.jsx)("p",{children:t})]})}),Object(p.jsx)("div",{className:"col-2 justify-content-start",children:Object(p.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-white",children:Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})})})}),Object(p.jsx)($,{listaNav:o})]})}function Z(e){var t=Object(a.useState)([]),c=Object(b.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){O.getCollection(s,e.enlaces,{sort:{key:"orden",order:"asc"}})}),[e.enlaces]),Object(p.jsx)("div",{className:"row porta_footer justify-content-center mb-0 pb-0",children:Object(p.jsxs)("footer",{className:"row justify-content-center align-items-top pt-5 pb-0",children:[Object(p.jsx)("div",{className:"footer-logo col-12 col-md-4",children:Object(p.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("img",{className:"img-fluid figure-img",src:e.logo,alt:e.titulo}),Object(p.jsx)("p",{children:e.titulo})]})})}),Object(p.jsx)("div",{className:"col-12 col-md-8 p-0",children:Object(p.jsxs)("div",{className:"row justify-content-center align-items-top mx-4",children:[Object(p.jsx)("div",{className:"col-12 col-md-5 col-lg-3",children:Object(p.jsx)("ul",{className:"list-group-vertical justify-content-lef","aria-label":"Enlaces",children:n.map((function(e,t){return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.c,{activeClassName:"activo",to:e.enlace,children:e.nombre},t+"nav")},t+"li")}))})}),Object(p.jsx)("div",{className:"col-12 col-md-7 col-lg-5",children:Object(p.jsxs)("ul",{className:"list-group-vertical justify-content-left","aria-label":"Contacto",children:[Object(p.jsxs)("li",{className:"nav-item",children:["Telefono:",Object(p.jsx)("a",{href:"tel:+549"+e.telefono.replace(/\s|-/g,""),children:e.telefono})]}),Object(p.jsxs)("li",{className:"nav-item",children:["Correo: ",Object(p.jsx)("a",{href:"mailto:pedidos@correo.com?subject=Pedido",children:e.correo})]})]})}),Object(p.jsx)("div",{className:"col-12 col-lg-4",children:Object(p.jsx)("ul",{id:"redes",className:"list-group-horizontal justify-content-left","aria-label":"Redes",children:Object(p.jsxs)("div",{className:"row p-0",children:[Object(p.jsxs)("div",{className:"col-6",children:[Object(p.jsx)(X,{red:"facebook",enlace:"lacocina"}),Object(p.jsx)(X,{red:"twitter",enlace:"lacocina"})]}),Object(p.jsxs)("div",{className:"col-6",children:[Object(p.jsx)(X,{red:"instagram",enlace:"lacocina"}),Object(p.jsx)(X,{red:"linkdin",enlace:"lacocina"})]})]})})})]})})]})})}function X(e){var t=e.red,c=e.enlace;return Object(p.jsx)("li",{className:"nav-item pading_redes",children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www"+t+".com/"+c,children:Object(p.jsx)("img",{alt:t,src:"/CursoReact/images/icon/redes/white/"+t+".png"})})})}function Q(){return Object(p.jsx)(g,{children:Object(p.jsx)(y,{children:Object(p.jsx)(i.a,{basename:"/CursoReact",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(W,{titulo:"La cocina de la Pipi",logo:"/CursoReact/images/logo-transparente.png",enlaces:"seccionesNavBar"}),Object(p.jsx)(B,{}),Object(p.jsx)("main",{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/home",children:Object(p.jsx)(C,{})}),Object(p.jsx)(o.a,{path:"/precios",children:Object(p.jsx)(A,{})}),Object(p.jsx)(o.a,{path:"/mispedidos",children:Object(p.jsx)(w,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/productos/:familia/:id",children:Object(p.jsx)(D,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/productos/:familia",children:Object(p.jsx)(z,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/productos",children:Object(p.jsx)(z,{})}),Object(p.jsx)(o.a,{path:"/pedidos/:id",children:Object(p.jsx)(R,{})}),Object(p.jsx)(o.a,{path:"/pedidos",children:Object(p.jsx)(R,{})}),Object(p.jsx)(o.a,{path:"/",children:Object(p.jsx)(ee,{})})]})}),Object(p.jsx)(Z,{titulo:"La cocina de la Pipi",logo:"/CursoReact/images/logo-transparente.png",enlaces:"seccionesNavBar",telefono:"11 15 41234-1234",correo:"pedidos@correo.com"})]})})})})}function ee(){return Object(o.f)().push("/home"),Object(p.jsx)(p.Fragment,{})}r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b064405b.chunk.js.map