"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _user = require("../route-func/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
exports.router = router;
router.post('/signup', _passport.default.authenticate('signup', {
  session: false
}), _user.SignUp);
router.post('/login', _user.Login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZS91c2VyLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsInBvc3QiLCJQYXNzcG9ydCIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iLCJTaWduVXAiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOzs7O0FBS08sSUFBTUEsTUFBTSxHQUFHLHNCQUFmOztBQUVQQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxrQkFBU0MsWUFBVCxDQUFzQixRQUF0QixFQUFnQztBQUFDQyxFQUFBQSxPQUFPLEVBQUU7QUFBVixDQUFoQyxDQUF2QixFQUEwRUMsWUFBMUU7QUFFQUwsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQkssV0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBSb3V0ZXJcbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuXG5pbXBvcnQge1xuICBTaWduVXAsXG4gIExvZ2luXG59IGZyb20gJy4uL3JvdXRlLWZ1bmMvdXNlcic7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9zaWdudXAnLCBQYXNzcG9ydC5hdXRoZW50aWNhdGUoJ3NpZ251cCcsIHtzZXNzaW9uOiBmYWxzZX0pLCBTaWduVXApO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgTG9naW4pOyJdfQ==