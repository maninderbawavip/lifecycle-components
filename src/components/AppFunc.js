import { useEffect, useState } from "react"
import { Loading } from "./Loading"

export const App = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchUserData = () => {

        // wrtie the logic to get data from backend
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
                setLoading(false)
            })

    }

    useEffect(() => {
        fetchUserData()
    }, [])

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