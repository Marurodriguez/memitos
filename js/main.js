/*  
    let imagenes=[
        {  
        id:1,
        src:"https://pbs.twimg.com/media/FYjqBO8WAAEwljL?format=jpg&name=small",
        },
        { 
        id:2,
        src:"https://pbs.twimg.com/media/FYl74raXoAE4TbC?format=jpg&name=900x900",
        },  
        {
        id:3,
        src:"https://pbs.twimg.com/media/FYl74raXoAE4TbC?format=jpg&name=900x900",
        }  
    ]

    console.log(imagenes.length);

    let q = imagenes.length;
    let numAleatorio=Math.round(Math.random()*(q-1))

    console.log(numAleatorio);
    console.log(imagenes.numAleatorio);

    function imagenAleatoria (){  
        let result = document.getElementById("result").innerHTML =
        `<img src="${imagenes.numAleatorio}"></img>`
    }   


    imagenAleatoria() */

function imagenAleatoria(){
  
        let imagenes = [
          './images/1.jpeg',
          './images/2.jpeg',
          './images/3.jpeg',
          './images/4.jpeg',
          './images/5.jpeg',
          './images/6.jpeg',
          './images/7.jpeg',
        ];
        
        function obtenerImagenAleatoria() {
          return imagenes[Math.floor(Math.random() * imagenes.length)];
        }
        
        function cambiarImagen() {
          $('#imagen').attr('src', obtenerImagenAleatoria());
        }
        
        // Imagen inicial
        cambiarImagen();
}
