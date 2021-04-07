import { Component } from "react";
import { Loading } from "./Loading";

export class App extends Component{

    constructor(props) {
        super(props)
        console.log('constructor called App')
        this.state = {
            // value: 1,
            loading: true,
            data: []
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    getData = () => {
        // wrtie the logic to get data from backend
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ data: data, loading: false})
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        
        const { loading, data } = this.state;
        console.log('render called App', loading, data)

        if(loading) {
            return(<Loading />)
        }

        return(<div style={{ display: 'flex', flexWrap: 'wrap'}}>

            {data.map(
                (user, index) => {
                    return(
                    <div key={index} style={{ backgroundColor: '#ccc', padding: '20px', margin: '10px', width: '20%'}}>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>

                    </div>
                    
                    )
                }
            )
            }
        </div>)
    }

}