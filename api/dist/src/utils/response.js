"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (data, message = 'OK', statusCode = 200) => ({
    statusCode,
    message,
    data,
});
exports.success = success;
const error = (message, statusCode = 400, errors) => ({
    statusCode,
    message,
    ...(errors && { errors }),
});
exports.error = error;
//# sourceMappingURL=response.js.map