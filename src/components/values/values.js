
export function EnlacesNav(){
  return ([
           ['Home','/home'],
           ['Precios','/precios'],
           ['Productos','/productos'],
           ['Recetas','/recetas'],
           ['Pedidos','/pedidos'],
  ])  
}

export function ListaProductos(){
return ([{
    "codigo":"M001",
    "familia":"milanesas",
    "variedad":"peceto",
    "nombre":"milanesa de peceto",
    "precio":630,
    "texto" : "Milanesas de Peceto de ternera, preparadas con rebozador de primera calidad, con un toque de avena y condimentos",
    "img" : "/images/productos/mila_peceto_cruda.png",
    "mostrar" : true,
    "stock":100
  },{
    "codigo":"M002",
    "familia":"milanesas",
    "variedad":"nalga",
    "nombre":"milanesa de nalga",
    "precio":590,
    "texto" : "Milanesas de Nalga de ternera, preparadas con rebozador de primera calidad, con un toque de avena y condimentos",
    "img" : "/images/productos/mila_peceto_cruda.png",
    "mostrar" : true,
    "stock":18
  },{
    "codigo":"M003",
    "familia":"milanesas",
    "variedad":"pollo",
    "nombre":"milanesa de pollo",
    "precio":380,
    "texto" : "Pechugas frescas de pollo, condimentos de calidad, con el mismo toque de avena que hacen nuestras milanesas tan ricas",
    "img" : "/images/productos/mila_pollo_cruda.png",
    "mostrar" : true,
    "stock":23
  },{
    "codigo":"M004",
    "familia":"milanesas",
    "variedad":"berenjena",
    "nombre":"milanesa de berenjena",
    "precio":270,
    "texto" : "Una opción de milanesas basadas en vegetales, por lo que podríamos decir que son vegetarianas y saludables",
    "img" : "/images/productos/mila_berenjena_cruda.png",
    "mostrar" : true,
    "stock":4
  },{
    "codigo":"M005",
    "familia":"milanesas",
    "variedad":"calabaza",
    "nombre":"milanesa de calabaza",
    "precio":250,
    "texto" : "Animate a probarlas, son una delicia, nos las pidió una vez una clienta y las empezamos a hacer a pedido.",
    "img" : "/images/productos/mila_calabaza_cocida.png",
    "mostrar" : true,
    "stock":2
  },{
    "codigo":"M006",
    "familia":"milanesas",
    "variedad":"zucchini",
    "nombre":"milanesa de zucchini",
    "precio":280,
    "texto" : "Animate a probarlas, son una delicia, nos las pidió una vez una clienta y las empezamos a hacer a pedido.",
    "img" : "/images/productos/mila_zucchini_cruda.png",
    "mostrar" : true,
    "stock":0
  },{
    "codigo":"H001",
    "familia":"Hamburguesas",
    "variedad":"Carne",
    "nombre":"Hamburguesa de Carne",
    "precio":320,
    "texto" : "Qué se puede decir? Clásicas hamburguesas de carne condimentadas como en casa",
    "img" : "/images/productos/ham_carne_cruda.png",
    "mostrar" : true,
    "stock":10
  },{
    "codigo":"H002",
    "familia":"Hamburguesas",
    "variedad":"pollo",
    "nombre":"Hamburguesa de pollo",
    "precio":370,
    "texto" : "Me quedé completamente sin palabras, pero te puedo decir que estan bárbaras",
    "img" : "/images/productos/ham_pollo_cocida.png",
    "mostrar" : true,
    "stock":10
  },{
    "codigo":"H003",
    "familia":"Hamburguesas",
    "variedad":"Cerdo",
    "nombre":"Hamburguesa de Cerdo",
    "precio":370,
    "texto" : "Me quedé completamente sin palabras, pero te puedo decir que estan bárbaras",
    "img" : "/images/productos/ham_cerdo_cruda.png",
    "mostrar" : true,
    "stock":10
  },{
    "codigo":"H004",
    "familia":"Hamburguesas",
    "variedad":"brocoli y arvejas",
    "nombre":"Hamburguesa de Brocoli",
    "precio":150,
    "texto" : "Me quedé completamente sin palabras, pero te puedo decir que estan bárbaras",
    "img" : "/images/productos/ham_brocoli_cocida.png",
    "mostrar" : true,
    "stock":10
  },{
    "codigo":"H005",
    "familia":"Hamburguesas",
    "variedad":"remolacha",
    "nombre":"Hamburguesa de remolacha",
    "precio":150,
    "texto" : "Me quedé completamente sin palabras, pero te puedo decir que estan bárbaras",
    "img" : "/images/productos/ham_remolacha_cruda.png",
    "mostrar" : true,
    "stock":10
  }]
  )
}







/*

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
*/