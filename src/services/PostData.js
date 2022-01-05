import { pets } from "../mocks/db";

export default function PostData (URL, data) {

    let options = {
        method: 'POST',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }

    return fetch(URL, options)
        .then(response => response.json());
}