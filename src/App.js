import React from 'react'
import TodoData from './TodoData'
import TodoItem from './TodoItem'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data:TodoData,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodoData = prevState.data.map(todo => {
        if(todo.id === id){
          todo.status = !todo.status
        }
        return todo
      })
      return {
        data: updatedTodoData
      }
    })
    
  }

  render(){
  const TodoComponent = this.state.data.map(todos => <TodoItem item = {todos} handleChange={this.handleChange}/>)
  
    return (
      <div className='todo'>
        {TodoComponent}
      </div>
    )
  }
}

export default App
