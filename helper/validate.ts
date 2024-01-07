import Joi from "joi";

export const validateErrors =
  <T = any>(schema: Joi.PartialSchemaMap<T>, options?: Joi.ValidationOptions) =>
  (data: T) =>
    Joi.object(schema).validate(data, options).error;

export const isValidated =
  <T = any>(schema: Joi.PartialSchemaMap<T>, options?: Joi.ValidationOptions) =>
  (data: T) => {
    if (validateErrors(schema, options)(data))
      throw new Error("Validate failed");
  };
