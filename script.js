function virarTodasCartas(){
    var areaCarta = document.getElementById('play');
    
        for (let index = 0; index < 6; index++) {
            var cartaFrente = document.querySelectorAll('.front')[index];
            var cartaVerso = document.querySelectorAll('.back')[index];
            cartaFrente.style.transform = 'perspective(600px) rotateY(-180deg)';
            cartaVerso.style.transform = 'perspective(600px) rotateY(0deg)';   
        }
    

}
function desvirarTodasCartas(){
    for (let index = 0; index < 6; index++) {
        var cartaFrente = document.querySelectorAll('.front')[index];
        var cartaVerso = document.querySelectorAll('.back')[index];
        cartaFrente.style.transform = 'perspective(600px) rotateY(0deg)';
        cartaVerso.style.transform = 'perspective(600px) rotateY(180deg)';   
    }

}