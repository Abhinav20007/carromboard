class Coin{
    constructor(type, x,y) {
        this.x = x
        this.y = y
        this.type = type;
        this.pos = pos;
        this.image = loadImage("blackCoins/b1.png.png");
        this.image2 = loadImage("whiteCoins/w1.png.png")

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    
}
