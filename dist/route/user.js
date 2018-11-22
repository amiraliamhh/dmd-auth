"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _create = require("../route-func/user/create");

var router = (0, _express.Router)();
exports.router = router;
router.post('/signup', _create.SignUp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZS91c2VyLnRzIl0sIm5hbWVzIjpbInJvdXRlciIsInBvc3QiLCJTaWduVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFJQTs7QUFJTyxJQUFNQSxNQUFNLEdBQUcsc0JBQWY7O0FBRVBBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVosRUFBdUJDLGNBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUm91dGVyXG59IGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQge1xuICBTaWduVXBcbn0gZnJvbSAnLi4vcm91dGUtZnVuYy91c2VyL2NyZWF0ZSc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9zaWdudXAnLCBTaWduVXApOyJdfQ==