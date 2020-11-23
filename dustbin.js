class Dustbin{
    constructor(x,y,width,height){
        var options = {
            restitustion:0.3,
            density:1.2,
            friction:0.5
        }
        this.bin = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.bin)
        this.w = width
        this.h = height
    }
    trashcan(){
        var zack = createSprite(this.bin.position.x,this.bin.position.y,this.w,this.h)
    }
}