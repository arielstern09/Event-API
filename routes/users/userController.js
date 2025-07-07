const User = require("./userModel")

//Create User
// everything you pass into a function becomes the parameter of that function. 

const getUsers = async () =>{

    try {
      const Users = await User.find()  
      return Users
    } catch (error) {
        throw error
    }
    
}

// get User by ID
const getUserById = async (Id) => {
    try {
        const user = await User.findById(Id)
        return user;
    } catch (error) {
        throw error
    }
}

const createUser = async (userData) => {

    try {
        // Add new user to database!
        const newUser = await User.create(userData)
        return newUser

    } catch (error) {
        throw error; 
    }
};


module.exports = { createUser, getUsers, getUserById  }