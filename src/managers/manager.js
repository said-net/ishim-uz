const { configureStore } = require("@reduxjs/toolkit");
const { default: langManager } = require("./langManager");
const { default: signinManager } = require("./signinManager");
const { default: authManager } = require("./authManager");

module.exports = configureStore({
    reducer: {
        lang: langManager,
        signin: signinManager,
        auth: authManager
    }
});