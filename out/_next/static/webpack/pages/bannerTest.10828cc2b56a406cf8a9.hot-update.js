webpackHotUpdate_N_E("pages/bannerTest",{

/***/ "./pages/bannerTest/index.js":
/*!***********************************!*\
  !*** ./pages/bannerTest/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Banner */ \"./src/components/Banner.js\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bannerTest.module.scss */ \"./pages/bannerTest/bannerTest.module.scss\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/paul/RApp/nextjs/pages/bannerTest/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable no-undef */\n\n\n\n\n\n\nvar BannerTest = function BannerTest() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      bannerTest = _useState[0],\n      setBannerTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var getId = function getId(param) {\n    var query = window.location.search.substring(1);\n    var vars = query.split('&');\n\n    for (var i = 0; i < vars.length; i++) {\n      var pair = vars[i].split('=');\n\n      if (decodeURIComponent(pair[0]) == param) {\n        return decodeURIComponent(pair[1]);\n      }\n    }\n\n    return false;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // TODO: switch this to the visualisation URL when we have it.\n    var contentId = getId(content);\n\n    if (!contentId) {\n      contentId = 'dae332d7-d196-4ea2-888d-eaa420c89dbb'; // Fallback content id if none supplied\n    }\n\n    console.log('ContentID:', contentId); // Amplience Dynamic content Url\n\n    var url = 'https://w59a4sqnbu301ot4nys8p4qo9.staging.bigcontent.io/content/id/' + contentId + '?depth=all&format=inlined'; // static local api data (used during building content)\n    // const url = 'http://localhost:3000/api/bannerTest';\n\n    console.log('Content URL:', url);\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setBannerTest(data); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree\n\n      setLoading(false);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dc_bannerTest_v1,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Banner Test Preview | Dynamic Content Preview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"body2\",\n        children: \"Loading Content, please wait ..\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n        fixed: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          id: \"fixedWidthWrapper\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            bannerTest: bannerTest.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BannerTest, \"OlcpF383NvHozQhSn9LanHd22EM=\");\n\n_c = BannerTest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BannerTest);\n\nvar _c;\n\n$RefreshReg$(_c, \"BannerTest\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFubmVyVGVzdC9pbmRleC5qcz8wZTYyIl0sIm5hbWVzIjpbIkJhbm5lclRlc3QiLCJ1c2VTdGF0ZSIsImJhbm5lclRlc3QiLCJzZXRCYW5uZXJUZXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRJZCIsInBhcmFtIiwicXVlcnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidXNlRWZmZWN0IiwiY29udGVudElkIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInN0eWxlcyIsImRjX2Jhbm5lclRlc3RfdjEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDaEJDLFVBRGdCO0FBQUEsTUFDSkMsYUFESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxJQUFELENBRmY7QUFBQSxNQUVoQkcsT0FGZ0I7QUFBQSxNQUVQQyxVQUZPOztBQUl2QixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsUUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxTQUF2QixDQUFpQyxDQUFqQyxDQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLEtBQU4sQ0FBWSxHQUFaLENBQVg7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFVBQUlFLElBQUksR0FBR0osSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUQsS0FBUixDQUFjLEdBQWQsQ0FBWDs7QUFDQSxVQUFJSSxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFsQixJQUErQlYsS0FBbkMsRUFBMEM7QUFDeEMsZUFBT1csa0JBQWtCLENBQUNELElBQUksQ0FBQyxDQUFELENBQUwsQ0FBekI7QUFDRDtBQUNGOztBQUNELFdBQU8sS0FBUDtBQUNELEdBVkQ7O0FBWUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSUMsU0FBUyxHQUFHZCxLQUFLLENBQUNlLE9BQUQsQ0FBckI7O0FBRUEsUUFBSSxDQUFDRCxTQUFMLEVBQWdCO0FBQ2RBLGVBQVMsR0FBRyxzQ0FBWixDQURjLENBQ3NDO0FBQ3JEOztBQUVERSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCSCxTQUExQixFQVJjLENBVWQ7O0FBQ0EsUUFBTUksR0FBRyxHQUNQLHdFQUNBSixTQURBLEdBRUEsMkJBSEYsQ0FYYyxDQWdCZDtBQUNBOztBQUVBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCQyxHQUE1QjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2QxQixtQkFBYSxDQUFDMEIsSUFBRCxDQUFiLENBRGMsQ0FDTzs7QUFDckJ4QixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBTEg7QUFNRCxHQTNCUSxFQTJCTixFQTNCTSxDQUFUO0FBNEJBLHNCQUNFO0FBQUssYUFBUyxFQUFFeUIsOERBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlHM0IsT0FBTyxnQkFDTixxRUFBQyxxREFBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZ0JBT047QUFBQSw2QkFDRSxxRUFBQywyREFBRDtBQUFXLGFBQUssTUFBaEI7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFLLFlBQUUsRUFBQyxtQkFBUjtBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQVEsc0JBQVUsRUFBRUYsVUFBVSxDQUFDbUI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBbEVEOztHQUFNckIsVTs7S0FBQUEsVTtBQW9FU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9iYW5uZXJUZXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9CYW5uZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFubmVyVGVzdC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEJhbm5lclRlc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYW5uZXJUZXN0LCBzZXRCYW5uZXJUZXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZ2V0SWQgPSAocGFyYW0pID0+IHtcbiAgICB2YXIgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocGFpclswXSkgPT0gcGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVE9ETzogc3dpdGNoIHRoaXMgdG8gdGhlIHZpc3VhbGlzYXRpb24gVVJMIHdoZW4gd2UgaGF2ZSBpdC5cbiAgICBsZXQgY29udGVudElkID0gZ2V0SWQoY29udGVudCk7XG5cbiAgICBpZiAoIWNvbnRlbnRJZCkge1xuICAgICAgY29udGVudElkID0gJ2RhZTMzMmQ3LWQxOTYtNGVhMi04ODhkLWVhYTQyMGM4OWRiYic7IC8vIEZhbGxiYWNrIGNvbnRlbnQgaWQgaWYgbm9uZSBzdXBwbGllZFxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdDb250ZW50SUQ6JywgY29udGVudElkKTtcblxuICAgIC8vIEFtcGxpZW5jZSBEeW5hbWljIGNvbnRlbnQgVXJsXG4gICAgY29uc3QgdXJsID1cbiAgICAgICdodHRwczovL3c1OWE0c3FuYnUzMDFvdDRueXM4cDRxbzkuc3RhZ2luZy5iaWdjb250ZW50LmlvL2NvbnRlbnQvaWQvJyArXG4gICAgICBjb250ZW50SWQgK1xuICAgICAgJz9kZXB0aD1hbGwmZm9ybWF0PWlubGluZWQnO1xuXG4gICAgLy8gc3RhdGljIGxvY2FsIGFwaSBkYXRhICh1c2VkIGR1cmluZyBidWlsZGluZyBjb250ZW50KVxuICAgIC8vIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jhbm5lclRlc3QnO1xuXG4gICAgY29uc29sZS5sb2coJ0NvbnRlbnQgVVJMOicsIHVybCk7XG5cbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QmFubmVyVGVzdChkYXRhKTsgLy8gdXNlIHRoZSBBbXBsaWVuY2UgQ01TIEphdmFTY3JpcHQgU0RLIHRvIG1hbmlwdWxhdGUgdGhlIEpTT04tTEQgaW50byBhIGNvbnRlbnQgdHJlZVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kY19iYW5uZXJUZXN0X3YxfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFubmVyIFRlc3QgUHJldmlldyB8IER5bmFtaWMgQ29udGVudCBQcmV2aWV3PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgTG9hZGluZyBDb250ZW50LCBwbGVhc2Ugd2FpdCAuLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb250YWluZXIgZml4ZWQ+XG4gICAgICAgICAgICA8Qm94IGlkPVwiZml4ZWRXaWR0aFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPEJhbm5lciBiYW5uZXJUZXN0PXtiYW5uZXJUZXN0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyVGVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/bannerTest/index.js\n");

/***/ })

})