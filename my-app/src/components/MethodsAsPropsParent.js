import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleAccountStatus = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: prevState.isLoggedIn ? false : true
            }
        })
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild isLoggedIn={this.state.isLoggedIn} handleAccountStatus={this.handleAccountStatus} />
            </div>
        )
    }
}

export default MethodsAsPropsParent