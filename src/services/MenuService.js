import {useEffect, useState} from "react";

export default function MenuService (URL) {

    const [componentData, setComponentData] = useState(null);

    useEffect(() =>{
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setComponentData(data)
            })
    }, [URL])
    return componentData;

}