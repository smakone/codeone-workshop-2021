import './App.css';
import React, { Component } from 'react';
import Item from './components/item';
import ClearAllButton from './components/button';
import AddBar from './components/addBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      newItem:"",
      list:[]
    };
  }

  updateInput(key, value){
    this.setState({ [key]: value });
  }

  addItemKeyPres(evt){
    if (evt.key === "Enter") {
      this.addItem()
    }
  }

  addItem(){
    // create unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }

    //copy current list of items
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  deleteAll(){
    this.setState({
      list:[]
    })
  }

  render() {
    return(
      <div className="bg-blue-300 min-h-screen">
        <div className="container max-w-xl mx-auto pb-20">
          <h1 className="pt-10 text-5xl font-semibold justify-center text-center">To Do List</h1>
          {/* Add Things To Do */}
          <div className="p-8">
            <AddBar 
              value={this.state.newItem}
              change={e => this.updateInput("newItem", e.target.value)}
              press={evt => this.addItemKeyPres(evt)}
              click={evt => this.addItemKeyPres(evt)}
            />
          </div>

          {/* Item */}
          <div className="w-full bg-white rounded-xl shadow-2xl">
            {this.state.list.map(todoData => {
              return (
                <Item 
                  key={todoData.id}
                  item={todoData.value}
                  click={() => this.deleteItem(todoData.id)}
                />
              )
            })}

            <div className="py-5">
              <ClearAllButton click={() => this.deleteAll()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
