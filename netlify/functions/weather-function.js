// serverless function (weather-function.js)
exports.handler = async () => {
    try {
      const apiKey = process.env.API_KEY; // Access environment variable
      console.log(apiKey);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Weather data from the serverless function' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  };
  