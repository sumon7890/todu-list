import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'reactstrap'

const BlukController = ({ clearSelected, clearCompleted, reset }) => (
    <ButtonGroup>
        <Button color='warning' onClick={clearSelected}>  Selected Delete</Button>
        <Button color='danger' onClick={clearCompleted}> Delete</Button>
        <Button color='dark' onClick={reset}> Reset</Button>
    </ButtonGroup>
);

BlukController.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}
export default BlukController