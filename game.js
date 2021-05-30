class Game{
    constructor(){
        this.arr = []
    }
    arrangecoins(){
        this.arr.push(new Coin("black",250,100))
        this.arr.push(new Coin("white",250,100))

    }
}