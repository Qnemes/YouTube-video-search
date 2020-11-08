import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [input, setInput] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault()
        onFormSubmit(input)
    }
    return (
        <div className='searchbar ui segment'>
            <form onSubmit={handleFormSubmit} className='ui form'>
                <div className='field'>
                    <label>YouTube video search</label>
                    <input
                        type='text'
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
