const { configureStore } = require("@reduxjs/toolkit");
const { default: langManager } = require("./langManager");

module.exports = configureStore({
    reducer: {
        lang: langManager
    }
});