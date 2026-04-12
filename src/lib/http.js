import { store } from "../redux/store";
import { logoutUser } from "../redux/reduces/authReducer";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://adit-backend.camps.fahrul.id";

// const BASE_URL = import.meta.env.VITE_BASE_URL;


async function http(url,body, opts={}){
  const state = store.getState();
  const token = state.auth.token;
  const headers = {
    "Content-Type": "application/json",
  };

  if(token){
    headers.Authorization = "Bearer "+ token;
  }

  const response = await fetch(BASE_URL+url,{
    method: opts.method || "GET",
    body,
    headers
  });


  if (response.status === 401) {
    console.log("Token expired, logout user:", url);
    store.dispatch(logoutUser()); 
    window.location.href = "/signin"; 
    return response;
  }

  return response;
}

export default http;