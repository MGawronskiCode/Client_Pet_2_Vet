export default function GetData (URL) {
    return fetch(URL)
        .then(response => response.json());
}
