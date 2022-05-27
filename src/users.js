import React from 'react';
import axios from "axios";


module.exports = class Users{

   URL = "http://localhost:3001/"
   users = [
      {
          name: "alex",
          email: "alex@gmail.com"
        },
      {
        name: "alex2",
        email: "alex2@gmail.com"
      },
      {
        name: "alex3",
        email: "alex3@gmail.com"
      }
    ];

    getHeader  = {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "Bearer " + token,
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      }
    };
    constructor(){

    }


    listeElement(){
      return this.users;
    }

    async addUser(user){
      const request = await axios.post(`${this.URL}addUser`, user);
      return request;
    }

    async listeUsers(){
      const request = await axios.get(`${this.URL}users`);
      return request.data;
    }

    async updateUser(user){
      const request = await axios.post(`${this.URL}updateUser`, user);
      return request;
    }


    async dropUser(matricule){
      const request = await axios.post(`${this.URL}dropUser`, {matricule: matricule});
      // console.log(request.data)
      return request;
    }

}
