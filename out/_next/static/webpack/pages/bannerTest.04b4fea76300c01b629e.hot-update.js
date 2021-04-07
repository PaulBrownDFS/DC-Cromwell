webpackHotUpdate_N_E("pages/bannerTest",{

/***/ "./pages/bannerTest/index.js":
/*!***********************************!*\
  !*** ./pages/bannerTest/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bannerTest.module.scss */ \"./pages/bannerTest/bannerTest.module.scss\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/paul/RApp/nextjs/pages/bannerTest/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable no-undef */\n\n\n\n\n\nvar Cardlist = function Cardlist() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      bannerTest = _useState[0],\n      setBannerTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // example IDs '69881315-c88e-4e90-a6b4-38fae83f56b7' , 'c61873e2-5f7c-4b1a-a427-ef1ade0fcc4e';\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // TODO: switch this to the visualisation URL when we have it.\n    // const contentId = window.location.search.split('?content=')[1]; // get id from Params\n    // Amplience Dynamic content Url\n    // const url = `https://cdn.c1.amplience.net/cms/content/query?fullBodyObject=true&scope=tree&store=dfs&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/${contentId}%22%7D`;\n    // static local api data (used during building content)\n    var url = 'http://localhost:3000/api/bannerTest';\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setBannerTest(window.amp.inlineContent(data)[0]); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree\n\n      setLoading(false);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_bannerTest_v1,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Banner Test Preview | Dynamic Content Preview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"h4\",\n        children: \"Loading Content, please wait ..\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n        container: true,\n        spacing: 1,\n        className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_testBanner,\n        direction: \"row\",\n        justify: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            textAlign: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n              variant: \"h4\",\n              children: bannerTest.headline\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              children: \"NO\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Cardlist, \"OlcpF383NvHozQhSn9LanHd22EM=\");\n\n_c = Cardlist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cardlist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cardlist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFubmVyVGVzdC9pbmRleC5qcz8wZTYyIl0sIm5hbWVzIjpbIkNhcmRsaXN0IiwidXNlU3RhdGUiLCJiYW5uZXJUZXN0Iiwic2V0QmFubmVyVGVzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ3aW5kb3ciLCJhbXAiLCJpbmxpbmVDb250ZW50Iiwic3R5bGVzIiwiZGNfYmFubmVyVGVzdF92MSIsImRjX3Rlc3RCYW5uZXIiLCJoZWFkbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRkssa0JBR3JCOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxzQ0FBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RULG1CQUFhLENBQUNVLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxhQUFYLENBQXlCSCxJQUF6QixFQUErQixDQUEvQixDQUFELENBQWIsQ0FEYyxDQUNvQzs7QUFDbERQLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMSDtBQU1ELEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLDhEQUFNLENBQUNDLGdCQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJR2IsT0FBTyxnQkFDTixxRUFBQyxxREFBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZ0JBS047QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUUsQ0FGWDtBQUdFLGlCQUFTLEVBQUVZLDhEQUFNLENBQUNFLGFBSHBCO0FBSUUsaUJBQVMsRUFBQyxLQUpaO0FBS0UsZUFBTyxFQUFDLFFBTFY7QUFNRSxrQkFBVSxFQUFDLFFBTmI7QUFBQSwrQkFRRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBQSx3QkFBMEJoQixVQUFVLENBQUNpQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FwREQ7O0dBQU1uQixROztLQUFBQSxRO0FBc0RTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jhbm5lclRlc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQm94LCBIaWRkZW4sIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYW5uZXJUZXN0Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2FyZGxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYW5uZXJUZXN0LCBzZXRCYW5uZXJUZXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGV4YW1wbGUgSURzICc2OTg4MTMxNS1jODhlLTRlOTAtYTZiNC0zOGZhZTgzZjU2YjcnICwgJ2M2MTg3M2UyLTVmN2MtNGIxYS1hNDI3LWVmMWFkZTBmY2M0ZSc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPOiBzd2l0Y2ggdGhpcyB0byB0aGUgdmlzdWFsaXNhdGlvbiBVUkwgd2hlbiB3ZSBoYXZlIGl0LlxuICAgIC8vIGNvbnN0IGNvbnRlbnRJZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoJz9jb250ZW50PScpWzFdOyAvLyBnZXQgaWQgZnJvbSBQYXJhbXNcblxuICAgIC8vIEFtcGxpZW5jZSBEeW5hbWljIGNvbnRlbnQgVXJsXG4gICAgLy8gY29uc3QgdXJsID0gYGh0dHBzOi8vY2RuLmMxLmFtcGxpZW5jZS5uZXQvY21zL2NvbnRlbnQvcXVlcnk/ZnVsbEJvZHlPYmplY3Q9dHJ1ZSZzY29wZT10cmVlJnN0b3JlPWRmcyZxdWVyeT0lN0IlMjJzeXMuaXJpJTIyOiUyMmh0dHA6Ly9jb250ZW50LmNtcy5hbXBsaWVuY2UuY29tLyR7Y29udGVudElkfSUyMiU3RGA7XG5cbiAgICAvLyBzdGF0aWMgbG9jYWwgYXBpIGRhdGEgKHVzZWQgZHVyaW5nIGJ1aWxkaW5nIGNvbnRlbnQpXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmFubmVyVGVzdCc7XG5cbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QmFubmVyVGVzdCh3aW5kb3cuYW1wLmlubGluZUNvbnRlbnQoZGF0YSlbMF0pOyAvLyB1c2UgdGhlIEFtcGxpZW5jZSBDTVMgSmF2YVNjcmlwdCBTREsgdG8gbWFuaXB1bGF0ZSB0aGUgSlNPTi1MRCBpbnRvIGEgY29udGVudCB0cmVlXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRjX2Jhbm5lclRlc3RfdjF9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CYW5uZXIgVGVzdCBQcmV2aWV3IHwgRHluYW1pYyBDb250ZW50IFByZXZpZXc8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+TG9hZGluZyBDb250ZW50LCBwbGVhc2Ugd2FpdCAuLjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kY190ZXN0QmFubmVyfVxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPntiYW5uZXJUZXN0LmhlYWRsaW5lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8SGlkZGVuPk5PPC9IaWRkZW4+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZGxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/bannerTest/index.js\n");

/***/ })

})