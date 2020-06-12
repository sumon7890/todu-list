import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'


const SurchPanel = ({ trem, handleSearch, toggleForm }) => (
    <div className='d-flex' >
        <Input
            placeholder=' Surch Party Name'
            className='mr-3 bg-transparent text-dark'
            value={trem}
            onChange={e => handleSearch(e.target.value)}
        />
        <Button color='success' onClick={toggleForm} className='btton'>
            New Entry
    </Button>

    </div>
)
SurchPanel.propTypes = {
    trem: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SurchPanel;