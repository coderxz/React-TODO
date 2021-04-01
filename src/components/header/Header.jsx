import React,{Component} from 'react';
import './css/header.css'
export default class Header extends Component{
  add = (e) => {
    const value = this.input.value
    if (e.keyCode !== 13) return
    if (value.trim()){
      const todo = {id:Date.now(),title:value,status:false}
      this.props.addTodo(todo)
    }else{
      alert('请正确输入!')
    }
    this.input.value = ''
  }
  render() {
    return(
        <div className="todo-header">
          <input
            ref={input => this.input = input}
            type='text'
            placeholder='请输入你的任务名称，按回车键确认'
            onKeyUp={this.add}
          />
        </div>
    )
  }
}