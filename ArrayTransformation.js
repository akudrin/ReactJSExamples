class App extends React.Component {
  render() {
    const data = [1, 2, 3, 4, 5];
    const rows = data.map((number, index) => (
      <li key={index}>Listitem {number}</li>
    ));
    return (
      <div>
        <ul>{rows}</ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const data = [
      { brand: "Ford", model: "Mustang" },
      { brand: "VW", model: "Beetle" },
      { brand: "Tesla", model: "Model S" }
    ];
    const tableRows = data.map((item, index) => (
      <tr key={index}>
        <td>{item.brand}</td>
        <td>{item.model}</td>
      </tr>
    ));
    return (
      <div>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }
}
