import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }


  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } 
  }



  render() {


    const { todo, completeTodo, deleteTodo } = this.props

    let element

      element = (

        <div className="view">

                <Table>
                  <TableRow>
                      <TableCell width ="50%"> 
                          <label>
                              {todo.text}
  
                          </label>                      
                      </TableCell>
                      <TableCell width ="10%" align ="center">


                        <Button variant="contained" 
                          value ="Complete"
                          checked={todo.completed}
                          color="primary"   
                          onClick={() => completeTodo(todo.id)}>Complete</Button>
                      </TableCell>
                      <TableCell width ="5%" align ="center">
                          <Button type="button" className="destroy" variant="contained"  align ="center" color="secondary" 
                          onClick={() => deleteTodo(todo.id)} />          
                      </TableCell>

                  </TableRow>
                </Table>


        </div>


      )


    return (
      <li className={classnames({
        completed: todo.completed
      })}>
        {element}
      </li>
    )
  }
}
