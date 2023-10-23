const logger = async (event) => {
  console.log(event)
}

const handler = async (event, context, callback) => {
  let message;

  console.log("error")
  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
    }),
  };
};

module.exports = {
  logger,
  handler,
};
