export const Response = resp => {
    return resp.json().then(json => {
      return resp.ok ? json : Promise.reject(json);
    });
}

    