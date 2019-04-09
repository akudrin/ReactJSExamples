import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';


import './App.css';
import AddItem from './AddItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  addItem = (item) => {
    this.setState({ items: [item, ...this.state.items] });
  }
  // Use List and ListItem in render() method
  render() {
    const { classes } = this.props;
    // Use ListItem component here instead of li
    const listItems = this.state.items.map((item, index) =>
      <ListItem key={index}>
        <ListItemText primary={item.product} secondary={item.amount} />
      </ListItem>)
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
            <Link to="/links">Links</Link>{' '}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/links" render={() => <h1>Links</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
        <h2>Shopping list</h2>
        <AddItem additem={this.addItem} />



        <Grid container spacing={24}>

          <Grid item xs={12} container justify="center">
            <List>{listItems}</List>
          </Grid>
        </Grid>


      </div>





    );
  }
}

export default withStyles(styles)(App);
