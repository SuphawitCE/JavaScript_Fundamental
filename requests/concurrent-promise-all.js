const axios = require('axios');

// Run command: time node fileName.js

const getAxiosWithLogs = () => {
  axios.interceptors.request.use((request) => {
    const date = new Date();
    console.log(`${date.toISOString()} - Calling URL: `, request.url);
    request.headers['request-startTime'] = date.getTime();

    return request;
  });

  axios.interceptors.response.use((response) => {
    const startTime = response.config.headers['request-startTime'];
    const currentTime = new Date().getTime();
    const timeElapsed = currentTime - startTime;
    console.log(`Calling URL: ${response.config.url} took ${timeElapsed} ms`);
    return response;
  });

  return axios;
};

(async () => {
  const stackExchangeApi =
    'https://api.stackexchange.com/2.3/search?pagesize=5&order=desc&sort=activity&site=stackoverflow&intitle=';
  const terms = [
    'javascript',
    'typescript',
    'php',
    'python',
    'java',
    'ruby',
    'go',
    'rust',
    'sql',
    'shell'
  ];
  const axiosWithLogs = getAxiosWithLogs();

  const requests = terms.map((term) => {
    return axiosWithLogs.get(`${stackExchangeApi}${term}`);
  });

  try {
    const responses = await Promise.all(requests);
    for (const response of responses) {
      const date = new Date();
      console.log(
        `${date.toISOString()} - title concurrent:`,
        response.data.items[0].title
      );
      console.log('---');
    }
  } catch (error) {
    if (error.message === 'Request failed with status code 400') {
      throw new Error('Error - 400');
    }
    console.log(`error: `, error);
    throw error;
  }
})();
