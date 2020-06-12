import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'
import SurchPanel from './surch-panel'
import FilterController from './filter-controllars'
import ViewColtrollar from './view-controlar'
import BlukControllar from './bulk-controller'



const Controller = ({ trem,
    handleSearch,
    toggleForm,
    changeView,
    handleFilter,
    view,
    clearSelected,
    clearCompleted,
    reset,

}) => (


        <div>

            <SurchPanel
                trem={trem}
                handleSearch={handleSearch}
                toggleForm={toggleForm}


            />
            <Row className='my-4' >
                <Col md={{ size: 4 }} >
                    <FilterController handleFilter={handleFilter} />

                </Col>
                <Col md={{ size: 4 }} >
                    <ViewColtrollar view={view} changeView={changeView} />
                </Col>
                <Col md={{ size: 4 }} className='d-flex' >
                    <div className='ml-auto'>
                        <BlukControllar
                            clearSelected={clearSelected}
                            clearCompleted={clearCompleted}
                            reset={reset}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );

Controller.propTypes = {
    trem: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller;