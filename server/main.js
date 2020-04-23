"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var root_1 = __importDefault(require("./routes/root"));
var user_1 = __importDefault(require("./routes/user"));
var pet_1 = __importDefault(require("./routes/pet"));
var petService_1 = __importDefault(require("./routes/petService"));
var article_1 = __importDefault(require("./routes/article"));
var app = express_1.default();
app.use(express_1.default.json());
app.use('/', root_1.default);
app.use('/users', user_1.default);
app.use('/pets', pet_1.default);
app.use('/pet-services', petService_1.default);
app.use('/articles', article_1.default);
app.use(function (req, res, next) {
    res.status(404).json({
        msg: 'not found!'
    });
});
exports.default = app;
//# sourceMappingURL=main.js.map