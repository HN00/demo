import { BASE_API, ACCESS_TOKEN } from "../constants/appSettings";
import { showError } from "../utils/app";
import { logout } from "../auth";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export function getAsync(endpoint) {
  return myFetchAsync("GET", endpoint, undefined);
}

export function postAsync(endpoint, body) {
  return myFetchAsync("POST", endpoint, body);
}

export function putAsync(endpoint, body) {
  return myFetchAsync("PUT", endpoint, body);
}

export function _deleteAsync(endpoint, body) {
  return myFetchAsync("DELETE", endpoint, body);
}

export function get(endpoint, successCallback, errorCallback) {
  myFetch("GET", endpoint, undefined, successCallback, errorCallback);
}

export function post(endpoint, body, successCallback, errorCallback) {
  myFetch("POST", endpoint, body, successCallback, errorCallback);
}

export function put(endpoint, body, successCallback, errorCallback) {
  myFetch("PUT", endpoint, body, successCallback, errorCallback);
}
export function _delete(endpoint, body, successCallback, errorCallback) {
  myFetch("DELETE", endpoint, body, successCallback, errorCallback);
}

function myFetchAsync(method, endpoint, body) {
  let url = BASE_API + endpoint;

  body = JSON.stringify(body);

  let headers = defaultHeaders;
  headers["Authorization"] =
    "bearer " + window.localStorage.getItem(ACCESS_TOKEN);

  if (body === undefined)
    return fetch(url, {
      method: method,
      headers: headers
    });
  else
    return fetch(url, {
      method: method,
      headers: headers,
      body: body
    });
}

function myFetch(method, endpoint, body, successCallback, errorCallback) {
  let url = BASE_API + endpoint;

  body = JSON.stringify(body);

  let headers = defaultHeaders;
  headers["Authorization"] =
    "bearer " + window.localStorage.getItem(ACCESS_TOKEN);

  let response = null;

  if (body === undefined)
    response = fetch(url, {
      method: method,
      headers: headers
    });
  else {
    response = fetch(url, {
      method: method,
      headers: headers,
      body: body
    });
  }
  handleResponse(response, successCallback, errorCallback);
}

const handleResponse = (response, successCallback, errorCallback) => {
  response.then(r => {
    if (r.status == 200) {
      if (successCallback) {
        r.json()
          .then(result => successCallback(result))
          .catch(() => successCallback());
      }
    } else if (r.status == 400) {
      let errorMessage = "Unknow error";
      if (result.errors || result.errors.length > 0)
        errorMessage = result.errors.join("\n");
      throwError(errorCallback, errorMessage);
    } else if (r.status == 401) {
      logout();
    } else {
      throwError(null, "Unhandled response");
    }
  });
};

const throwError = (errorCallback, message) => {
  if (errorCallback) errorCallback(message);
  else showError(message);
};
