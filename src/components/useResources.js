import { useState, useEffect } from 'react'
import typicode from '../apis/typicode';

const useResources = resource => {
    const [resources, setResources] = useState([]);
    useEffect(
        ()=>{
            (async () => {
                const response = await typicode.get(`/${resource}`)
                setResources(response.data);
            })(resource);
        },
        [resource]
    );
    return resources;
}

export default useResources;

