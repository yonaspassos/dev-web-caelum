var banners = ['img/destaque-home.jpg', 'img/destaque-home-2.jpg'];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];

}

var intervalo = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function() {
    if (controle.className == 'pause') {
        clearInterval(intervalo);
        controle.className = 'play';
    } else {
        intervalo = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
        
    }
    return false;
}

