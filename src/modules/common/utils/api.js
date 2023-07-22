function apiHandler({ method, payload}) {
  return async function(url) {
    let request = new Request(url, {
      method,
      body: payload
    });

    try {
      let response = await fetch(request);
      let responseData = await response.json();

      return responseData;
    }
    catch(error) {
      throw new Error(error)
    }
  }
}

function get() {
  return apiHandler({ method: 'GET'})
}

function post(url, payload) {
  return apiHandler({ method:'POST', payload})(url)
}

const api = {
  get,
  post
}

export default api