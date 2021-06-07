exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 5275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer.js



const Footer = () => /*#__PURE__*/jsx_runtime_.jsx("footer", {
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-dark text-light text-center",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container p-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: " Lucas Eichhorn \xA9 Portfolio"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["2015 - ", new Date().getFullYear()]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "All rights reserved."
      })]
    })
  })
});

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap/Collapse"
var Collapse_ = __webpack_require__(9810);
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Navbar.js








const Navbar = ({
  menu = true
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "navbar navbar-dark bg-dark",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "navbar-brand",
          children: ["Lucas Eichhorn ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("small", {
            children: "Engineer & FullStack Developer"
          })]
        })
      }), menu && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        onClick: () => setOpen(!open),
        "aria-expanded": open,
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Collapse_default()), {
        in: open,
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "navbar-nav mr-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "jobs",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Job experiences"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "skills",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Skills"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "education",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Education"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "certifications",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Certifications"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "learning",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Learning now"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "languages",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Languages"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_.Link, {
              className: "nav-link",
              to: "projects",
              spy: true,
              smooth: true,
              onClick: () => setOpen(!open),
              children: "Projects"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/github",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Github"
              })
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(3825);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Layout.js









const Layout = ({
  children,
  footer = true,
  dark = false,
  menu = true
}) => {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    console.log("cargo");

    const handleRouteChange = url => {
      console.log(url);
      external_nprogress_default().start();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', () => external_nprogress_default().done());
    return () => {
      return router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()({
      'bg-dark': dark
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {
      menu: menu
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "container py-4",
      children: children
    }), footer && /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;