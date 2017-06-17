var log4js = require("log4js");
var appLog = log4js.getLogger();

module.exports = {
    logDebug: function logDebug(message, req, res) {
        appLog.debug(req.connection.remoteAddress + " - " + req.method + " - " + req.originalUrl + " - " + message + " - returning - " + (res ? res.statusCode : ""));
    },

    logInfo: function logInfo(message, req, res) {
        appLog.info(req.connection.remoteAddress + " - " + req.method + " - " + req.originalUrl + " - " + message + " - returning - " + (res ? res.statusCode : ""));
    },

    logError: function logError(req, res, error) {
        appLog.error(req.connection.remoteAddress + " - " + req.method + " - " + req.originalUrl + " - returning - " + (res ? res.statusCode : "") + " - ERROR - " + error);
    }

};