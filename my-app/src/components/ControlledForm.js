import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "website",
            comments: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input 
                            type="text" 
                            id="id-name" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select id="id-category" name="category" value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea id="id-comments" name="comments" value={this.state.comments} onChange={this.handleCommentsChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm