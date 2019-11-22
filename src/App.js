import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem.js';


class App extends Component {

  state = {
    items: []
  }

  recordItem = (event) => {
    this.setState({
      potentialItem: event.target.value
    })
  }

  storeItem = () => {
    this.setState({
      items: [...this.state.items, this.state.potentialItem]
    })
    this.state.potentialItem = '';
  }

  deleteItem = (event) => {
    let indexToDelete = this.state.items.indexOf(event.target.textContent);
    let newArray = this.state.items;
    newArray.splice(indexToDelete,1);
    this.setState({
      items: newArray
    })
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <input value={this.state.potentialItem} type="text" onChange={this.recordItem}></input>
          <button onClick={this.storeItem}>Add</button>
        </div>
        <div className="record">
          <div className="record_title">My To-Do Items</div>
          {/* this loop outputs all the items */}
          {
            this.state.items.map(
              (item) => {
                return <ToDoItem text={item} deleteItem={this.deleteItem} />
              }
            )
          }
        </div>

      </div>
    );
  }
}

export default App;