import Joi from "joi"

export const ClientAddRepo = Joi.object({
    name: Joi.string()
            .min(3)
            .required(),

    isPrivate: Joi.boolean().required(),

    user: Joi.string().required(),
});