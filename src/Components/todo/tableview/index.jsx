import React from 'react'
import PropTypes from 'prop-types'
import { CustomInput, Button, Table } from 'reactstrap'

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
    <tr>
        <th scope='row'>
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}

            />
        </th>
        <th>
            {todo.time.toDateString()}
        </th>
        <th className='text-dark'>{todo.Seleted}</th>
        <th className='text-muted'>{todo.number}</th>
        <th className='text-dark'>{todo.Color}</th>
        <th className='text-dark'>{todo.Body}</th>
        <th className='text-dark'>{todo.Rib}</th>
        <th className='text-dark'>{todo.Contast}</th>
        <th className='text-dark'>{todo.Remarks}</th>




        <th>
            <Button
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Delete' : 'Running'}
            </Button>

        </th>
        <th>


        </th>
    </tr>
);
RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,

};

const TableView = ({ todos, toggleComplete, toggleSelect, Color, BatchNumber, Body, Rib, Contast, Remarks, togglenumber, Seleted }) => (

    <Table className="container-fluid">
        <thead>
            <tr>
                <th>Select</th>
                <th>Date</th>
                <th>Party Name</th>
                <th>Color</th>
                <th>Batch Number</th>
                <th>Body</th>
                <th>Rib</th>
                <th>Contast</th>
                <th>Remarks</th>

                <th>Action</th>

            </tr>
        </thead>

        <tbody>
            {todos.map(todo => (
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    Seleted={Seleted}
                    togglenumber={togglenumber}
                    toggleComplete={toggleComplete}
                    Color={Color}
                    BatchNumber={BatchNumber}
                    Body={Body}
                    Rib={Rib}
                    Contast={Contast}
                    Remarks={Remarks}



                />
            ))}
        </tbody>
    </Table>

)

TableView.prototype = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    PartyName: PropTypes.func.isRequired,
    Color: PropTypes.func.isRequired,
    BatchNumber: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired,
    Rib: PropTypes.func.isRequired,
    Contast: PropTypes.func.isRequired,
    Remarks: PropTypes.func.isRequired,
    togglenumber: PropTypes.func.isRequired,
    Seleted: PropTypes.func.isRequired,



};

export default TableView