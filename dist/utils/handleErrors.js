"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = handleErrors;
const sequelize_1 = require("sequelize");
function handleErrors(res, error) {
    if (error instanceof sequelize_1.ValidationError) {
        return res.status(400).json({ errType: 'validation', msg: error.message });
    }
    else if (error instanceof sequelize_1.UniqueConstraintError) {
        return res.status(409).json({ errType: 'constraint', msg: error.message });
    }
    else if (error instanceof sequelize_1.DatabaseError) {
        return res.status(500).json({ errType: 'database', msg: error.message });
    }
    else if (error instanceof sequelize_1.BaseError) {
        return res.status(500).json({ errType: 'base', msg: error.message });
    }
    else {
        return res.status(500).json({ errType: 'misc', msg: error.message });
    }
}
