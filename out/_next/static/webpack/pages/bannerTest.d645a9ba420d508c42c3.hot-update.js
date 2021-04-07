webpackHotUpdate_N_E("pages/bannerTest",{

/***/ "./pages/bannerTest/index.js":
/*!***********************************!*\
  !*** ./pages/bannerTest/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bannerTest.module.scss */ \"./pages/bannerTest/bannerTest.module.scss\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/paul/RApp/nextjs/pages/bannerTest/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable no-undef */\n\n\n\n\n\nvar Cardlist = function Cardlist() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      bannerTest = _useState[0],\n      setBannerTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // example IDs '69881315-c88e-4e90-a6b4-38fae83f56b7' , 'c61873e2-5f7c-4b1a-a427-ef1ade0fcc4e';\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // TODO: switch this to the visualisation URL when we have it.\n    // const contentId = window.location.search.split('?content=')[1]; // get id from Params\n    // Amplience Dynamic content Url\n    // const url = `https://cdn.c1.amplience.net/cms/content/query?fullBodyObject=true&scope=tree&store=dfs&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/${contentId}%22%7D`;\n    // static local api data (used during building content)\n    var url = 'http://localhost:3000/api/bannerTest';\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setBannerTest(window.amp.inlineContent(data)[0]); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree\n\n      setLoading(false);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_bannerTest_v1,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Banner Test Preview | Dynamic Content Preview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"h4\",\n        children: \"Loading Content, please wait ..\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n        container: true,\n        spacing: 1,\n        className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_testBanner,\n        direction: \"row\",\n        justify: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            textAlign: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n              variant: \"h4\",\n              children: bannerTest.headline\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Cardlist, \"OlcpF383NvHozQhSn9LanHd22EM=\");\n\n_c = Cardlist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cardlist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cardlist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFubmVyVGVzdC9pbmRleC5qcz8wZTYyIl0sIm5hbWVzIjpbIkNhcmRsaXN0IiwidXNlU3RhdGUiLCJiYW5uZXJUZXN0Iiwic2V0QmFubmVyVGVzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ3aW5kb3ciLCJhbXAiLCJpbmxpbmVDb250ZW50Iiwic3R5bGVzIiwiZGNfYmFubmVyVGVzdF92MSIsImRjX3Rlc3RCYW5uZXIiLCJoZWFkbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRkssa0JBR3JCOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxzQ0FBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RULG1CQUFhLENBQUNVLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxhQUFYLENBQXlCSCxJQUF6QixFQUErQixDQUEvQixDQUFELENBQWIsQ0FEYyxDQUNvQzs7QUFDbERQLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMSDtBQU1ELEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLDhEQUFNLENBQUNDLGdCQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJR2IsT0FBTyxnQkFDTixxRUFBQyxxREFBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZ0JBS047QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUUsQ0FGWDtBQUdFLGlCQUFTLEVBQUVZLDhEQUFNLENBQUNFLGFBSHBCO0FBSUUsaUJBQVMsRUFBQyxLQUpaO0FBS0UsZUFBTyxFQUFDLFFBTFY7QUFNRSxrQkFBVSxFQUFDLFFBTmI7QUFBQSwrQkFRRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBQSx3QkFBMEJoQixVQUFVLENBQUNpQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXBERDs7R0FBTW5CLFE7O0tBQUFBLFE7QUFzRFNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmFubmVyVGVzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBCb3gsIEhpZGRlbiwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Jhbm5lclRlc3QubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDYXJkbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW2Jhbm5lclRlc3QsIHNldEJhbm5lclRlc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgLy8gZXhhbXBsZSBJRHMgJzY5ODgxMzE1LWM4OGUtNGU5MC1hNmI0LTM4ZmFlODNmNTZiNycgLCAnYzYxODczZTItNWY3Yy00YjFhLWE0MjctZWYxYWRlMGZjYzRlJztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRPRE86IHN3aXRjaCB0aGlzIHRvIHRoZSB2aXN1YWxpc2F0aW9uIFVSTCB3aGVuIHdlIGhhdmUgaXQuXG4gICAgLy8gY29uc3QgY29udGVudElkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnP2NvbnRlbnQ9JylbMV07IC8vIGdldCBpZCBmcm9tIFBhcmFtc1xuXG4gICAgLy8gQW1wbGllbmNlIER5bmFtaWMgY29udGVudCBVcmxcbiAgICAvLyBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jZG4uYzEuYW1wbGllbmNlLm5ldC9jbXMvY29udGVudC9xdWVyeT9mdWxsQm9keU9iamVjdD10cnVlJnNjb3BlPXRyZWUmc3RvcmU9ZGZzJnF1ZXJ5PSU3QiUyMnN5cy5pcmklMjI6JTIyaHR0cDovL2NvbnRlbnQuY21zLmFtcGxpZW5jZS5jb20vJHtjb250ZW50SWR9JTIyJTdEYDtcblxuICAgIC8vIHN0YXRpYyBsb2NhbCBhcGkgZGF0YSAodXNlZCBkdXJpbmcgYnVpbGRpbmcgY29udGVudClcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9iYW5uZXJUZXN0JztcblxuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRCYW5uZXJUZXN0KHdpbmRvdy5hbXAuaW5saW5lQ29udGVudChkYXRhKVswXSk7IC8vIHVzZSB0aGUgQW1wbGllbmNlIENNUyBKYXZhU2NyaXB0IFNESyB0byBtYW5pcHVsYXRlIHRoZSBKU09OLUxEIGludG8gYSBjb250ZW50IHRyZWVcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGNfYmFubmVyVGVzdF92MX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJhbm5lciBUZXN0IFByZXZpZXcgfCBEeW5hbWljIENvbnRlbnQgUHJldmlldzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5Mb2FkaW5nIENvbnRlbnQsIHBsZWFzZSB3YWl0IC4uPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRjX3Rlc3RCYW5uZXJ9XG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+e2Jhbm5lclRlc3QuaGVhZGxpbmV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxIaWRkZW4+PC9IaWRkZW4+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZGxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/bannerTest/index.js\n");

/***/ })

})