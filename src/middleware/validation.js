const validation = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body, {
      abortEarly: false,
    });
    if (result.error) {
      return res.json({
        message: "valiation error",
        error: result.error.details,
      });
    } else {
      next();
    }
  };
};

export default validation;
