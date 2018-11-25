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
router.post('/login', _user.Login); // router.get('/secure', Passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json({success: true});
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZS91c2VyLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsInBvc3QiLCJQYXNzcG9ydCIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iLCJTaWduVXAiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUVBOzs7O0FBS08sSUFBTUEsTUFBTSxHQUFHLHNCQUFmOztBQUVQQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxrQkFBU0MsWUFBVCxDQUFzQixRQUF0QixFQUFnQztBQUFDQyxFQUFBQSxPQUFPLEVBQUU7QUFBVixDQUFoQyxDQUF2QixFQUEwRUMsWUFBMUU7QUFFQUwsTUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQkssV0FBdEIsRSxDQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJvdXRlclxufSBmcm9tICdleHByZXNzJztcbmltcG9ydCBQYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5cbmltcG9ydCB7XG4gIFNpZ25VcCxcbiAgTG9naW5cbn0gZnJvbSAnLi4vcm91dGUtZnVuYy91c2VyJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuXG5yb3V0ZXIucG9zdCgnL3NpZ251cCcsIFBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnc2lnbnVwJywge3Nlc3Npb246IGZhbHNlfSksIFNpZ25VcCk7XG5cbnJvdXRlci5wb3N0KCcvbG9naW4nLCBMb2dpbik7XG5cbi8vIHJvdXRlci5nZXQoJy9zZWN1cmUnLCBQYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2p3dCcsIHsgc2Vzc2lvbjogZmFsc2UgfSksIChyZXEsIHJlcykgPT4ge1xuLy8gICByZXMuanNvbih7c3VjY2VzczogdHJ1ZX0pO1xuLy8gfSkiXX0=