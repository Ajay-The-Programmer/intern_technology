StringChecks = {
    isString: function (str) {
        return typeof str === "string";
    },

    convertToUpperCase: function (str) {
        return str.toUpperCase();
    },

    convertToLowerCase: function (str) {
        return str.toLowerCase();
    },

    convertToStringBold: function (str) {
        return str.bold();
    }
};