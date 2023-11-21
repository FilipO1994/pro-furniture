const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

exports.handler = async (event, context, cb) => {
	try {
		const response = await axios.get('https://api.airtable.com/v0/apphoHAKiAVSHZClG/products', {
			headers: {
				Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
				'Content-Type': 'application/json',
			},
		})

		const products = response.data.records.map(product => {
			const { id, fields } = product
			const { name, featured, price, colors, company, description, category, shipping, images } = fields
			const { url } = images[0]
			return { id, featured, name, price, colors, company, description, category, shipping, image: url }
		})


		return {
			statusCode: 200,
			body: JSON.stringify(products)
		}
	} catch (error) {
		console.log(error)
		return {
			statusCode: 500,
			body: 'there was an error',
		}
	}
}
