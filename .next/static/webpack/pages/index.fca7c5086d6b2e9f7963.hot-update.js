self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\lucas\\Documents\\lucas1eichhorn.github.io\\components\\Project.js",
    _this = undefined,
    _s = $RefreshSig$();




var Project = function Project(_ref) {
  _s();

  var project = _ref.project,
      qty = _ref.qty,
      index = _ref.index;
  var name = project.name,
      description = project.description,
      subtitle = project.subtitle,
      image = project.image;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var column;

  if (qty % 2 == 0) {
    column = "col-md-4";
  } else {
    column = index % 6 < 2 ? "col-md-6" : "col-md-4";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "".concat(column, " p-2 item"),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card h-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "transparent",
        className: "text-left p-0",
        onClick: function onClick() {
          return setShow(true);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "overflow",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "images/projects/".concat(image),
            alt: name,
            className: "card-img-top"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      show: show,
      onHide: function onHide() {
        return setShow(false);
      },
      size: "lg",
      "aria-labelledby": "example-custom-modal-styling-title",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
          id: "example-custom-modal-styling-title",
          children: [name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)]
  }, index, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Project, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

_c = Project;
/* harmony default export */ __webpack_exports__["default"] = (Project);

var _c;

$RefreshReg$(_c, "Project");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzIl0sIm5hbWVzIjpbIlByb2plY3QiLCJwcm9qZWN0IiwicXR5IiwiaW5kZXgiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsImltYWdlIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLEdBQWlCLFFBQWpCQSxHQUFpQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUFBLE1BQ25DQyxJQURtQyxHQUNJSCxPQURKLENBQ25DRyxJQURtQztBQUFBLE1BQzdCQyxXQUQ2QixHQUNJSixPQURKLENBQzdCSSxXQUQ2QjtBQUFBLE1BQ2hCQyxRQURnQixHQUNJTCxPQURKLENBQ2hCSyxRQURnQjtBQUFBLE1BQ05DLEtBRE0sR0FDSU4sT0FESixDQUNOTSxLQURNOztBQUFBLGtCQUVuQkMsK0NBQVEsQ0FBQyxLQUFELENBRlc7QUFBQSxNQUVwQ0MsSUFGb0M7QUFBQSxNQUU5QkMsT0FGOEI7O0FBSTNDLE1BQUlDLE1BQUo7O0FBQ0EsTUFBSVQsR0FBRyxHQUFHLENBQU4sSUFBVyxDQUFmLEVBQWtCO0FBQ2hCUyxVQUFNLEdBQUcsVUFBVDtBQUNELEdBRkQsTUFFTztBQUVMQSxVQUFNLEdBQUdSLEtBQUssR0FBRyxDQUFSLEdBQVksQ0FBWixHQUFnQixVQUFoQixHQUE2QixVQUF0QztBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxZQUFLUSxNQUFMLGNBQWQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUMsYUFEVjtBQUVFLGlCQUFTLEVBQUMsZUFGWjtBQUdFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUEsU0FIWDtBQUFBLGdDQUtFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFDRSxlQUFHLDRCQUFxQkgsS0FBckIsQ0FETDtBQUVFLGVBQUcsRUFBRUgsSUFGUDtBQUdFLHFCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVlFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBS0U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxzQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFxQkUsOERBQUMsa0RBQUQ7QUFDRSxVQUFJLEVBQUVJLElBRFI7QUFFRSxZQUFNLEVBQUU7QUFBQSxlQUFNQyxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsT0FGVjtBQUdFLFVBQUksRUFBQyxJQUhQO0FBSUUseUJBQWdCLG9DQUpsQjtBQUFBLDhCQU1FLDhEQUFDLHlEQUFEO0FBQWMsbUJBQVcsTUFBekI7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFhLFlBQUUsRUFBQyxvQ0FBaEI7QUFBQSxxQkFDR04sSUFESCxlQUVFO0FBQUEsc0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFZRSw4REFBQyx1REFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQUlEO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkY7QUFBQSxLQUEyQ0YsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBbkREOztHQUFNSCxPOztLQUFBQSxPO0FBb0ROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjYTdjNTA4NmQ2YjJlOWY3OTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBQcm9qZWN0ID0gKHsgcHJvamVjdCwgcXR5LCBpbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgc3VidGl0bGUsIGltYWdlIH0gPSBwcm9qZWN0O1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbGV0IGNvbHVtbjtcclxuICBpZiAocXR5ICUgMiA9PSAwKSB7XHJcbiAgICBjb2x1bW4gPSBcImNvbC1tZC00XCI7XHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBjb2x1bW4gPSBpbmRleCAlIDYgPCAyID8gXCJjb2wtbWQtNlwiIDogXCJjb2wtbWQtNFwiO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbHVtbn0gcC0yIGl0ZW1gfSBrZXk9e2luZGV4fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCBwLTBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2BpbWFnZXMvcHJvamVjdHMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDM+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGg2PntzdWJ0aXRsZX08L2g2PlxyXG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgIG9uSGlkZT17KCkgPT4gc2V0U2hvdyhmYWxzZSl9XHJcbiAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWN1c3RvbS1tb2RhbC1zdHlsaW5nLXRpdGxlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJleGFtcGxlLWN1c3RvbS1tb2RhbC1zdHlsaW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8aDY+e3N1YnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9