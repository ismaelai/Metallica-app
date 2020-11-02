const errorHandlerMiddleware = (error, request, response, next) => {
  const { message } = error;
  res.status(400).send({
    message,
  });
};

export default errorHandlerMiddleware;
