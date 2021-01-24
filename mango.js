class mango extends BaseClass {
  constructor(x, y){

    super(x,y,50,70);
    this.image = loadImage("Images/mango.png");
    this.visibility=255;
  }
   display(){
if (this.body.speed<3) {
  super.display();
} else {
  push();
  //this.visibility=this.visibility-5;
  image(this.image,this.body.position.x,this.body.position.y,70,90);
  pop();
}
   }
};
