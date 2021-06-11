$(function()
{
    $('.crear-lista-yt').click(function() //Al hacer clic en el botón "Publicar"
    {
        var idLista = $(this).parent().siblings('.bloque-canciones').attr('id'); //Captura el id de la lista
        var nombre = $(this).parent().siblings('.nombre-lista').html(); //Captura el nombre de la lista
        var descripcion = $(this).parent().siblings('.descripcion-lista').html(); //Captura la descripción de la lista
        
        var idListaYT; //Variable para almacenar posteriormente el enlace de la lista de YouTube creada

        var peticionLista = gapi.client.youtube.playlists.insert( //Se almacenan en la variable los datos (título, descripción y estado) que definen la lista a crear
        {
            part: 'snippet, status',
            resource: 
            {
                snippet: 
                {
                    title: nombre,
                    description: descripcion
                },
                status: {privacyStatus: 'public'}
            }
        });

        peticionLista.execute(function(respuesta) //Se ejecuta la petición
        {
            idListaYT = respuesta.result.id; //Se almacena el id de la lista creada

            if(idListaYT) //Si se ha creado la lista
            {
                $(`.cancion-lista-${idLista}`).each(function() //Bucle que recorre todas las canciones del recopilatorio personalizado
                {
                    var idVideoYT = $(this).children().children('.enlace-youtube').data('video'); //Id de YoutTube correspondiente a cada cancion

                    var detalles = {videoId: idVideoYT, kind: 'youtube#video'} //Se almacena el id del vídeo y que es un vídeo de YouTube

                    var peticionCancion = gapi.client.youtube.playlistItems.insert( //De manera similar a como se hace con la lista, en esta variable se almacenan los datos de cada vídeo
                    {
                        part: 'snippet',
                        resource: 
                        {
                            snippet: 
                            {
                                playlistId: idListaYT, //El id de la lista a la que se añade el vídeo
                                resourceId: detalles //Los datos de cada vídeo
                            }
                        }
                    });

                    peticionCancion.execute(function(respuesta) //Se ejecuta la petición
                    {
                        if(respuesta.result)
                        {
                            console.log(respuesta.result.snippet.title);
                        }
                        else
                        {
                            console.log('No se ha agregado el vídeo')
                        }
                    });

                    setTimeout(function(){ console.log('Han pasado 1000 ms'); }, 1000);
                });
            }
            else swal('Ups...', 'Algo ha fallado; intenta crear tu lista de YouTube más tarde...', 'error', {button: false}); //Si no, da un mensaje de error
        });
    });
});