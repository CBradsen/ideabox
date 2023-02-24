class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  
  updateIdea() {
    if (this.star === false) {
      this.star = true;
    } else {
      this.star = false
    }
    //this will update the idea's starred state
    //if it is outlined when the user clicks on it, 
   // it becomes a filled star (favorite). 
   // if it is filled it becomes outlined star (unfavoriting).
  }
}