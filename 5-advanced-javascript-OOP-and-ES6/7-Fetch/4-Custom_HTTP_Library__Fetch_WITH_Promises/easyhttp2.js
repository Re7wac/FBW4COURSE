/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 1.0.0
 * @author FbW4
 * @license 
 * 
 **/

class EasyHTTP {
    //Make an HTTP Get Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }


    //Make an HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    //Make an HTTP PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject())
        })
    }

    //Make an HTTP DELETE Request
    delet(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
                .then(res => res.json())
                .then(() => resolve('DONE>>'))
                .catch(err => reject(`My Custome Message ${err}`))
        })
    }
}