/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lucas/Documents/next-simple-portfolio/components/Project.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Project = function Project(_ref) {\n  _s();\n\n  var project = _ref.project,\n      qty = _ref.qty,\n      index = _ref.index;\n  var name = project.name,\n      description = project.description,\n      subtitle = project.subtitle,\n      image = project.image;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var column;\n\n  if (qty % 2 == 0) {\n    column = \"col-md-4\";\n  } else {\n    column = index % 6 < 2 ? \"col-md-6\" : \"col-md-4\";\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"\".concat(column, \" p-2 item\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card h-100 project-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        variant: \"transparent\",\n        className: \"text-left p-0\",\n        onClick: function onClick() {\n          return setShow(!show);\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"card-body\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"overflow\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"images/projects/\".concat(image),\n                alt: name,\n                className: \"card-img-top grow\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n              children: subtitle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"project-description \".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                \"h-auto\": show\n              })),\n              children: description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"view-more w-100 text-center mt-2  \".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                \"d-none\": show\n              })),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"fa fa-chevron-down\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, index, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Project, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzPzRiY2YiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb2plY3QiLCJxdHkiLCJpbmRleCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN1YnRpdGxlIiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiY29sdW1uIiwiY2xhc3NOYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLE9BQTBCLFFBQTFCQSxPQUEwQjtBQUFBLE1BQWpCQyxHQUFpQixRQUFqQkEsR0FBaUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFBQSxNQUNuQ0MsSUFEbUMsR0FDSUgsT0FESixDQUNuQ0csSUFEbUM7QUFBQSxNQUM3QkMsV0FENkIsR0FDSUosT0FESixDQUM3QkksV0FENkI7QUFBQSxNQUNoQkMsUUFEZ0IsR0FDSUwsT0FESixDQUNoQkssUUFEZ0I7QUFBQSxNQUNOQyxLQURNLEdBQ0lOLE9BREosQ0FDTk0sS0FETTs7QUFBQSxrQkFFbkJDLCtDQUFRLENBQUMsS0FBRCxDQUZXO0FBQUEsTUFFcENDLElBRm9DO0FBQUEsTUFFOUJDLE9BRjhCOztBQUkzQyxNQUFJQyxNQUFKOztBQUNBLE1BQUlULEdBQUcsR0FBRyxDQUFOLElBQVcsQ0FBZixFQUFrQjtBQUNoQlMsVUFBTSxHQUFHLFVBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEEsVUFBTSxHQUFHUixLQUFLLEdBQUcsQ0FBUixHQUFZLENBQVosR0FBZ0IsVUFBaEIsR0FBNkIsVUFBdEM7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsWUFBS1EsTUFBTCxjQUFkO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGVBQU8sRUFBQyxhQURWO0FBRUUsaUJBQVMsRUFBQyxlQUZaO0FBR0UsZUFBTyxFQUFFO0FBQUEsaUJBQU1ELE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxTQUhYO0FBQUEsK0JBS0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0U7QUFDRSxtQkFBRyw0QkFBcUJGLEtBQXJCLENBREw7QUFFRSxtQkFBRyxFQUFFSCxJQUZQO0FBR0UseUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSx3QkFBS0U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBSUU7QUFDRSx1QkFBUyxnQ0FBeUJNLGlEQUFVLENBQUM7QUFDM0MsMEJBQVVIO0FBRGlDLGVBQUQsQ0FBbkMsQ0FEWDtBQUFBLHdCQUtHSjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFXRTtBQUNFLHVCQUFTLDhDQUF1Q08saURBQVUsQ0FBQztBQUN6RCwwQkFBVUg7QUFEK0MsZUFBRCxDQUFqRCxDQURYO0FBQUEscUNBS0U7QUFBRyx5QkFBUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBQTJDTixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0FwREQ7O0dBQU1ILE87O0tBQUFBLE87QUFxRE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmNvbnN0IFByb2plY3QgPSAoeyBwcm9qZWN0LCBxdHksIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgc3VidGl0bGUsIGltYWdlIH0gPSBwcm9qZWN0O1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IGNvbHVtbjtcbiAgaWYgKHF0eSAlIDIgPT0gMCkge1xuICAgIGNvbHVtbiA9IFwiY29sLW1kLTRcIjtcbiAgfSBlbHNlIHtcbiAgICBjb2x1bW4gPSBpbmRleCAlIDYgPCAyID8gXCJjb2wtbWQtNlwiIDogXCJjb2wtbWQtNFwiO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbHVtbn0gcC0yIGl0ZW1gfSBrZXk9e2luZGV4fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBoLTEwMCBwcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcC0wXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtgaW1hZ2VzL3Byb2plY3RzLyR7aW1hZ2V9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBncm93XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxoNj57c3VidGl0bGV9PC9oNj5cblxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvamVjdC1kZXNjcmlwdGlvbiAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgXCJoLWF1dG9cIjogc2hvdyxcbiAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZpZXctbW9yZSB3LTEwMCB0ZXh0LWNlbnRlciBtdC0yICAke2NsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgXCJkLW5vbmVcIjogc2hvdyxcbiAgICAgICAgICAgICAgICB9KX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtY2hldnJvbi1kb3duYH0+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Project.js\n");

/***/ })

});