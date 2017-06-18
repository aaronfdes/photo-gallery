var mylog = require('./photo-logger');

module.exports = {
    handleError: function handleError(error, req, res) {
        mylog.logError(req, res, error);
        return next(error);
    }
};