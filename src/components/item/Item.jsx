import React, {Component} from 'react';
import './css/item.css'

export default class Item extends Component {
  componentDidMount() {

  }

  mouseMove = (flag) => {
    if (flag) {
      this.btn.style = "display:block"
      this.Cli.style = 'background-color: rgba(0,0,0,.1);'
    } else {
      this.btn.style = 'display:none'
      this.Cli.style = 'background-color: #fff;'
    }
  }
  statusChange = () => {
    this.props.upDataStatus(this.input.checked, this.props.todos)
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.index)
  }
  render() {
    const {title, status} = this.props.todos
    return (
      <li ref={li => this.Cli = li} onMouseEnter={() => {
        this.mouseMove(true)
      }} onMouseLeave={() => {
        this.mouseMove(false)
      }}>
        <label>
          <input type='checkbox' ref={input => this.input = input} onChange={this.statusChange} checked={status}/>
          <span>{title}</span>
        </label>
        <button
          className="btn btn-danger"
          ref={button => this.btn = button}
          style={{display: "none"}}
          onClick={this.deleteItem}
        >删除</button>
      </li>
    )
  }
}