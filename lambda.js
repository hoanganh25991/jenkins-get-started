module.exports.handler = (event, context, callback) => {
	console.log("Hello Wolrd", event);
	const response = {
      statusCode: 200,
      headers: {
        "x-custom-header" : "My Header Value"
      },
      body: JSON.stringify({ "message": "Hello World!" })
    };
	callback(null, response)
}