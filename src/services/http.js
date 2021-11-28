const baseUrl = "https://jsonplaceholder.typicode.com";

const createRequest = async (method, url, options, withDefaultBaseUrl) => {
  const defaultOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    },
    ...options,
  };
  return await fetch(
    `${withDefaultBaseUrl ? baseUrl : ""}${url}`,
    defaultOptions
  ).then((response) => {
    return response.json();
  });
};

export const _GET = (url, options = {}, withDefaultBaseUrl = true) => {
  return createRequest("GET", url, options, withDefaultBaseUrl);
};
