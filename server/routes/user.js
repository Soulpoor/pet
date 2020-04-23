"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.status(200).json({
        msg: 'all users'
    });
});
router.get('/:id', function (req, res, next) {
    var _a;
    res.status(200).json({
        msg: 'user id:' + ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id)
    });
});
router.post('/', function (req, res, next) {
    var data = req.body;
    res.status(200).json({
        msg: 'add users: ' + data.first_name
    });
});
router.patch('/', function (req, res, next) {
    var data = req.body;
    res.status(200).json({
        msg: 'edit user: ' + (data === null || data === void 0 ? void 0 : data.id)
    });
});
router.delete('/:id', function (req, res, next) {
    var _a;
    res.status(200).json({
        msg: 'delete user: ' + ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id)
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map