function imagenAleatoria(){
  
        let imagenes = [
          './images/1.jpeg',
          './images/2.jpeg',
          './images/3.jpeg',
          './images/4.jpeg',
          './images/5.jpeg',
          './images/6.jpeg',
          './images/7.jpeg',
          './images/8.jpeg',
          './images/9.jpeg',
          './images/10.jpeg',
          './images/11.jpeg',
          './images/12.jpeg',
          './images/13.jpeg',
          './images/14.jpeg',
          './images/15.jpeg',
          './images/16.jpeg',
          './images/17.jpeg',
          './images/18.jpeg',
          './images/19.jpeg',
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
