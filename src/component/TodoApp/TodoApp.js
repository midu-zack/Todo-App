import React, { Component } from 'react';
import './TodoApp.css';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // Initialize with an empty array
      newItem: '' // New item input field value
    };
  }

  handleChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  addItem = () => {
    if (this.state.newItem.trim() !== '') {
      this.setState((prevState) => ({
        items: [...prevState.items, prevState.newItem],
        newItem: ''
      }));
    }
  };

  deleteItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, i) => i !== index)
    }));
  };
  

  render() {
    return (
      <div className='todo-container'>
        <h1>Todo App</h1>

        <div className='input-session'>
          <input
            type='text'
            value={this.state.newItem}
            onChange={this.handleChange}
          />
          <button onClick={this.addItem}>Add</button>
        </div>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
