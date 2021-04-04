import React, {Component} from 'react';
import './css/footer.css'

export default class Footer extends Component {
  componentDidMount() {
    console.log(this.props.todos.length === this.computeEnd())
  }

  computeEnd = () => {
    return this.props.todos.filter(item => {
      return item.status === true
    }).length

  }
  deleteAllEnd = () => {
    this.props.deleteAllEnd()
  }
  changeCheck = (e) => {
    this.props.updateAllStatus(e.target.checked)
  }

  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" className="inputCC" onChange={this.changeCheck}
                 checked={this.props.todos.length && this.props.todos.length === this.computeEnd()}/>
        </label>
        <span>
          <span>已完成{this.computeEnd()}</span> / 全部{this.props.todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAllEnd}>清除已完成任务</button>
      </div>
    )
  }
}