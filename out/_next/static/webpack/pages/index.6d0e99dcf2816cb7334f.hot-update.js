self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "learning": function() { return /* binding */ learning; },
/* harmony export */   "education": function() { return /* binding */ education; },
/* harmony export */   "certifications": function() { return /* binding */ certifications; },
/* harmony export */   "languajes": function() { return /* binding */ languajes; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "projects": function() { return /* binding */ projects; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: 'PHP',
  percentage: '80',
  subskills: ['Xinergia Adhoc Framework', 'Laravel', 'Slim Framework']
}, {
  skill: 'HTML & CSS',
  percentage: '90',
  subskills: ['Bootstrap 3 & 4', 'Sass/Less preprocessors']
}, {
  skill: 'Javascript',
  percentage: '80',
  subskills: ['jQuery', 'ES5 / ES6', 'Typescript', 'React', 'Angular']
}, {
  skill: 'Node JS',
  percentage: '70',
  subskills: ['Express', 'Sails']
}, {
  skill: 'React',
  percentage: '70'
}, {
  skill: 'Angular',
  percentage: '40'
}, {
  skill: 'Ionic 3',
  percentage: '40'
}, {
  skill: 'API REST & GraphQL',
  percentage: '80'
}, {
  skill: 'QA: Testing & CI/CD',
  percentage: '70',
  subskills: ['JEST', 'Enzyme', 'Cucumber', 'Selenium', 'Robot Framework', 'WebDriver IO']
}, {
  skill: 'Databases',
  percentage: '80',
  subskills: ['MySQL/MariaDB', 'PostgreSQL', "Mongo DB", 'Oracle']
}];
var learning = [{
  skill: 'Data Science & Dig Data',
  percentage: '20'
}, {
  skill: 'Machine Learning',
  percentage: '20'
}, {
  skill: 'Pyhton',
  percentage: '30'
}];
var education = [{
  title: 'Master in Big Data Science',
  subtitle: 'Universidad de Navarra (Madrid)',
  period: '2021 - now'
}, {
  title: 'Information system engineer',
  subtitle: 'National Technological University (Argentina)',
  period: '2012 - 2019'
}, {
  title: 'Scrum Grand Master - Project management',
  subtitle: 'e-Learning center at UTN FRBA',
  period: '2019'
}];
var certifications = [{
  title: 'Data Engineering Bootcamp',
  subtitle: 'Datademia.es',
  period: '2021',
  url: ''
}, {
  title: 'Machine Learning & Data Science on Python',
  subtitle: 'Udemy',
  period: 'Apr 2021',
  url: 'https://www.udemy.com/certificate/UC-c4366ef1-6cf1-48eb-bd02-d6571f86e114/'
}, {
  title: 'AWS Cloud Practitioner Essentials',
  subtitle: 'Amazon Web Services (AWS)',
  period: 'May 2021'
}, {
  title: 'GitLab Certified Associate',
  subtitle: 'GitLab',
  period: 'May 2021'
}, {
  title: 'React & Redux',
  subtitle: 'Udemy',
  period: 'Apr 2019'
}, {
  title: 'Ionic 3: Hybrid mobiles apps',
  subtitle: 'Udemy',
  period: 'Jan 2019'
}];
var languajes = [{
  name: 'Spanish',
  level: 'Native'
}, {
  name: 'English',
  level: 'B1 Intermediate (Studies in course: FCE)'
}];
var experiences = [{
  company: "DoctorPlus SAS",
  from: "May 2020",
  role: "CTO & Fullstack Developer",
  description: "DoctorPlus is French startup that provides an e-health solution with well-being programs. Through video consultations it offers doctors and patients a platform to achieve remote medical consultations.\n        This project started a few years ago, while I was working at the Xinergia consulting firm developing the application for Argentina, and some years later I got involved again to develop the product in France and even in Morocco in a future. \n        I have a huge variety of tasks here. In my role as a lead full stack developer, I work from analysis with the product owner to software implementations and even AWS Cloud management. \n        ",
  skills: "PHP, SQL, HTML, CSS, Javascript, jQuery, AWS Cloud Admin, API REST, Git"
}, {
  company: "MercadoLibre",
  from: "Ene 2020",
  to: "May 2020",
  role: "Front end & middle end developer",
  description: "MercadoLibre is the #1 marketplace in Latin America and one of the top 10 most visited e-commerce websites.\n        I was part of the team that develops tools for sellers, more specifically the offers section that allows user set promotions in their products.\n        Here I assumed the position of front/middle end developer. I used to work with JavaScript technologies such as React (server side rendering framework) or Node JS (express based framework), and additionally adopting agile methodologies like Scrum with my team.",
  skills: "React, Node JS, Git, GraphQL, API REST, JEST, Enzyme, WebDriver IO"
}, {
  company: "NEORIS",
  from: "Jun 2019",
  to: "Ene 2020",
  role: "Fullstack Developer",
  description: "I worked in the Argentinian subsidiary of this international software factory, specifically in the area of financial services for the private banking section. \n        Firstly my role was as fullstack developer, and then I was trained as a Scrum Master (National Technological University), to coordinate the work team that carried out projects with Angular and Java technologies.",
  skills: "Angular+React, HTML, CSS, Scrum Master, Git, API REST, Cucumber, Selenium, Robot Framework"
}, {
  company: "Xinergia",
  from: "Nov 2015",
  to: "Jun 2019",
  role: "Fullstack Developer",
  description: "At the beginning of my professional career while I was at univeristy, I started working in this company and forming my profile as a fullstack web developer.\n        Along many years I was in charge of analyze, design and implement a plenty of web systems, mobile applications, creation of e-commerce and advertising websites for different clients. \n        This tasks allowed customers to improve their internal proceses, management and brand positioning.",
  skills: "PHP, HTML, CSS, Javascript, jQuery, ionic 3,SQL (MySQL/Oracle/Postgre), Database Admin, API REST, SVN"
}];
var projects = [{
  name: "DoctorPlus",
  subtitle: "e-health & well-being",
  description: "This project is part of a French startup that provides an e-health solution with well-being programs. It offers doctors and patients a platform to achieve remote medical consultations using the power of videocalls over the WebRTC technologies.\n\n        WebRTC (Web real-time communications) is a open source technology that allows websites to capture audio and video, as well as exchange arbitrary data between browsers without the need for an intermediary.\n        \n        This app is fully integrated with third party services such as Stripe for payments, SendGrid for mailing, and even AWS SNS (Simple Notification Services) to notify events between users.\n        ",
  image: "doctorplus.jpg"
}, {
  name: "Serendipia Deco",
  subtitle: "e-commerce",
  description: "This project is an ecommerce for a home decoration store where customers can access an online store to browse through, and place orders for products or services via their own devices.\n        \n        The Covid-19 pandemic has increased the need for eCommerce with new consumer habits and has led this business to implement online commerce.\n        \n        Is a solution implemented with the fully customizable and open source Woocommerce platform built for WordPress. \n        ",
  image: "serendipia.jpg"
}, {
  name: "Cristian Brunet",
  subtitle: "Wedding photographer",
  description: "This was a project developed for an enthusiastic wedding photographer who wants to share the incredible moments captured with his camera on his own website.\n        \n        This website has a set of tools and functions that allow the best management option for a professional photographer.\n        \n        Developed with Laravel, one of the most popular MVC frameworks within the PHP ecosystem. Laravel is a flexible framework that allows to develop much faster and without so many demands of good practices at the beginning.\n        ",
  image: "cristian-brunet1.jpg"
}, {
  name: "KeyWi",
  subtitle: "Smart lock with Arduino ",
  description: "KeyWi is an IoT solution that consists of an intelligent lock with a system embedded in a Raspeberry Pi powered by mobile devices with NFC service.  This was my final degree project at the university.\n\n        The project seeks to provide convenience to the user, with the capacity for connectivity and data processing in IoT devices and to improve security aspects in electronic locks.\n        \n        The project has a mobile application that works as a key transmitting by NFC a unique code that is interpreted by an intelligent lock (Raspberry Pi inside) that allows / denies the opening of a door\n        ",
  image: "keywi2.jpg"
}, {
  name: "Taxi Tracker",
  subtitle: "Starter Ionic project",
  description: "It is probably not one of the bigges projects that I have done, but it represents all the small apps developed while learning mobile application development with Ionic.\n        \n        This app was part of an Udemy course. It consists on a tracking system for taxi company using mobile phones using GPS positioning and real time events on Google Firebase.\n        ",
  image: "taxi-app.jpg"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJzdWJza2lsbHMiLCJsZWFybmluZyIsImVkdWNhdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJwZXJpb2QiLCJjZXJ0aWZpY2F0aW9ucyIsInVybCIsImxhbmd1YWplcyIsIm5hbWUiLCJsZXZlbCIsImV4cGVyaWVuY2VzIiwiY29tcGFueSIsImZyb20iLCJyb2xlIiwiZGVzY3JpcHRpb24iLCJ0byIsInByb2plY3RzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ2xCO0FBQ0lDLE9BQUssRUFBRSxLQURYO0FBRUlDLFlBQVUsRUFBRSxJQUZoQjtBQUdJQyxXQUFTLEVBQUUsQ0FBQywwQkFBRCxFQUE2QixTQUE3QixFQUF3QyxnQkFBeEM7QUFIZixDQURrQixFQU1sQjtBQUNJRixPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUUsSUFGaEI7QUFHSUMsV0FBUyxFQUFFLENBQUMsaUJBQUQsRUFBb0IseUJBQXBCO0FBSGYsQ0FOa0IsRUFZbEI7QUFDSUYsT0FBSyxFQUFFLFlBRFg7QUFFSUMsWUFBVSxFQUFFLElBRmhCO0FBR0lDLFdBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLFlBQXhCLEVBQXNDLE9BQXRDLEVBQStDLFNBQS9DO0FBSGYsQ0Faa0IsRUFrQmxCO0FBQ0lGLE9BQUssRUFBRSxTQURYO0FBRUlDLFlBQVUsRUFBRSxJQUZoQjtBQUdJQyxXQUFTLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWjtBQUhmLENBbEJrQixFQXVCbEI7QUFDSUYsT0FBSyxFQUFFLE9BRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBdkJrQixFQTJCbEI7QUFDSUQsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBM0JrQixFQStCbEI7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RUFBRSxRQURiO0FBRUlDLE1BQUksRUFBRSxVQUZWO0FBR0lHLElBQUUsRUFBRSxVQUhSO0FBSUlGLE1BQUksRUFBRSxxQkFKVjtBQUtJQyxhQUFXLGdZQUxmO0FBT0lsQixRQUFNLEVBQUU7QUFQWixDQXJCdUIsRUE4QnZCO0FBQ0llLFNBQU8sRUFBRSxVQURiO0FBRUlDLE1BQUksRUFBRSxVQUZWO0FBR0lHLElBQUUsRUFBRSxVQUhSO0FBSUlGLE1BQUksRUFBRSxxQkFKVjtBQUtJQyxhQUFXLDZjQUxmO0FBUUlsQixRQUFNLEVBQUU7QUFSWixDQTlCdUIsQ0FBcEI7QUEyQ0EsSUFBTW9CLFFBQVEsR0FBRyxDQUNwQjtBQUNJUixNQUFJLEVBQUUsWUFEVjtBQUVJTCxVQUFRLEVBQUUsdUJBRmQ7QUFHSVcsYUFBVyxzcUJBSGY7QUFTSUcsT0FBSyxFQUFFO0FBVFgsQ0FEb0IsRUFZcEI7QUFDSVQsTUFBSSxFQUFFLGlCQURWO0FBRUlMLFVBQVEsRUFBRSxZQUZkO0FBR0lXLGFBQVcsd2VBSGY7QUFTSUcsT0FBSyxFQUFFO0FBVFgsQ0Fab0IsRUF1QnBCO0FBQ0lULE1BQUksRUFBRSxpQkFEVjtBQUVJTCxVQUFRLEVBQUUsc0JBRmQ7QUFHSVcsYUFBVyxpaUJBSGY7QUFTSUcsT0FBSyxFQUFFO0FBVFgsQ0F2Qm9CLEVBa0NwQjtBQUNJVCxNQUFJLEVBQUUsT0FEVjtBQUVJTCxVQUFRLEVBQUUsMEJBRmQ7QUFHSVcsYUFBVyw0bUJBSGY7QUFTSUcsT0FBSyxFQUFFO0FBVFgsQ0FsQ29CLEVBNENqQjtBQUNDVCxNQUFJLEVBQUUsY0FEUDtBQUVDTCxVQUFRLEVBQUUsdUJBRlg7QUFHQ1csYUFBVyxvWEFIWjtBQU9DRyxPQUFLLEVBQUU7QUFQUixDQTVDaUIsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQwZTk5ZGNmMjgxNmNiNzMzNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdQSFAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICc4MCcsXHJcbiAgICAgICAgc3Vic2tpbGxzOiBbJ1hpbmVyZ2lhIEFkaG9jIEZyYW1ld29yaycsICdMYXJhdmVsJywgJ1NsaW0gRnJhbWV3b3JrJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdIVE1MICYgQ1NTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnOTAnLFxyXG4gICAgICAgIHN1YnNraWxsczogWydCb290c3RyYXAgMyAmIDQnLCAnU2Fzcy9MZXNzIHByZXByb2Nlc3NvcnMnXVxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnODAnLFxyXG4gICAgICAgIHN1YnNraWxsczogWydqUXVlcnknLCAnRVM1IC8gRVM2JywgJ1R5cGVzY3JpcHQnLCAnUmVhY3QnLCAnQW5ndWxhciddXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGUgSlMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICc3MCcsXHJcbiAgICAgICAgc3Vic2tpbGxzOiBbJ0V4cHJlc3MnLCAnU2FpbHMnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnNzAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0FuZ3VsYXInLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICc0MCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSW9uaWMgMycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogJzQwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdBUEkgUkVTVCAmIEdyYXBoUUwnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICc4MCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUUE6IFRlc3RpbmcgJiBDSS9DRCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogJzcwJyxcclxuICAgICAgICBzdWJza2lsbHM6IFsnSkVTVCcsICdFbnp5bWUnLCAnQ3VjdW1iZXInLCAnU2VsZW5pdW0nLCAnUm9ib3QgRnJhbWV3b3JrJywgJ1dlYkRyaXZlciBJTyddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnRGF0YWJhc2VzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnODAnLFxyXG4gICAgICAgIHN1YnNraWxsczogWydNeVNRTC9NYXJpYURCJywgJ1Bvc3RncmVTUUwnLCBcIk1vbmdvIERCXCIsICdPcmFjbGUnXVxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGxlYXJuaW5nID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnRGF0YSBTY2llbmNlICYgRGlnIERhdGEnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICcyMCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnMjAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUHlodG9uJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAnMzAnLFxyXG5cclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBlZHVjYXRpb24gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdNYXN0ZXIgaW4gQmlnIERhdGEgU2NpZW5jZScsXHJcbiAgICAgICAgc3VidGl0bGU6ICdVbml2ZXJzaWRhZCBkZSBOYXZhcnJhIChNYWRyaWQpJyxcclxuICAgICAgICBwZXJpb2Q6ICcyMDIxIC0gbm93JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbmZvcm1hdGlvbiBzeXN0ZW0gZW5naW5lZXInLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnTmF0aW9uYWwgVGVjaG5vbG9naWNhbCBVbml2ZXJzaXR5IChBcmdlbnRpbmEpJyxcclxuICAgICAgICBwZXJpb2Q6ICcyMDEyIC0gMjAxOScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnU2NydW0gR3JhbmQgTWFzdGVyIC0gUHJvamVjdCBtYW5hZ2VtZW50JyxcclxuICAgICAgICBzdWJ0aXRsZTogJ2UtTGVhcm5pbmcgY2VudGVyIGF0IFVUTiBGUkJBJyxcclxuICAgICAgICBwZXJpb2Q6ICcyMDE5JyxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBjZXJ0aWZpY2F0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0RhdGEgRW5naW5lZXJpbmcgQm9vdGNhbXAnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnRGF0YWRlbWlhLmVzJyxcclxuICAgICAgICBwZXJpb2Q6ICcyMDIxJyxcclxuICAgICAgICB1cmw6ICcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnTWFjaGluZSBMZWFybmluZyAmIERhdGEgU2NpZW5jZSBvbiBQeXRob24nLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnVWRlbXknLFxyXG4gICAgICAgIHBlcmlvZDogJ0FwciAyMDIxJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy51ZGVteS5jb20vY2VydGlmaWNhdGUvVUMtYzQzNjZlZjEtNmNmMS00OGViLWJkMDItZDY1NzFmODZlMTE0LydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdBV1MgQ2xvdWQgUHJhY3RpdGlvbmVyIEVzc2VudGlhbHMnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnQW1hem9uIFdlYiBTZXJ2aWNlcyAoQVdTKScsXHJcbiAgICAgICAgcGVyaW9kOiAnTWF5IDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dpdExhYiBDZXJ0aWZpZWQgQXNzb2NpYXRlJyxcclxuICAgICAgICBzdWJ0aXRsZTogJ0dpdExhYicsXHJcbiAgICAgICAgcGVyaW9kOiAnTWF5IDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1JlYWN0ICYgUmVkdXgnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAnVWRlbXknLFxyXG4gICAgICAgIHBlcmlvZDogJ0FwciAyMDE5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJb25pYyAzOiBIeWJyaWQgbW9iaWxlcyBhcHBzJyxcclxuICAgICAgICBzdWJ0aXRsZTogJ1VkZW15JyxcclxuICAgICAgICBwZXJpb2Q6ICdKYW4gMjAxOScsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ3VhamVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTcGFuaXNoJyxcclxuICAgICAgICBsZXZlbDogJ05hdGl2ZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgIGxldmVsOiAnQjEgSW50ZXJtZWRpYXRlIChTdHVkaWVzIGluIGNvdXJzZTogRkNFKSdcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBjb21wYW55OiBcIkRvY3RvclBsdXMgU0FTXCIsXHJcbiAgICAgICAgZnJvbTogXCJNYXkgMjAyMFwiLFxyXG4gICAgICAgIHJvbGU6IFwiQ1RPICYgRnVsbHN0YWNrIERldmVsb3BlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgRG9jdG9yUGx1cyBpcyBGcmVuY2ggc3RhcnR1cCB0aGF0IHByb3ZpZGVzIGFuIGUtaGVhbHRoIHNvbHV0aW9uIHdpdGggd2VsbC1iZWluZyBwcm9ncmFtcy4gVGhyb3VnaCB2aWRlbyBjb25zdWx0YXRpb25zIGl0IG9mZmVycyBkb2N0b3JzIGFuZCBwYXRpZW50cyBhIHBsYXRmb3JtIHRvIGFjaGlldmUgcmVtb3RlIG1lZGljYWwgY29uc3VsdGF0aW9ucy5cclxuICAgICAgICBUaGlzIHByb2plY3Qgc3RhcnRlZCBhIGZldyB5ZWFycyBhZ28sIHdoaWxlIEkgd2FzIHdvcmtpbmcgYXQgdGhlIFhpbmVyZ2lhIGNvbnN1bHRpbmcgZmlybSBkZXZlbG9waW5nIHRoZSBhcHBsaWNhdGlvbiBmb3IgQXJnZW50aW5hLCBhbmQgc29tZSB5ZWFycyBsYXRlciBJIGdvdCBpbnZvbHZlZCBhZ2FpbiB0byBkZXZlbG9wIHRoZSBwcm9kdWN0IGluIEZyYW5jZSBhbmQgZXZlbiBpbiBNb3JvY2NvIGluIGEgZnV0dXJlLiBcclxuICAgICAgICBJIGhhdmUgYSBodWdlIHZhcmlldHkgb2YgdGFza3MgaGVyZS4gSW4gbXkgcm9sZSBhcyBhIGxlYWQgZnVsbCBzdGFjayBkZXZlbG9wZXIsIEkgd29yayBmcm9tIGFuYWx5c2lzIHdpdGggdGhlIHByb2R1Y3Qgb3duZXIgdG8gc29mdHdhcmUgaW1wbGVtZW50YXRpb25zIGFuZCBldmVuIEFXUyBDbG91ZCBtYW5hZ2VtZW50LiBcclxuICAgICAgICBgLFxyXG4gICAgICAgIHNraWxsczogXCJQSFAsIFNRTCwgSFRNTCwgQ1NTLCBKYXZhc2NyaXB0LCBqUXVlcnksIEFXUyBDbG91ZCBBZG1pbiwgQVBJIFJFU1QsIEdpdFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNvbXBhbnk6IFwiTWVyY2Fkb0xpYnJlXCIsXHJcbiAgICAgICAgZnJvbTogXCJFbmUgMjAyMFwiLFxyXG4gICAgICAgIHRvOiBcIk1heSAyMDIwXCIsXHJcbiAgICAgICAgcm9sZTogXCJGcm9udCBlbmQgJiBtaWRkbGUgZW5kIGRldmVsb3BlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgTWVyY2Fkb0xpYnJlIGlzIHRoZSAjMSBtYXJrZXRwbGFjZSBpbiBMYXRpbiBBbWVyaWNhIGFuZCBvbmUgb2YgdGhlIHRvcCAxMCBtb3N0IHZpc2l0ZWQgZS1jb21tZXJjZSB3ZWJzaXRlcy5cclxuICAgICAgICBJIHdhcyBwYXJ0IG9mIHRoZSB0ZWFtIHRoYXQgZGV2ZWxvcHMgdG9vbHMgZm9yIHNlbGxlcnMsIG1vcmUgc3BlY2lmaWNhbGx5IHRoZSBvZmZlcnMgc2VjdGlvbiB0aGF0IGFsbG93cyB1c2VyIHNldCBwcm9tb3Rpb25zIGluIHRoZWlyIHByb2R1Y3RzLlxyXG4gICAgICAgIEhlcmUgSSBhc3N1bWVkIHRoZSBwb3NpdGlvbiBvZiBmcm9udC9taWRkbGUgZW5kIGRldmVsb3Blci4gSSB1c2VkIHRvIHdvcmsgd2l0aCBKYXZhU2NyaXB0IHRlY2hub2xvZ2llcyBzdWNoIGFzIFJlYWN0IChzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZnJhbWV3b3JrKSBvciBOb2RlIEpTIChleHByZXNzIGJhc2VkIGZyYW1ld29yayksIGFuZCBhZGRpdGlvbmFsbHkgYWRvcHRpbmcgYWdpbGUgbWV0aG9kb2xvZ2llcyBsaWtlIFNjcnVtIHdpdGggbXkgdGVhbS5gLFxyXG4gICAgICAgIHNraWxsczogXCJSZWFjdCwgTm9kZSBKUywgR2l0LCBHcmFwaFFMLCBBUEkgUkVTVCwgSkVTVCwgRW56eW1lLCBXZWJEcml2ZXIgSU9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBjb21wYW55OiBcIk5FT1JJU1wiLFxyXG4gICAgICAgIGZyb206IFwiSnVuIDIwMTlcIixcclxuICAgICAgICB0bzogXCJFbmUgMjAyMFwiLFxyXG4gICAgICAgIHJvbGU6IFwiRnVsbHN0YWNrIERldmVsb3BlclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgSSB3b3JrZWQgaW4gdGhlIEFyZ2VudGluaWFuIHN1YnNpZGlhcnkgb2YgdGhpcyBpbnRlcm5hdGlvbmFsIHNvZnR3YXJlIGZhY3RvcnksIHNwZWNpZmljYWxseSBpbiB0aGUgYXJlYSBvZiBmaW5hbmNpYWwgc2VydmljZXMgZm9yIHRoZSBwcml2YXRlIGJhbmtpbmcgc2VjdGlvbi4gXHJcbiAgICAgICAgRmlyc3RseSBteSByb2xlIHdhcyBhcyBmdWxsc3RhY2sgZGV2ZWxvcGVyLCBhbmQgdGhlbiBJIHdhcyB0cmFpbmVkIGFzIGEgU2NydW0gTWFzdGVyIChOYXRpb25hbCBUZWNobm9sb2dpY2FsIFVuaXZlcnNpdHkpLCB0byBjb29yZGluYXRlIHRoZSB3b3JrIHRlYW0gdGhhdCBjYXJyaWVkIG91dCBwcm9qZWN0cyB3aXRoIEFuZ3VsYXIgYW5kIEphdmEgdGVjaG5vbG9naWVzLmAsXHJcbiAgICAgICAgc2tpbGxzOiBcIkFuZ3VsYXIrUmVhY3QsIEhUTUwsIENTUywgU2NydW0gTWFzdGVyLCBHaXQsIEFQSSBSRVNULCBDdWN1bWJlciwgU2VsZW5pdW0sIFJvYm90IEZyYW1ld29ya1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGNvbXBhbnk6IFwiWGluZXJnaWFcIixcclxuICAgICAgICBmcm9tOiBcIk5vdiAyMDE1XCIsXHJcbiAgICAgICAgdG86IFwiSnVuIDIwMTlcIixcclxuICAgICAgICByb2xlOiBcIkZ1bGxzdGFjayBEZXZlbG9wZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEF0IHRoZSBiZWdpbm5pbmcgb2YgbXkgcHJvZmVzc2lvbmFsIGNhcmVlciB3aGlsZSBJIHdhcyBhdCB1bml2ZXJpc3R5LCBJIHN0YXJ0ZWQgd29ya2luZyBpbiB0aGlzIGNvbXBhbnkgYW5kIGZvcm1pbmcgbXkgcHJvZmlsZSBhcyBhIGZ1bGxzdGFjayB3ZWIgZGV2ZWxvcGVyLlxyXG4gICAgICAgIEFsb25nIG1hbnkgeWVhcnMgSSB3YXMgaW4gY2hhcmdlIG9mIGFuYWx5emUsIGRlc2lnbiBhbmQgaW1wbGVtZW50IGEgcGxlbnR5IG9mIHdlYiBzeXN0ZW1zLCBtb2JpbGUgYXBwbGljYXRpb25zLCBjcmVhdGlvbiBvZiBlLWNvbW1lcmNlIGFuZCBhZHZlcnRpc2luZyB3ZWJzaXRlcyBmb3IgZGlmZmVyZW50IGNsaWVudHMuIFxyXG4gICAgICAgIFRoaXMgdGFza3MgYWxsb3dlZCBjdXN0b21lcnMgdG8gaW1wcm92ZSB0aGVpciBpbnRlcm5hbCBwcm9jZXNlcywgbWFuYWdlbWVudCBhbmQgYnJhbmQgcG9zaXRpb25pbmcuYCxcclxuICAgICAgICBza2lsbHM6IFwiUEhQLCBIVE1MLCBDU1MsIEphdmFzY3JpcHQsIGpRdWVyeSwgaW9uaWMgMyxTUUwgKE15U1FML09yYWNsZS9Qb3N0Z3JlKSwgRGF0YWJhc2UgQWRtaW4sIEFQSSBSRVNULCBTVk5cIlxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRvY3RvclBsdXNcIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJlLWhlYWx0aCAmIHdlbGwtYmVpbmdcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFRoaXMgcHJvamVjdCBpcyBwYXJ0IG9mIGEgRnJlbmNoIHN0YXJ0dXAgdGhhdCBwcm92aWRlcyBhbiBlLWhlYWx0aCBzb2x1dGlvbiB3aXRoIHdlbGwtYmVpbmcgcHJvZ3JhbXMuIEl0IG9mZmVycyBkb2N0b3JzIGFuZCBwYXRpZW50cyBhIHBsYXRmb3JtIHRvIGFjaGlldmUgcmVtb3RlIG1lZGljYWwgY29uc3VsdGF0aW9ucyB1c2luZyB0aGUgcG93ZXIgb2YgdmlkZW9jYWxscyBvdmVyIHRoZSBXZWJSVEMgdGVjaG5vbG9naWVzLlxyXG5cclxuICAgICAgICBXZWJSVEMgKFdlYiByZWFsLXRpbWUgY29tbXVuaWNhdGlvbnMpIGlzIGEgb3BlbiBzb3VyY2UgdGVjaG5vbG9neSB0aGF0IGFsbG93cyB3ZWJzaXRlcyB0byBjYXB0dXJlIGF1ZGlvIGFuZCB2aWRlbywgYXMgd2VsbCBhcyBleGNoYW5nZSBhcmJpdHJhcnkgZGF0YSBiZXR3ZWVuIGJyb3dzZXJzIHdpdGhvdXQgdGhlIG5lZWQgZm9yIGFuIGludGVybWVkaWFyeS5cclxuICAgICAgICBcclxuICAgICAgICBUaGlzIGFwcCBpcyBmdWxseSBpbnRlZ3JhdGVkIHdpdGggdGhpcmQgcGFydHkgc2VydmljZXMgc3VjaCBhcyBTdHJpcGUgZm9yIHBheW1lbnRzLCBTZW5kR3JpZCBmb3IgbWFpbGluZywgYW5kIGV2ZW4gQVdTIFNOUyAoU2ltcGxlIE5vdGlmaWNhdGlvbiBTZXJ2aWNlcykgdG8gbm90aWZ5IGV2ZW50cyBiZXR3ZWVuIHVzZXJzLlxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgaW1hZ2U6IFwiZG9jdG9ycGx1cy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNlcmVuZGlwaWEgRGVjb1wiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcImUtY29tbWVyY2VcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFRoaXMgcHJvamVjdCBpcyBhbiBlY29tbWVyY2UgZm9yIGEgaG9tZSBkZWNvcmF0aW9uIHN0b3JlIHdoZXJlIGN1c3RvbWVycyBjYW4gYWNjZXNzIGFuIG9ubGluZSBzdG9yZSB0byBicm93c2UgdGhyb3VnaCwgYW5kIHBsYWNlIG9yZGVycyBmb3IgcHJvZHVjdHMgb3Igc2VydmljZXMgdmlhIHRoZWlyIG93biBkZXZpY2VzLlxyXG4gICAgICAgIFxyXG4gICAgICAgIFRoZSBDb3ZpZC0xOSBwYW5kZW1pYyBoYXMgaW5jcmVhc2VkIHRoZSBuZWVkIGZvciBlQ29tbWVyY2Ugd2l0aCBuZXcgY29uc3VtZXIgaGFiaXRzIGFuZCBoYXMgbGVkIHRoaXMgYnVzaW5lc3MgdG8gaW1wbGVtZW50IG9ubGluZSBjb21tZXJjZS5cclxuICAgICAgICBcclxuICAgICAgICBJcyBhIHNvbHV0aW9uIGltcGxlbWVudGVkIHdpdGggdGhlIGZ1bGx5IGN1c3RvbWl6YWJsZSBhbmQgb3BlbiBzb3VyY2UgV29vY29tbWVyY2UgcGxhdGZvcm0gYnVpbHQgZm9yIFdvcmRQcmVzcy4gXHJcbiAgICAgICAgYCxcclxuICAgICAgICBpbWFnZTogXCJzZXJlbmRpcGlhLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3Jpc3RpYW4gQnJ1bmV0XCIsXHJcbiAgICAgICAgc3VidGl0bGU6IFwiV2VkZGluZyBwaG90b2dyYXBoZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFRoaXMgd2FzIGEgcHJvamVjdCBkZXZlbG9wZWQgZm9yIGFuIGVudGh1c2lhc3RpYyB3ZWRkaW5nIHBob3RvZ3JhcGhlciB3aG8gd2FudHMgdG8gc2hhcmUgdGhlIGluY3JlZGlibGUgbW9tZW50cyBjYXB0dXJlZCB3aXRoIGhpcyBjYW1lcmEgb24gaGlzIG93biB3ZWJzaXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIFRoaXMgd2Vic2l0ZSBoYXMgYSBzZXQgb2YgdG9vbHMgYW5kIGZ1bmN0aW9ucyB0aGF0IGFsbG93IHRoZSBiZXN0IG1hbmFnZW1lbnQgb3B0aW9uIGZvciBhIHByb2Zlc3Npb25hbCBwaG90b2dyYXBoZXIuXHJcbiAgICAgICAgXHJcbiAgICAgICAgRGV2ZWxvcGVkIHdpdGggTGFyYXZlbCwgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgTVZDIGZyYW1ld29ya3Mgd2l0aGluIHRoZSBQSFAgZWNvc3lzdGVtLiBMYXJhdmVsIGlzIGEgZmxleGlibGUgZnJhbWV3b3JrIHRoYXQgYWxsb3dzIHRvIGRldmVsb3AgbXVjaCBmYXN0ZXIgYW5kIHdpdGhvdXQgc28gbWFueSBkZW1hbmRzIG9mIGdvb2QgcHJhY3RpY2VzIGF0IHRoZSBiZWdpbm5pbmcuXHJcbiAgICAgICAgYCxcclxuICAgICAgICBpbWFnZTogXCJjcmlzdGlhbi1icnVuZXQxLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiS2V5V2lcIixcclxuICAgICAgICBzdWJ0aXRsZTogXCJTbWFydCBsb2NrIHdpdGggQXJkdWlubyBcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYEtleVdpIGlzIGFuIElvVCBzb2x1dGlvbiB0aGF0IGNvbnNpc3RzIG9mIGFuIGludGVsbGlnZW50IGxvY2sgd2l0aCBhIHN5c3RlbSBlbWJlZGRlZCBpbiBhIFJhc3BlYmVycnkgUGkgcG93ZXJlZCBieSBtb2JpbGUgZGV2aWNlcyB3aXRoIE5GQyBzZXJ2aWNlLiAgVGhpcyB3YXMgbXkgZmluYWwgZGVncmVlIHByb2plY3QgYXQgdGhlIHVuaXZlcnNpdHkuXHJcblxyXG4gICAgICAgIFRoZSBwcm9qZWN0IHNlZWtzIHRvIHByb3ZpZGUgY29udmVuaWVuY2UgdG8gdGhlIHVzZXIsIHdpdGggdGhlIGNhcGFjaXR5IGZvciBjb25uZWN0aXZpdHkgYW5kIGRhdGEgcHJvY2Vzc2luZyBpbiBJb1QgZGV2aWNlcyBhbmQgdG8gaW1wcm92ZSBzZWN1cml0eSBhc3BlY3RzIGluIGVsZWN0cm9uaWMgbG9ja3MuXHJcbiAgICAgICAgXHJcbiAgICAgICAgVGhlIHByb2plY3QgaGFzIGEgbW9iaWxlIGFwcGxpY2F0aW9uIHRoYXQgd29ya3MgYXMgYSBrZXkgdHJhbnNtaXR0aW5nIGJ5IE5GQyBhIHVuaXF1ZSBjb2RlIHRoYXQgaXMgaW50ZXJwcmV0ZWQgYnkgYW4gaW50ZWxsaWdlbnQgbG9jayAoUmFzcGJlcnJ5IFBpIGluc2lkZSkgdGhhdCBhbGxvd3MgLyBkZW5pZXMgdGhlIG9wZW5pbmcgb2YgYSBkb29yXHJcbiAgICAgICAgYCxcclxuICAgICAgICBpbWFnZTogXCJrZXl3aTIuanBnXCJcclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcIlRheGkgVHJhY2tlclwiLFxyXG4gICAgICAgIHN1YnRpdGxlOiBcIlN0YXJ0ZXIgSW9uaWMgcHJvamVjdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgSXQgaXMgcHJvYmFibHkgbm90IG9uZSBvZiB0aGUgYmlnZ2VzIHByb2plY3RzIHRoYXQgSSBoYXZlIGRvbmUsIGJ1dCBpdCByZXByZXNlbnRzIGFsbCB0aGUgc21hbGwgYXBwcyBkZXZlbG9wZWQgd2hpbGUgbGVhcm5pbmcgbW9iaWxlIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50IHdpdGggSW9uaWMuXHJcbiAgICAgICAgXHJcbiAgICAgICAgVGhpcyBhcHAgd2FzIHBhcnQgb2YgYW4gVWRlbXkgY291cnNlLiBJdCBjb25zaXN0cyBvbiBhIHRyYWNraW5nIHN5c3RlbSBmb3IgdGF4aSBjb21wYW55IHVzaW5nIG1vYmlsZSBwaG9uZXMgdXNpbmcgR1BTIHBvc2l0aW9uaW5nIGFuZCByZWFsIHRpbWUgZXZlbnRzIG9uIEdvb2dsZSBGaXJlYmFzZS5cclxuICAgICAgICBgLFxyXG4gICAgICAgIGltYWdlOiBcInRheGktYXBwLmpwZ1wiXHJcbiAgICB9LFxyXG5cclxuXSJdLCJzb3VyY2VSb290IjoiIn0=