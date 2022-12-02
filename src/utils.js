/**
 * RESTful API, used to store, retrieve, and delete data from the database to display on the Web Application UI.
 * @type API
 * @exported - App.js, Event.js, CreateEventModal.js
 */

/** This function creates a template for post requests to be made at the correct url 
 * @async
*/
export async function post(url, data) {
  const response = await fetch(window.location.origin + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

/** This function allows for events to be deleted from the database at the correct url 
 * @async
*/
export async function deleteEvent(url, data) {
  const response = await fetch(window.location.origin + url + "/" + data, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return;
}

/** This function allows for information to be pulled in from the database at the correct url 
 * @async
*/
export async function get(url) {
  const response = await fetch(window.location.origin + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}