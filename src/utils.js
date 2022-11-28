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

export async function deleteEvent(url, data) {
  const response = await fetch(window.location.origin + url + "/" + data, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return;
}

export async function get(url) {
  const response = await fetch(window.location.origin + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}