const userService = require('../services/usersServices');
const logger = require('../utils/logger');
const bcrypt = require('bcrypt');
const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        //  Generate a salt and hash the password
        const saltRounds = 12; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //  Call the model with the hashed password
        const newUser = await userModel.createUser(name, email, hashedPassword, role);

        //  Remove password from the response object for security
        const { password: _, ...safeUser } = newUser;

        logger.info({ userId: safeUser.id }, 'User registered successfully');
        return res.status(201).json(safeUser);

    } catch (error) {
        logger.error({ err: error.message }, 'Registration logic failed');
        return res.status(400).json({ error: 'Email already exists or request invalid' });
    }
};
//  LIST ALL
const listUsers = async (req, res) => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'List Users Error');
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//  READ ONE (By ID)
// Note: In Express, the 'id' param is often handled by a separate param middleware
const getUserByID = async (req, res, next, id) => {
    try {

    } catch (error) {
        logger.error({ err: error.message, id }, 'Get User By ID Error');
        res.status(400).json({ error: "Could not retrieve user" });
    }
};

//  SIGN OUT
const signOutUser =async  (req, res) => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'Sign Out Error');
        res.status(500).json({ error: "Sign out failed" });
    }
};

//  LOG IN
const logInUser= async (req, res,next) => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'Sign Out Error');
        res.status(500).json({ error: "Sign out failed" });
    }
};

//  UPDATE
const updateUser = async (req, res, next) => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'Update User Error');
        res.status(400).json({ error: "Update failed" });
    }
};

//  DELETE
const removeUser = async (req, res, next) => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'Remove User Error');
        res.status(400).json({ error: "Delete failed" });
    }
};

module.exports = {
    createUser,
    listUsers,
    getUserByID,
    logInUser,
    signOutUser,
    updateUser,
    removeUser
};

