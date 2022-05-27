import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3001/",
});

export async function postData(user){
    const request = await axios.post("http://localhost:3001/addUser", user, {'content-type': 'text/json'});
    console.log(request)
    return request
    // if(request.statusText == "OK") navigate('/');
}