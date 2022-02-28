import User from '../models/User';
import sequelize from "sequelize";
import { Op } from "@sequelize/core";

class UserController {
    async store(req, res, next) {
        const { name, email, provider } = req.body;

        const emailAlreadyExists = await User.findOne({ where: { email }});

        if (emailAlreadyExists) {
            return res.json({ error: 'Email already exists'});
        }

        await User.create(req.body);
        return res.json({ name, email, provider });
    }

    async getById(req, res, next) {
        const userFind = await User.findOne(req.body);
        return res.json(userFind);
    }

    async getByEmail(req, res, next) {
        const { email } = req.body;
        const usersFind = await User.findOne({
            where: { email },
        });
        return res.json(usersFind);
    }

    async delete(req, res, next) {
        const { id } = req.body;
        const userDeleted = await User.destroy({
            where: { id }
        })
        return res.json(userDeleted);
    }
}

export default new UserController();