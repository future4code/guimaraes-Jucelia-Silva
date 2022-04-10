import axios from "axios";
import { useEffect, useState } from "react";

const UseRequest = (url) => {
   
        const [data, setData] = useState(undefined)
        const [loading, setLoading] = useState(false)

        useEffect(() => {
            setLoading(true)
            axios
                 .get(url)
                 .then(res=> {
                     setLoading(false)
                     setData(res.data)
                 })
                 .catch(err => setLoading(false))
        }, [url])
        return [data, setData, loading]
    

}

export default UseRequest;