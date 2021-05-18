class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  hi = () => {
    const m = this.createChatBotMessage("hello friend, what is your name?");
    this.addMessageToState(m);
  }

  cc = () => {
    const m = this.createChatBotMessage("You can reach us at 9087654321 or email us frntsq@gmail.com");
    this.addMessageToState(m);
  }
  os = () => {
    const m = this.createChatBotMessage("left panel => Navigation bar => Store => Buyer");
    this.addMessageToState(m);
  }
  
  greet = (msg) => {
    console.log("msg:",msg);
    const s= "welcome ";
    const full = s.concat(msg);
    console.log("msg2:",full)
    const message = this.createChatBotMessage(full);
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
