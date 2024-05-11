$('.card').on('click',(e)=>{

     if(e.target.name !== undefined){          
         
          $('#imagenProducto').attr("src",`/assets/${e.target.name}.png`);
          $('#imagenProducto').attr("alt",`Imagen de ${e.target.name}`);          
          $("#exampleModal").modal("show");
     }  

});