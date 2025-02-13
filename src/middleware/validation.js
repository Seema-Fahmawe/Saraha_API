const validation = (schema) => {
  return (req, res, next) => {
    const inputsData = { ...req.body, ...req.query, ...req.params };
    const validationResult = schema.validate(inputsData, {
      abortEarly: false,
    });
    if (validationResult?.error) {
      return next(new Error(validationResult.error, 400));
    }
    next();
  };
};

export default validation;
