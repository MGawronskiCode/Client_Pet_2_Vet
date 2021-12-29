import { pets } from "./db";

export default function GetData(URL) {
    // return fetch(URL)
    //     .then(response => response.json());
    return new Promise((resolve, reject) => {
        resolve(pets);
    })
}
