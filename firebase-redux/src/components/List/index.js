import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from 'store/actions'
import ListItem from 'components/Item'

import { StyledInput, Symbol, Container } from './styles'

class List extends Component {
  state = {
    showForm: false,
    formValue: ''
  }

  inputChange = event => {
    this.setState({ formValue: event.target.value })
  }

  formSubmit = event => {
    const { formValue } = this.state
    const { addToDo } = this.props
    event.preventDefault()
    addToDo({ title: formValue })
    this.setState({ formValue: '' })
  }

  renderForm = () => {
    const { showForm, formValue } = this.state
    if (showForm) {
      return (
        <form onSubmit={this.formSubmit}>
          <StyledInput
            value={formValue}
            onChange={this.inputChange}
            type='text'
          />
          <label>What Next?</label>
        </form>
      )
    }
  }
  renderToDo() {
    const { data } = this.props
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />
    })
    if (!_.isEmpty(toDos)) {
      return toDos
    }
    return <h4>You have no more things ToDo!</h4>
  }
  componentWillMount() {
    this.props.fetchToDos()
  }
  render() {
    const { showForm } = this.state
    return (
      <>
        {this.renderForm()}
        <Container>{this.renderToDo()}</Container>
        <button onClick={() => this.setState({ showForm: !showForm })}>
          {showForm ? (
            <Symbol>Remover Todo</Symbol>
          ) : (
            <Symbol>Adicionar ToDo</Symbol>
          )}
        </button>
      </>
    )
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  }
}

export default connect(
  mapStateToProps,
  actions
)(List)
