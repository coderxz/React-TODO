import React,{Component} from 'react';
import './css/main.css'
import Item from "../item/Item";
export default class Main extends Component{
  componentDidMount() {

  }

  render() {
    return(
      <ul className="todo-main">
        {
          this.props.todos.map((item,index)=>{
            return <Item
              key={item.id}
              todos={item}
              upDataStatus={this.props.upDataStatus}
              index={index}
              deleteItem={this.props.deleteItem}
            />
          })
        }
      </ul>
    )
  }
}