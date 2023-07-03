import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         data: "Loading"
      }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                data: 'Loaded',
            })
        }, 3000)
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM