function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    };
    this.moveDow = function () {
        this.top += 20;

    };
    this.moveLeft = function () {
        this.left -= 20;
    };
    this.moveUp = function () {
        this.top -= 20;
    };


}

let hero = new Hero('pikasieunhan.jpg', 0, 0, 200);
//let topLeft = true;
//let RightDown = false;
function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top <= 0) {
        hero.moveRight();
    }
    if (hero.left >= window.innerWidth - hero.size)  {
        hero.moveDow();
    }
    if (hero.top >= window.innerHeight -hero.size && hero.top > 0){
        hero.moveLeft();
    }
    if (hero.left <= 0) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 20);
}
start();