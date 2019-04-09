class App extends React.Component {
  // This is called when the button is pressed
  buttonPressed = () => {
    alert("Button pressed");
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonPressed}>Press Me</button>
      </div>
    );
  }
}

class MyForm extends React.Component {
  // This is called when the form is submitted
  handleSubmit(event) {
    alert("Form submit");
    event.preventDefault(); // Prevents default behavior
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
