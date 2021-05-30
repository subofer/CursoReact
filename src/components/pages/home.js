import React from 'react'


export default function Home(){

const imagenes_carrousel = [
                        {src:"images/productos/berenjenas.png"           ,alt:"Berenjenas"},
                        {src:"images/productos/brocoli.png"              ,alt:"Brocoli"},
                        {src:"images/productos/garbanzos.png"            ,alt:"Garbanzos"},
                        {src:"images/productos/ham_carne_cocida.png"     ,alt:"Ham Carne"},
                        {src:"images/productos/ham_carne_cruda.png"      ,alt:"Ham Carne"},
                        {src:"images/productos/ham_cerdo_cruda.png"      ,alt:"Ham Cerdo"},
                        {src:"images/productos/ham_remolacha_cruda.png"  ,alt:"Ham Remolacha"},
                        {src:"images/productos/mila_berenjena_cruda.png" ,alt:"Mila Berenjena"},
                        {src:"images/productos/mila_calabaza_cocida.png" ,alt:"Mila Calabaza"},
                        {src:"images/productos/mila_peceto_cruda.png"    ,alt:"Mila Peceto"},
                        {src:"images/productos/mila_pollo_cruda.png"     ,alt:"Mila Pollo"},
                        {src:"images/productos/nalga.png"                ,alt:"Nalga"},
                        {src:"images/productos/peceto.png"               ,alt:"Peceto"},
                        {src:"images/productos/remolacha.png"            ,alt:"Remolacha"},
                        {src:"images/productos/zapallo.png"              ,alt:"Zapallo"},
                        {src:"images/productos/zucchini.png"             ,alt:"Zucchini"}
                    ]


return(
<>
<div className="row py-3 justify-content-center">    
    <div className="col-8 pb-4 align-self-center">
        <h1>No es solo hacer comida.</h1> 
    </div>
    
    <div className="col-10 col-md-9 col-lg-8 align-self-center">
        <p>En este momento tan especial de aislamiento social obligatorio, solo se necesitan unos minutos de paseo en las distintas redes sociales -nuestro &uacute;nico encuentro posible con otros adem&aacute;s de la aventura de ir al s&uacute;per- para darnos cuenta de un fen&oacute;meno clar&iacute;simo: cocinar se convirti&oacute; en una de las actividades estrella de la cuarentena.</p>    
        
        <p>Tiene todas las de ganar: es una actividad placentera que muchas veces no podemos hacer por falta de tiempo pero que ahora es un oasis para la cabeza de cada cocinero -aficionado, profesional o novato- en el medio de la incertidumbre y la ansiedad que trajo la pandemia del coronavirus.</p>

        <p>“De esta cuarentena salimos todos cocineros”. “Ya hice masa madre, me falta hacer gimnasia por Instagram y ya me recibo de cuarentena”. Los chistes en Twitter, las im&aacute;genes de pan y otras recetas caseras reci&eacute;n hechas en los perfiles de amigos y familiares en Instagram y Facebook, ¡a nosotros se nos dio por hacer milanesas!.</p>
    </div>
</div>



<div className="row justify-content-center">
    <div className="col-7">
        <div id="calesita" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                
                {imagenes_carrousel.map((imagen,index)=>
                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>  
                        <img key={index+1} className="d-block w-100 mx-auto" style={{margin: "auto"}} src={"./"+imagen.src} alt={imagen.alt}/>                            
                    </div>
                )}

            </div>
            
            <a className="carousel-control-prev" href="#calesita" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
             </a>
            <a className="carousel-control-next" href="#calesita" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            
        </div>
    </div>
</div>      
    <div className="row justify-content-center">
        <div className="col-8 align-self-center">
            <p className="pt-2">Nuestro objetivo es simple, compartir el amor que le ponemos a la comida, para que todos puedan comer rico y sano =)</p>
        </div> 
    </div> 



</>
)
}

