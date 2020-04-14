/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 1.0.0
 * @author FbW4
 * The MIt License is a promissive free software license orginating at the massachusetts institute of Technology (MIT) in the late  1980s. as a permissive license, it puts only very limited restriction on reuse and has, therefore, reasonable license compatibility.
 * @license 
 * 
 */
class EasyHTTP {
    //Make an HTTP Get Request
    async get(url) {
        const response = await fetch(url)
        const resData = await response.json()
        return resData
    }


    //Make an HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }



    //  //Make an HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData
    }



    //Make HTTP DELETE Request 
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },

        })
        const resData = await response.json()
        return resData

    }
}