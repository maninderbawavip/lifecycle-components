import { Component } from "react";

export class Loading extends Component{

    constructor(props) {
        super(props)
        console.log('constructor Loading')
    }

    componentDidUpdate() {
        console.log('component did update loading ')
    }

    render() {
        console.log('render loading')
        return (
            <div>Loading...</div>
        )
    }

    componentDidMount(){
        console.log('Loading mounted')
    }

    componentWillUnmount() {
        console.log('Loading going away....')
    }
}