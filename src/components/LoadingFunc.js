import { useEffect } from "react"


export const Loading = () => {

    useEffect(() => {

        // here is logic for component did mount
        console.log('component did mount')

        return () => {
            console.log('component will unmount')
            // this is component will unmount
        }

    }, [])

    return (
        <div>Loading...</div>
    )
}
