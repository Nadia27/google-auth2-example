const generateUrlWithParams = (endpoint, obj) => {
  let url;

  endpoint.includes("?") ? (url = endpoint) : (url = endpoint + "?");

  for (let key in obj) {
    url += `${key}=${obj[key]}&`;
  }

  console.log(url.slice(0, -1));
  return url.slice(0, -1); // remove the last `&` sign
};

module.exports = generateUrlWithParams;
