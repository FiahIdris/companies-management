const errorFunction = (isError, msg, data) => {
  if (isError) return { is_error: isError, message: msg };
  else return { is_error: isError, message: msg, data };
};

module.exports = errorFunction;
