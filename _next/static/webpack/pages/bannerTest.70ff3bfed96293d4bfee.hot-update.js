webpackHotUpdate_N_E("pages/bannerTest",{

/***/ "./pages/bannerTest/index.js":
/*!***********************************!*\
  !*** ./pages/bannerTest/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bannerTest.module.scss */ \"./pages/bannerTest/bannerTest.module.scss\");\n/* harmony import */ var _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/paul/RApp/nextjs/pages/bannerTest/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable no-undef */\n\n\n\n\n\nvar Cardlist = function Cardlist() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      bannerTest = _useState[0],\n      setBannerTest = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1]; // example IDs '69881315-c88e-4e90-a6b4-38fae83f56b7' , 'c61873e2-5f7c-4b1a-a427-ef1ade0fcc4e';\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // TODO: switch this to the visualisation URL when we have it.\n    // const contentId = window.location.search.split('?content=')[1]; // get id from Params\n    // Amplience Dynamic content Url\n    // const url = `https://cdn.c1.amplience.net/cms/content/query?fullBodyObject=true&scope=tree&store=dfs&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/${contentId}%22%7D`;\n    // static local api data (used during building content)\n    var url = 'http://localhost:3000/api/bannerTest';\n    fetch(url).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setBannerTest(window.amp.inlineContent(data)[0]); // use the Amplience CMS JavaScript SDK to manipulate the JSON-LD into a content tree\n\n      setLoading(false);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_bannerTest_v1,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Banner Test Preview | Dynamic Content Preview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n        variant: \"h4\",\n        children: \"Loading Content, please wait ..\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n        container: true,\n        spacing: 1,\n        className: _bannerTest_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.dc_testBanner,\n        direction: \"row\",\n        justify: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n          item: true,\n          xs: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            textAlign: \"center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n              variant: \"h5\",\n              color: \"primary\",\n              children: bannerTest.headline\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              only: ['sm', 'md', 'lg', 'xl'],\n              children: \"Extra Small Screen (0 - 374px)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              only: ['xs', 'md', 'lg', 'xl'],\n              children: \"Small Screen (375px - 767px)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              only: ['xs', 'sm', 'lg', 'xl'],\n              children: \"Medium Screen (768px - 1399px)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              only: ['xs', 'sm', 'md', 'xl'],\n              children: \"Large Screen (1400px - 1919px)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Hidden\"], {\n              only: ['xs', 'sm', 'md', 'lg'],\n              children: \"Large Screen (1920px - upwards)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Cardlist, \"OlcpF383NvHozQhSn9LanHd22EM=\");\n\n_c = Cardlist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cardlist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cardlist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFubmVyVGVzdC9pbmRleC5qcz8wZTYyIl0sIm5hbWVzIjpbIkNhcmRsaXN0IiwidXNlU3RhdGUiLCJiYW5uZXJUZXN0Iiwic2V0QmFubmVyVGVzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ3aW5kb3ciLCJhbXAiLCJpbmxpbmVDb250ZW50Iiwic3R5bGVzIiwiZGNfYmFubmVyVGVzdF92MSIsImRjX3Rlc3RCYW5uZXIiLCJoZWFkbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFZEcsT0FGYztBQUFBLE1BRUxDLFVBRkssa0JBR3JCOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLFFBQU1DLEdBQUcsR0FBRyxzQ0FBWjtBQUVBQyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RULG1CQUFhLENBQUNVLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxhQUFYLENBQXlCSCxJQUF6QixFQUErQixDQUEvQixDQUFELENBQWIsQ0FEYyxDQUNvQzs7QUFDbERQLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMSDtBQU1ELEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLDhEQUFNLENBQUNDLGdCQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFJR2IsT0FBTyxnQkFDTixxRUFBQyxxREFBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE0sZ0JBS047QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUUsQ0FGWDtBQUdFLGlCQUFTLEVBQUVZLDhEQUFNLENBQUNFLGFBSHBCO0FBSUUsaUJBQVMsRUFBQyxLQUpaO0FBS0UsZUFBTyxFQUFDLFFBTFY7QUFNRSxrQkFBVSxFQUFDLFFBTmI7QUFBQSwrQkFRRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxvQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQUssRUFBQyxTQUEvQjtBQUFBLHdCQUNHaEIsVUFBVSxDQUFDaUI7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUscUVBQUMsd0RBQUQ7QUFBUSxrQkFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFPRSxxRUFBQyx3REFBRDtBQUFRLGtCQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVVFLHFFQUFDLHdEQUFEO0FBQVEsa0JBQUksRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGLGVBYUUscUVBQUMsd0RBQUQ7QUFBUSxrQkFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkYsZUFnQkUscUVBQUMsd0RBQUQ7QUFBUSxrQkFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOENELENBcEVEOztHQUFNbkIsUTs7S0FBQUEsUTtBQXNFU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9iYW5uZXJUZXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IEJveCwgSGlkZGVuLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFubmVyVGVzdC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IENhcmRsaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbYmFubmVyVGVzdCwgc2V0QmFubmVyVGVzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAvLyBleGFtcGxlIElEcyAnNjk4ODEzMTUtYzg4ZS00ZTkwLWE2YjQtMzhmYWU4M2Y1NmI3JyAsICdjNjE4NzNlMi01ZjdjLTRiMWEtYTQyNy1lZjFhZGUwZmNjNGUnO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVE9ETzogc3dpdGNoIHRoaXMgdG8gdGhlIHZpc3VhbGlzYXRpb24gVVJMIHdoZW4gd2UgaGF2ZSBpdC5cbiAgICAvLyBjb25zdCBjb250ZW50SWQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc/Y29udGVudD0nKVsxXTsgLy8gZ2V0IGlkIGZyb20gUGFyYW1zXG5cbiAgICAvLyBBbXBsaWVuY2UgRHluYW1pYyBjb250ZW50IFVybFxuICAgIC8vIGNvbnN0IHVybCA9IGBodHRwczovL2Nkbi5jMS5hbXBsaWVuY2UubmV0L2Ntcy9jb250ZW50L3F1ZXJ5P2Z1bGxCb2R5T2JqZWN0PXRydWUmc2NvcGU9dHJlZSZzdG9yZT1kZnMmcXVlcnk9JTdCJTIyc3lzLmlyaSUyMjolMjJodHRwOi8vY29udGVudC5jbXMuYW1wbGllbmNlLmNvbS8ke2NvbnRlbnRJZH0lMjIlN0RgO1xuXG4gICAgLy8gc3RhdGljIGxvY2FsIGFwaSBkYXRhICh1c2VkIGR1cmluZyBidWlsZGluZyBjb250ZW50KVxuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Jhbm5lclRlc3QnO1xuXG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEJhbm5lclRlc3Qod2luZG93LmFtcC5pbmxpbmVDb250ZW50KGRhdGEpWzBdKTsgLy8gdXNlIHRoZSBBbXBsaWVuY2UgQ01TIEphdmFTY3JpcHQgU0RLIHRvIG1hbmlwdWxhdGUgdGhlIEpTT04tTEQgaW50byBhIGNvbnRlbnQgdHJlZVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kY19iYW5uZXJUZXN0X3YxfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmFubmVyIFRlc3QgUHJldmlldyB8IER5bmFtaWMgQ29udGVudCBQcmV2aWV3PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPkxvYWRpbmcgQ29udGVudCwgcGxlYXNlIHdhaXQgLi48L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGNfdGVzdEJhbm5lcn1cbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIHtiYW5uZXJUZXN0LmhlYWRsaW5lfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8SGlkZGVuIG9ubHk9e1snc20nLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgICAgICAgICAgICBFeHRyYSBTbWFsbCBTY3JlZW4gKDAgLSAzNzRweClcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgICAgICA8SGlkZGVuIG9ubHk9e1sneHMnLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgICAgICAgICAgICBTbWFsbCBTY3JlZW4gKDM3NXB4IC0gNzY3cHgpXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICAgICAgICAgICAgTWVkaXVtIFNjcmVlbiAoNzY4cHggLSAxMzk5cHgpXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJywgJ21kJywgJ3hsJ119PlxuICAgICAgICAgICAgICAgICAgTGFyZ2UgU2NyZWVuICgxNDAwcHggLSAxOTE5cHgpXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJ119PlxuICAgICAgICAgICAgICAgICAgTGFyZ2UgU2NyZWVuICgxOTIwcHggLSB1cHdhcmRzKVxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bannerTest/index.js\n");

/***/ })

})