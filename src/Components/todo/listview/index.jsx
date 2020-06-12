import React from 'react'
import PropTypes from 'prop-types'

import { ListGroupItem, CustomInput, Button, ListGroup } from 'reactstrap'
// List item component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className='d-flex algin-items-center'>
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className='mx-3'>
                <h4 className='text-success'>{todo.text}</h4>
                {/* <p>{todo.time.toDateString()}</p> */}
                <p className='text-dark'>{todo.occupation}</p>
                <p className='text-secondary'>{todo.address}</p>
                <p className='text-muted'>{todo.number}</p>
            </div>

            <Button className='ml-auto' color={todo.isComplete ? 'danger' : 'success'} onClick={() => toggleComplete(todo.id)} >
                {todo.isComplete ? 'Comleted' : ' Running'}
            </Button>
        </ListGroupItem>
    );
};

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,

}

const listView = ({ todo, toggleSelect, toggleComplete }) => (

    <ListGroup>
        {todo.map(todo => (
            <ListItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}

            />
        ))}

    </ListGroup>

)


listView.propTypes = {
    todo: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}
export default listView