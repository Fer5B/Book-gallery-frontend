import React, { Component } from 'react'

export default function DataFetching(endpoint, WrappedComponent) {

  return class extends Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            this.setState({data: datos}); 
        })
        .catch(err => console.log(err.message))
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} props={this.props} />
      )
    }
  }
  
}


