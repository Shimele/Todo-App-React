import React from 'react'
import './App.css'

class TodoItem extends React.Component {
    render(){
        let styles = {
            textDecoration: 'line-through',
            color: '#cdcdcd',
            fontStyle:'italic',
        }
        
        return (
            <div className='todoItem'>
                <input type='checkbox' checked={this.props.item.status} onChange={() => this.props.handleChange(this.props.item.id)}></input>
                <label style={this.props.item.status? styles: null} > {this.props.item.task} </label>
                <hr></hr>
            </div>
        )
    }
}

export default TodoItem
