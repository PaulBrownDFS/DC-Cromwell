webpackHotUpdate_N_E("pages/card",{

/***/ "./pages/card/index.js":
/*!*****************************!*\
  !*** ./pages/card/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_paul_RApp_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/card */ \"./src/components/card.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/functions */ \"./src/functions/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/paul/RApp/nextjs/pages/card/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable no-undef */\n\n\n\n\n\n\n\nvar SingleCard = function SingleCard() {\n  _s();\n\n  var _jsxDEV2;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      card = _useState[0],\n      setCard = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var contentId = Object(_src_functions__WEBPACK_IMPORTED_MODULE_7__[\"getQueryParam\"])('content');\n\n    if (!contentId) {\n      contentId = '82e2b459-f979-4400-8eaf-dfa9a7ade8ad'; // Fallback content id if none supplied\n    } // Amplience Dynamic content Url DFSv2 URL\n\n\n    var url = \"https://76c8qrrtiabd11ltobf89e71r.staging.bigcontent.io/content/id/\".concat(contentId, \"?depth=all&format=inlined\"); // static local api data (used during building content)\n    // const url = 'http://localhost:3000/api/cardlist';\n\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setCard(data);\n      setLoading(false);\n      console.log('data', data);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Card Ex Brands Preview | Dynamic Content Preview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"], {\n        variant: \"body2\",\n        children: \"Loading Content, please wait ..\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n        fixed: true,\n        maxWidth: \"xl\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n          id: \"fixedWidthWrapper\",\n          padding: \"20px\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (_jsxDEV2 = {\n            container: true,\n            justify: \"center\"\n          }, Object(_home_paul_RApp_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_jsxDEV2, \"justify\", \"center\"), Object(_home_paul_RApp_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_jsxDEV2, \"spacing\", 1), Object(_home_paul_RApp_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_jsxDEV2, \"children\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            card: card.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 17\n          }, _this)), _jsxDEV2), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SingleCard, \"6byNh5/mOOpdblKNDoxjtV8/uGg=\");\n\n_c = SingleCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC9pbmRleC5qcz8xZGE3Il0sIm5hbWVzIjpbIlNpbmdsZUNhcmQiLCJ1c2VTdGF0ZSIsImNhcmQiLCJzZXRDYXJkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJjb250ZW50SWQiLCJnZXRRdWVyeVBhcmFtIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDaEJDLElBRGdCO0FBQUEsTUFDVkMsT0FEVTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxJQUFELENBRmY7QUFBQSxNQUVoQkcsT0FGZ0I7QUFBQSxNQUVQQyxVQUZPOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsU0FBUyxHQUFHQyxvRUFBYSxDQUFDLFNBQUQsQ0FBN0I7O0FBRUEsUUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2RBLGVBQVMsR0FBRyxzQ0FBWixDQURjLENBQ3NDO0FBQ3JELEtBTGEsQ0FPZDs7O0FBQ0EsUUFBTUUsR0FBRyxnRkFBeUVGLFNBQXpFLDhCQUFULENBUmMsQ0FVZDtBQUNBOztBQUVBRyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RYLGFBQU8sQ0FBQ1csSUFBRCxDQUFQO0FBQ0FULGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0QsS0FOSDtBQU9ELEdBcEJRLEVBb0JOLEVBcEJNLENBQVQ7QUFxQkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBSUdWLE9BQU8sZ0JBQ04scUVBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNLGdCQU9OO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFBVyxhQUFLLE1BQWhCO0FBQWlCLGdCQUFRLEVBQUMsSUFBMUI7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFLLFlBQUUsRUFBQyxtQkFBUjtBQUE0QixpQkFBTyxFQUFDLE1BQXBDO0FBQUEsaUNBQ0UscUVBQUMsOERBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQWdCLG1CQUFPLEVBQUM7QUFBeEIsaUxBQXlDLFFBQXpDLHVLQUEyRCxDQUEzRCxxTEFDRSxxRUFBQyw0REFBRDtBQUFNLGdCQUFJLEVBQUVGLElBQUksQ0FBQ2U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQWpERDs7R0FBTWpCLFU7O0tBQUFBLFU7QUFtRFNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQnO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBnZXRRdWVyeVBhcmFtIH0gZnJvbSAnLi4vLi4vc3JjL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IFNpbmdsZUNhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXJkLCBzZXRDYXJkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY29udGVudElkID0gZ2V0UXVlcnlQYXJhbSgnY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50SWQpIHtcbiAgICAgIGNvbnRlbnRJZCA9ICc4MmUyYjQ1OS1mOTc5LTQ0MDAtOGVhZi1kZmE5YTdhZGU4YWQnOyAvLyBGYWxsYmFjayBjb250ZW50IGlkIGlmIG5vbmUgc3VwcGxpZWRcbiAgICB9XG5cbiAgICAvLyBBbXBsaWVuY2UgRHluYW1pYyBjb250ZW50IFVybCBERlN2MiBVUkxcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly83NmM4cXJydGlhYmQxMWx0b2JmODllNzFyLnN0YWdpbmcuYmlnY29udGVudC5pby9jb250ZW50L2lkLyR7Y29udGVudElkfT9kZXB0aD1hbGwmZm9ybWF0PWlubGluZWRgO1xuXG4gICAgLy8gc3RhdGljIGxvY2FsIGFwaSBkYXRhICh1c2VkIGR1cmluZyBidWlsZGluZyBjb250ZW50KVxuICAgIC8vIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NhcmRsaXN0JztcblxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDYXJkKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2FyZCBFeCBCcmFuZHMgUHJldmlldyB8IER5bmFtaWMgQ29udGVudCBQcmV2aWV3PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgTG9hZGluZyBDb250ZW50LCBwbGVhc2Ugd2FpdCAuLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDb250YWluZXIgZml4ZWQgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICAgICAgPEJveCBpZD1cImZpeGVkV2lkdGhXcmFwcGVyXCIgcGFkZGluZz1cIjIwcHhcIj5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICAgICAgPENhcmQgY2FyZD17Y2FyZC5jb250ZW50fT48L0NhcmQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/card/index.js\n");

/***/ })

})