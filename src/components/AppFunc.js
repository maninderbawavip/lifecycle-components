import React, { useEffect, useState } from "react"
import { Loading } from "./LoadingFunc"

export const App = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [inputValue, changeValue] = useState("")
    const [filteredData, setFilteredData ] = useState([]);
    

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

    // equal to component did mount
    useEffect(() => {
        fetchUserData()
    }, [])

    // array of those varibales on change of which this hook/function should be called again
    useEffect(() => {

        //recalculate count and set it
        const newCount = data.length;
        setCount(newCount)

    }, [data])

    useEffect(() => {

        // const result = []
        // // loop over my data array and set only those items whose name include the inputvalue   
        // for (let i = 0; i<data.length; i++){
        //     if(data[i].name.toLowerCase().includes(inputValue.toLowerCase())){
        //         // keep it in result
        //         result.push(data[i])
        //     } 
        // }     

        // const result = data.filter(item => {
        //     if(item.name.toLowerCase().includes(inputValue.toLowerCase())){
        //         return true
        //     }
        //     return false
        // })

        const result = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))

        // logic to match the name of user
        // setFilteredData(' filtered results based upon inputvalue')
        setFilteredData(result)

    }, [inputValue, data])

    if(loading) {
        return(<Loading />)
    }

    // fragment allows us to send multiple children from same component without creating a extra div in DOM
    
    return(
        <> 
            <div> <input type="text" value={inputValue} onChange={(e) => {changeValue(e.target.value)
            }}/> </div>
            <div>count of users: {count}  </div>

            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {filteredData.map(
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
            </div>
        </>
    )

}