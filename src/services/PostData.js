import { pets } from "./db";

export default function PostData (URL, data) {

    // let options = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type':
    //             'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(data)
    // }

    // fetch(URL, options)
    //     .then(response => response.json())
    return new Promise((resolve, reject) => {
        pets.push(data);
        resolve();
    })
}