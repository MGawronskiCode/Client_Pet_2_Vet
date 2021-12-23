export default function DeleteData (URL) {

    let options = {
        method: 'DELETE',
    }

    return fetch(URL, options)
        .then(response => response.json());
}