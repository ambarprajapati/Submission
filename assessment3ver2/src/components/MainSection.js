import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

import { SHOW_ALL } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
}

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }


  componentDidMount() {
      this.props.actions.getTodos()

  }
  componentDidUpdate() {
     this.props.actions.getTodos()
  }

  handleClearCompleted = (ids) => {

  }

  handleShow = filter => {
    this.setState({ filter })
  }

  


  render() {
    const { todos, actions } = this.props
    const { filter } = this.state
    
    const filteredTodos = todos.filter(TODO_FILTERS[filter])


    return (
      <section className="main">

        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>

      </section>
    )
  }
}
