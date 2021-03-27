const User = require('../models');

const userController = {
    getUsers: (req, res) => {
        User.findAll()
            .then((users) => {
                res.status(200).json(users);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

module.exports = userController;
