/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/getLatestRepos.js":
/*!*******************************!*\
  !*** ./lib/getLatestRepos.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar getLatestRepos = function getLatestRepos(data, token) {\n  try {\n    var username = data.githubUsername;\n\n    if (token) {\n      var res = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://api.github.com/search/repositories?q=user:\".concat(username, \"+sort:author-date-asc\"), {\n        headers: {\n          Authorization: \"token \".concat(token)\n        }\n      }).then(function (res) {\n        var repos = res.data.items;\n        var latestSixRepos = repos.splice(0, 6); // console.log(\"LATEST 6 repos\", latestSixRepos);\n\n        return latestSixRepos;\n      })[\"catch\"](function (e) {});\n    } else {\n      var _res = axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://api.github.com/search/repositories?q=user:\".concat(username, \"+sort:author-date-asc\")).then(function (res) {\n        var repos = res.data.items;\n        var latestSixRepos = repos.splice(0, 6);\n        return latestSixRepos;\n      })[\"catch\"](function (e) {});\n    }\n  } catch (err) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getLatestRepos);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2dldExhdGVzdFJlcG9zLmpzPzEzMjUiXSwibmFtZXMiOlsiZ2V0TGF0ZXN0UmVwb3MiLCJkYXRhIiwidG9rZW4iLCJ1c2VybmFtZSIsImdpdGh1YlVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXBvcyIsIml0ZW1zIiwibGF0ZXN0U2l4UmVwb3MiLCJzcGxpY2UiLCJlIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdEMsTUFBSTtBQUNGLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxjQUF0Qjs7QUFDQSxRQUFJRixLQUFKLEVBQVc7QUFDVCxVQUFNRyxHQUFHLEdBQUdDLGdEQUFBLDZEQUU2Q0gsUUFGN0MsNEJBR1I7QUFDRUksZUFBTyxFQUFFO0FBQ1BDLHVCQUFhLGtCQUFXTixLQUFYO0FBRE47QUFEWCxPQUhRLEVBU1RPLElBVFMsQ0FTSixVQUFDSixHQUFELEVBQVM7QUFDYixZQUFJSyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0osSUFBSixDQUFTVSxLQUFyQjtBQUNBLFlBQUlDLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQixDQUZhLENBR2I7O0FBQ0EsZUFBT0QsY0FBUDtBQUNELE9BZFMsV0FlSCxVQUFDRSxDQUFELEVBQU8sQ0FBRSxDQWZOLENBQVo7QUFnQkQsS0FqQkQsTUFpQk87QUFDTCxVQUFNVCxJQUFHLEdBQUdDLGdEQUFBLDZEQUU2Q0gsUUFGN0MsNEJBSVRNLElBSlMsQ0FJSixVQUFDSixHQUFELEVBQVM7QUFDYixZQUFJSyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0osSUFBSixDQUFTVSxLQUFyQjtBQUNBLFlBQUlDLGNBQWMsR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFyQjtBQUNBLGVBQU9ELGNBQVA7QUFDRCxPQVJTLFdBU0gsVUFBQ0UsQ0FBRCxFQUFPLENBQUUsQ0FUTixDQUFaO0FBVUQ7QUFDRixHQS9CRCxDQStCRSxPQUFPQyxHQUFQLEVBQVksQ0FBRTtBQUNqQixDQWpDRDs7QUFtQ0EsK0RBQWVmLGNBQWYiLCJmaWxlIjoiLi9saWIvZ2V0TGF0ZXN0UmVwb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGdldExhdGVzdFJlcG9zID0gKGRhdGEsIHRva2VuKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLmdpdGh1YlVzZXJuYW1lO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3QgcmVzID0gYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9dXNlcjoke3VzZXJuYW1lfStzb3J0OmF1dGhvci1kYXRlLWFzY2AsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgdG9rZW4gJHt0b2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGxldCByZXBvcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgIGxldCBsYXRlc3RTaXhSZXBvcyA9IHJlcG9zLnNwbGljZSgwLCA2KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxBVEVTVCA2IHJlcG9zXCIsIGxhdGVzdFNpeFJlcG9zKTtcbiAgICAgICAgICByZXR1cm4gbGF0ZXN0U2l4UmVwb3M7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXMgPSBheGlvc1xuICAgICAgICAuZ2V0KFxuICAgICAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT11c2VyOiR7dXNlcm5hbWV9K3NvcnQ6YXV0aG9yLWRhdGUtYXNjYFxuICAgICAgICApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBsZXQgcmVwb3MgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICBsZXQgbGF0ZXN0U2l4UmVwb3MgPSByZXBvcy5zcGxpY2UoMCwgNik7XG4gICAgICAgICAgcmV0dXJuIGxhdGVzdFNpeFJlcG9zO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHt9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExhdGVzdFJlcG9zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/getLatestRepos.js\n");

/***/ })

});