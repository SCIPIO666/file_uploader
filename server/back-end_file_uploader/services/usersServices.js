const userModel = require('../models/userModel');
const logger = require('../utils/logger');


// CREATE
const createUser = async (name, email, password, role) => {
    try {
        // Check if user exists before trying to create
        const existingUser = await userModel.getOneUser(email);
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const newUser = await userModel.createUser(name, email, password, role);      
        return newUser;
    } catch (error) {
        //  throw the error so the Controller's catch block can catch it
        logger.info(error.message)
        throw error;
    }
};

//  LIST ALL
const listUsers = async () => {
    try {

    } catch (error) {

    }
};

//  READ ONE (By ID)
const getUserByID = async () => {
    try {

    } catch (error) {

    }
};

//  LOG IN
const logInUser= async () => {
    try {

    } catch (error) {
        logger.error({ err: error.message }, 'Sign Out Error');
        res.status(500).json({ error: "Sign out failed" });
    }
};

//  SIGN OUT
const signOutUser = async() => {
    try {

    } catch (error) {


    }
};

// 5. UPDATE
const updateUser = async () => {
    try {

    } catch (error) {

    }
};

//  DELETE
const removeUser = async () => {
    try {

    } catch (error) {


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
