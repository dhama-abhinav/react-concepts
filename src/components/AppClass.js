import React, { Component } from 'react'

export default class AppClass extends Component {

    constructor(props){
        super(props)
        this.state= {
            count : 0
        }
    }

    //  handleAdd = ()=> {
    //     this.setState({
    //         count: this.state.count +1
    //     })
    // }
    //  handleSub = ()=> {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }
    //  handleReset = ()=> {
    //     this.setState({
    //         count: 0
    //     })
    // }
     handleAdd = ()=> {
        this.setState({
            count: this.state.count +1
        })
    }
     handleSub = ()=> {
        this.setState({
            count: this.state.count - 1
        })
    }
     handleReset = ()=> {
        this.setState({
            count: 0
        })
    }

  render() {
    return (
        <div>
        <h1>Use state hook goes here... </h1>
        <p>
            Click bellow and count is : {this.state.count}
        </p>
        <button onClick={this.handleAdd}>
            ADD +  
        </button>
        <button onClick={this.handleSub}>
            SUB - 
        </button>
        <button onClick={this.handleReset}>
            RESET
        </button>
    </div>
    )
  }
}
