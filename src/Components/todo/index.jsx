import React from 'react'
import Shortid from 'shortid'
import { } from 'reactstrap'

import Listview from '../todo/listview'
import Tableview from '../todo/tableview'
import CreateTodoFrom from '../todo/Create-todo-from'
import Controller from '../todo/controllar'

class Todos extends React.Component {

    state = {
        todos: [

            {
                id: '1',
                Seleted: '',
                Color: '',
                number: '',
                Body: '',
                Rib: '',
                Contast: '',
                Remarks: '',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },


        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'table',
        filter: 'all'

    }
    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect

        this.setState({ todos })
    }

    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isComplete = !todo.isComplete

        this.setState({ todos })
    }
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleSearch = value => {
        this.setState({ searchTerm: value })
    }

    createTodo = todo => {
        todo.id = Shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos });
        this.toggleForm();
    };


    handleFilter = filter => {
        this.setState({ filter })
    }
    changeView = event => {
        this.setState({
            view: event.target.value
        });
    }



    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({ todos })
    };

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({ todos })
    };
    toggleDelete = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({ todos })
    };

    reset = () => {
        this.setState({
            filter: 'all',
            searchTerm: '',
            view: 'list',
            isOpenTodoForm: false
        })
    };




    perfromSearch = () => {
        return this.state.todos.filter(todo => todo.Seleted.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    perfromFilter = todos => {
        const { filter } = this.state
        if (filter === 'completed') {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }



    getView = () => {
        let todos = this.perfromSearch();
        todos = this.perfromFilter(todos);

        return this.state.view === 'list' ? (
            <Listview
                todo={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
                <Tableview todos={todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                />
            );
    }





    render() {
        return (
            <div>

                <h1 className="display-4 text-center mb-3" > Grey Issue</h1>


                <Controller
                    trem={this.state.searchTerm}
                    view={this.state.view}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    changeView={this.changeView}
                    clearSelected={this.clearSelected}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <CreateTodoFrom createTodo={this.createTodo} />


                <div>
                    {this.getView()}

                </div>





            </div>

        )
    }
}

export default Todos

