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

  for (const term of terms) {
    try {
      const response = await axiosWithLogs.get(`${stackExchangeApi}${term}`);
      const date = new Date();
      console.log(
        `${date.toISOString()} - title sequential: `,
        response.data.items[0].title
      );
      console.log('--------------------');
    } catch (error) {
      if (error.message === 'Request failed with status code 400') {
        throw new Error('Error - 400');
      }
      console.log('error: ', error);
      throw error;
    }
  }
})();
