import React, {Component} from 'react';
import './static/css/base.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default class App extends Component {
  state = {
    todos: [
      {id: 1, title: '吃饭', status: false},
      {id: 2, title: '睡觉', status: true},
      {id: 3, title: '打豆豆', status: true},
    ]
  }
  upDataStatus = (value, todo) => {
    todo.status = value
    const todos = [...this.state.todos]
    this.setState({
      todos
    })
    console.log('---')
  }
  deleteAllEnd = () => {
    const todos = [...this.state.todos]
   const result =  todos.filter(item=>{
      return item.status !== true
    })
    this.setState({
      todos:result
    })
    console.log('--')
  }
  updateAllStatus = (status) => {
    const todos = [...this.state.todos]
    todos.forEach(item =>{
      item.status = status
    })
    this.setState({
      todos
    })
  }
  deleteItem = (index) => {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }
  addTodo = (item) => {
    const todos = [...this.state.todos]
    todos.unshift(item)
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header
            todos={this.state.todos}
            addTodo={this.addTodo}
          />
          <Main
            todos={this.state.todos}
            upDataStatus={this.upDataStatus}
            deleteItem={this.deleteItem}
          />
          <Footer
            todos={this.state.todos}
            deleteAllEnd={this.deleteAllEnd}
            updateAllStatus={this.updateAllStatus}
          />
        </div>
      </div>
    )
  }
}