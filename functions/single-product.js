const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event, context, cb) => {
  try {
    const { id } = event.queryStringParameters;

    if (!id) {
      return {
        statusCode: 400,
        body: 'Product ID is required',
      };
    }

    const response = await axios.get(`https://api.airtable.com/v0/apphoHAKiAVSHZClG/products/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    const product = response.data.fields; 

    return {
      statusCode: 200,
      body: JSON.stringify(product),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'There was an error',
    };
  }
};
