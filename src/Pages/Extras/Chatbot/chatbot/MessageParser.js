class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }


  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    

    var flag=0;

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.cc();
    }
    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.hi();
      
    }
    else if(message){
      if(flag===0){
        this.actionProvider.greet(message);
        flag=1;
      }
      
    }
  }
}

export default MessageParser;
