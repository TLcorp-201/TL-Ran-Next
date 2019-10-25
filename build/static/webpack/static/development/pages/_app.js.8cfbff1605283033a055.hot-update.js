webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./libraries/store/configStore.ts":
/*!****************************************!*\
  !*** ./libraries/store/configStore.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _ducks_rootSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ducks/rootSaga */ "./libraries/store/ducks/rootSaga.ts");
/* harmony import */ var _ducks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ducks */ "./libraries/store/ducks/index.ts");





function configureStore(preloadedState) {
  /**
   * Recreate the stdChannel (saga middleware) with every context.
   */
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var composeEnhancers =  true && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
  /**
   * Since Next.js does server-side rendering, you are REQUIRED to pass
   * `preloadedState` when creating the store.
   */

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_ducks__WEBPACK_IMPORTED_MODULE_3__), preloadedState, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
  /**
   * next-redux-saga depends on `sagaTask` being attached to the store.
   * It is used to await the rootSaga task before sending results to the client.
   */

  store.sagaTask = sagaMiddleware.run(_ducks_rootSaga__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ })

})
//# sourceMappingURL=_app.js.8cfbff1605283033a055.hot-update.js.map