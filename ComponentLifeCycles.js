/*
Mounting is one phase of the component life cycle and it is
the moment when the component is created and inserted into the DOM. Two life
cycle methods that we have already covered are executed when the component
mounts: constructor() and render().

componentDidMount(), is called after the component has been mounted. This method is suitable for calling some
REST APIs to get data, for example.

shouldComponentUpdate() method is called when the state or props have been
updated and before the component is rendered.
*/

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "John" };
  }
  componentDidMount() {
    this.setState({ user: "Jim" });
  }
  render() {
    return <h1>Hello World {this.state.user}</h1>;
  }
}
