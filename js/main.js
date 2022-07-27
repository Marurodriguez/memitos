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
