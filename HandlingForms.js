class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  // Save input box value to state when it has been changed
  inputChanged = event => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = event => {
    alert(`You typed: ${this.state.text}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.inputChanged}
          value={this.state.text}
        />
        <input type="submit" value="Press me" />
      </form>
    );
  }
}
/*
Typically, we have more than one input field in the form. One way to handle
multiple input fields is to add as many change handlers as we have input fields.
But this creates a lot of boilerplate code, which we want to avoid. Therefore, we
add the name attributes to our input fields and we can utilize that in the change
handler to identify which input field triggers the change handler. The name
attribute value of the input field must be the same as the name of the state where
we want to save the value.
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "" };
  }
  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First name </label>
        <input
          type="text"
          name="firstName"
          onChange={this.inputChanged}
          value={this.state.firstName}
        />
        <br />
        <label>Last name </label>
        <input
          type="text"
          name="lastName"
          onChange={this.inputChanged}
          value={this.state.lastName}
        />
        <br />
        <label>Email </label>
        <input
          type="email"
          name="email"
          onChange={this.inputChanged}
          value={this.state.email}
        />
        <br />
        <input type="submit" value="Press me" />
      </form>
    );
  }
}
