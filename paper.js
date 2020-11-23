class Paper{
    constructor(x ,y ,radius ){

    
    var options = {
        restitustion:0.3,
        density:1.2,
        friction:0.5
    }
    this.paper = Bodies.circle(x,y,radius,options)
    World.add(world,this.paper)
    this.paper_image = loadImage("paper.png")
    this.width = radius
}
    greenbin(){
        imageMode(CENTER)
 image(this.paper_image,this.paper.position.x,this.paper.position.y,this.width,this.width) 


}
}