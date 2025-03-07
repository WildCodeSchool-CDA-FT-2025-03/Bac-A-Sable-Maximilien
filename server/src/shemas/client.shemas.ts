import Joi from "joi"

export const CheckClientAddRepo = Joi.object({
    name: Joi.string()
            .min(3)
            .required(),

    isPrivate: Joi.boolean().required(),

    user: Joi.string().required(),
});

export const CheckQueryRequest = Joi.object({
    name: Joi.string().optional(),
    isPrivate: Joi.boolean().optional(),
    languages: Joi.string().optional(),
    user: Joi.string().optional(),
    fields: Joi.string().optional(),
    limit: Joi.number().optional(),
    page: Joi.number().optional(),
});