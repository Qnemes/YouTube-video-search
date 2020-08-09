import React, { Component } from 'react'
import './searchBar.css'

export default class SearchBar extends Component {
    state = {
        input: ''
    }
    handleInputChange = event => {
        this.setState({ input: event.target.value })
    }
    handleFormSubmit = event => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.input)
    }
    render() {
        return (
            <div className='searchbar ui segment'>
                <form onSubmit={this.handleFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>YouTube video search</label>
                        <input
                            type='text'
                            value={this.state.input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}