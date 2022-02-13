import { history} from 'index'
import { getConfig } from 'services/config/config';
import {logout} from 'services/jwt'

function authHeader() {
  const data = JSON.parse(localStorage.getItem('data'));
  console.log(data)
  if (data) {
      return { 'Authorization': `Bearer ${data.token}` };
  } 
  return {}
}

export async function admins() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return fetch(getConfig("allAdmins"), requestOptions).then(handleResponse)
}

export async function roles() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  return fetch(getConfig("allRoles"), requestOptions).then(handleResponse);
}

export async function createAdmin(data) {
  console.log(data)
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body:JSON.stringify(data)
  };
  return fetch(getConfig("createAdmin"), requestOptions).then(handleResponse);
}

export async function createRole(data) {
  console.log(data)
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body:JSON.stringify(data)
  };
  return fetch(getConfig("createRole"), requestOptions).then(handleResponse);
}

export async function updateAdmin(data) {
  console.log(data)
  console.log(authHeader())
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body:JSON.stringify(data)
  };
  return fetch(getConfig("updateAdmin"), requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then((text) => {
    let data = "";
    try {
      data = text && JSON.parse(text);
    } catch (error1) {
      // ...
    }
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      if (error === "Unauthorized") {
        logout()
        history.push("/auth/login");
      }
      return Promise.reject(error);
    }

    return data;
  });
}

