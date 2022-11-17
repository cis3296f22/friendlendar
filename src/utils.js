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


  post('/getSavedEvents', {}).then(console.log);