import React from 'react'
import PropTypes from 'prop-types'
import { Form, Label, Input, Button, Row, Col } from 'reactstrap'

class CreateTodoForm extends React.Component {
    state = {
        text: '',
        Remarks: '',
        address: '',
        number: '',
        Seleted: '',
        Color: '',
        Rib: '',
        Contast: '',


    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({ Contast: '', Rib: '', text: '', Remarks: '', number: '', address: '', Seleted: '', Color: '' })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <Row className="form-row">
                    <Col className="col-md-3">
                        <Label>Party Name</Label>
                        <select className="form-control"
                            name='Seleted'
                            value={this.state.Seleted}
                            onChange={this.handleChange}
                        >
                            <option selected></option>
                            <option>Azm Style Wear </option>
                            <option>Renaissance apprels </option>
                            <option>T-design</option>
                            <option>Sark Knit Wear</option>

                        </select>
                    </Col>
                </Row>

                <Row className="form-row">
                    <Col className="col-md-3">
                        <Label>Enter Color</Label>
                        <Input
                            placeholder='Color'
                            name='Color'
                            value={this.state.Color}
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>

                <Row className="form-row">
                    <Col className="col-md-3">
                        <Label>Batch Number</Label>
                        <Input
                            placeholder='Batch Number'
                            name='number'
                            value={this.state.number}
                            onChange={this.handleChange}
                            className="form-control "
                        />
                    </Col>
                </Row>

                <Row className="form-row">
                    <Col className="col-md-3">
                        <Label>Body</Label>
                        <Input
                            placeholder=''
                            name='Body'
                            value={this.state.Body}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col className="col-md-3">
                        <Label>Rib</Label>
                        <Input
                            placeholder=''
                            name='Rib'
                            value={this.state.Rib}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col className="col-md-3">
                        <Label>Contast</Label>
                        <Input
                            placeholder=''
                            name='Contast'
                            value={this.state.Contast}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col className="col-md-3">
                        <Label>Remarks</Label>
                        <Input
                            placeholder=''
                            name='Remarks'
                            value={this.state.Remarks}
                            onChange={this.handleChange}
                        />
                    </Col>
                </Row>


                <Button type='submit' color='success' className='btn-lg btn-block ssss'>Submit Entry</Button>
            </Form>
        )
    }




}


CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateTodoForm