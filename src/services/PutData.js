export default function PutData (URL, data) {

    let options = {
        method: 'PUT',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }

    fetch(URL, options)
        .then(response => response.json())

}