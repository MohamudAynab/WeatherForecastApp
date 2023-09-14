const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const city = event.queryStringParameters.city;
    const apiKey = process.env.API_KEY;

    if (!city) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'City parameter is missing' }),
      };
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );

    if (response.status !== 200) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Error fetching weather data' }),
      };
    }

    const weatherData = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(weatherData),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
