"use strict";
(self["webpackChunkyoutube_client"] = self["webpackChunkyoutube_client"] || []).push([["src_app_youtube_youtube_module_ts"],{

/***/ 5410:
/*!************************************!*\
  !*** ./src/app/redux/selectors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCustomItems": () => (/* binding */ selectCustomItems),
/* harmony export */   "selectVideoItems": () => (/* binding */ selectVideoItems)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectVideoState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('youtube');
const selectVideoItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectVideoState, state => state.videoItems);
const selectCustomItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectVideoState, state => state.customItems);

/***/ }),

/***/ 5964:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/search-filter.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortFilterPipe {
  /* eslint-disable class-methods-use-this */
  transform(items, sortFilter) {
    if (!items) return [];
    if (!sortFilter) return items;
    return items.filter(item => item.snippet.title.toLowerCase().includes(sortFilter.toLowerCase()));
  }
}
SortFilterPipe.ɵfac = function SortFilterPipe_Factory(t) {
  return new (t || SortFilterPipe)();
};
SortFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sortFilter",
  type: SortFilterPipe,
  pure: true
});

/***/ }),

/***/ 5835:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/sorting.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortingPipe {
  /* eslint-disable class-methods-use-this */
  transform(items, sortKey) {
    if (!items || !sortKey) {
      return items;
    }
    switch (sortKey) {
      case 'dateAsc':
        return items.sort((a, b) => new Date(a.snippet.publishedAt).getTime() > new Date(b.snippet.publishedAt).getTime() ? 1 : -1);
      case 'dateDesc':
        return items.sort((a, b) => new Date(a.snippet.publishedAt).getTime() < new Date(b.snippet.publishedAt).getTime() ? 1 : -1);
      case 'viewsAsc':
        return items.sort((a, b) => +a.statistics.viewCount > +b.statistics.viewCount ? 1 : -1);
      case 'viewsDesc':
        return items.sort((a, b) => +a.statistics.viewCount < +b.statistics.viewCount ? 1 : -1);
      default:
        return items;
    }
  }
}
SortingPipe.ɵfac = function SortingPipe_Factory(t) {
  return new (t || SortingPipe)();
};
SortingPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sorting",
  type: SortingPipe,
  pure: true
});

/***/ }),

/***/ 3589:
/*!**************************************************!*\
  !*** ./src/app/youtube/guards/detailed.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailedGuard)
/* harmony export */ });
/* harmony import */ var src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/search.service */ 3095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _services_detailed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/detailed.service */ 9787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class DetailedGuard {
  constructor(router, searchService, detailedService) {
    this.router = router;
    this.searchService = searchService;
    this.detailedService = detailedService;
  }
  canActivate(route) {
    const id = route.paramMap.get('id');
    return this.searchService.videoItems$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(videoItems => {
      const foundVideo = videoItems.find(video => video.id.videoId === id);
      if (foundVideo) {
        this.detailedService.videoItem = foundVideo;
        return true;
      }
      this.router.navigate(['/404']);
      return false;
    }));
  }
}
DetailedGuard.ɵfac = function DetailedGuard_Factory(t) {
  return new (t || DetailedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_search_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_detailed_service__WEBPACK_IMPORTED_MODULE_1__["default"]));
};
DetailedGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DetailedGuard,
  factory: DetailedGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5854:
/*!**********************************************************************!*\
  !*** ./src/app/youtube/pages/custom-cards/custom-cards.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_redux_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/selectors */ 5410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);





function CustomCardsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const customItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", customItem_r1.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customItem_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](customItem_r1.creationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", customItem_r1.videoLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class CustomCardsComponent {
  constructor(store) {
    this.store = store;
    this.customItems = [];
    this.store.select(src_app_redux_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCustomItems).subscribe(items => {
      this.customItems = items;
    });
  }
}
CustomCardsComponent.ɵfac = function CustomCardsComponent_Factory(t) {
  return new (t || CustomCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store));
};
CustomCardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CustomCardsComponent,
  selectors: [["app-custom-cards"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 1,
  consts: [[1, "cards-wrapper"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["alt", "", 1, "card__thumbnail", 3, "src"], [1, "card__title"], [1, "card__description"], [1, "card__date"], ["controls", "", 1, "card__video", 3, "src"]],
  template: function CustomCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomCardsComponent_div_1_Template, 9, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.customItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: [".cards-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  justify-content: flex-start;\n  margin: 10px auto 0 auto;\n  column-gap: 5%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card__thumbnail[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 5%;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0 5%;\n  text-align: center;\n  color: #000;\n}\n\n.card__description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 5%;\n  text-align: center;\n  color: #000;\n}\n\n.card__date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0 5%;\n  text-align: center;\n  color: #000;\n}\n\n.card__video[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAveW91dHViZS9wYWdlcy9jdXN0b20tY2FyZHMvY3VzdG9tLWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UseUNBQUE7QUFFSjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgY29sdW1uLWdhcDogNSU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmRfX3RodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNhcmRfX2Rlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNhcmRfX2RhdGUge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5jYXJkX192aWRlbyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDUlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2610:
/*!**************************************************************!*\
  !*** ./src/app/youtube/pages/detailed/detailed.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailedComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_detailed_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/detailed.service */ 9787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function (a0) {
  return {
    "--bg-color": a0
  };
};
class DetailedComponent {
  constructor(detailedService, router) {
    this.detailedService = detailedService;
    this.router = router;
    this.bgColor = '#2F80ED';
    this.cardDate = '';
    this.videoItem = this.detailedService.videoItem;
  }
  ngOnInit() {
    this.cardDate = `${new Date(this.videoItem.snippet.publishedAt).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`;
    const dateDiff = Date.now() - new Date(this.videoItem.snippet.publishedAt).getTime();
    const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      this.bgColor = '#2F80ED';
    } else if (daysDiff >= 7 && daysDiff <= 30) {
      this.bgColor = '#27AE60';
    } else if (daysDiff > 30 && daysDiff <= 180) {
      this.bgColor = '#F2C94C';
    } else if (daysDiff > 180) {
      this.bgColor = '#EB5757';
    }
  }
  returnBack() {
    this.router.navigate(['/main']);
  }
}
DetailedComponent.ɵfac = function DetailedComponent_Factory(t) {
  return new (t || DetailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_detailed_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
DetailedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DetailedComponent,
  selectors: [["app-detailed"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 26,
  vars: 11,
  consts: [[1, "card", 3, "ngStyle"], ["alt", "", 1, "card__thumbnail", 3, "src"], [1, "card-wrapper"], [1, "title-wrapper"], [1, "card__title"], [1, "card-date"], [1, "description-title"], [1, "description"], [1, "card__statistics"], [1, "statistics__item"], ["src", "./assets/img/viewed.png", "alt", "view count", 1, "card__thumbnail"], ["src", "./assets/img/likes.png", "alt", "like count", 1, "card__thumbnail"], ["src", "./assets/img/favorites.png", "alt", "dislike count", 1, "card__thumbnail"], ["src", "./assets/img/comments.png", "alt", "comments count", 1, "card__thumbnail"], [1, "back-button", 3, "click"]],
  template: function DetailedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 8)(13, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailedComponent_Template_button_click_25_listener() {
        return ctx.returnBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.bgColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.videoItem.snippet.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.snippet.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.snippet.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.statistics.viewCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.statistics.likeCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.statistics.favoriteCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.videoItem.statistics.commentCount);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 1165px;\n  height: 461px;\n  margin: 44px auto 0 auto;\n  background-color: #e5e5e5;\n  border-radius: 5px;\n}\n\n.card__thumbnail[_ngcontent-%COMP%] {\n  width: 60%;\n  max-height: 100%;\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 40%;\n  height: 100%;\n  padding: 35px 37px 29px 34px;\n}\n.card-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 40%;\n  height: 5px;\n  background-color: var(--bg-color);\n  border-radius: 0 0 5px 0;\n}\n\n.card__statistics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  column-gap: 20px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  list-style: none;\n}\n\n.statistics__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.statistics__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 50%;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.card-date[_ngcontent-%COMP%] {\n  width: 50%;\n  color: #828282;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.description-title[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  text-align: left;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.description[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  max-height: 280px;\n  overflow-y: scroll;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  color: #828282;\n}\n\n.card__button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 32px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 0 5px 2px rgba(47, 129, 237, 0.5137254902);\n}\n.card__button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.card__button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -32px;\n  top: 0;\n  width: 32px;\n  height: 32px;\n  background-color: #2f80ed;\n  border: none;\n  border-radius: 5px 0 0 5px;\n}\n.back-button[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 7px;\n  left: 8px;\n  width: 16px;\n  height: 18px;\n  background-image: url('back-arrow.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAveW91dHViZS9wYWdlcy9kZXRhaWxlZC9kZXRhaWxlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsaUNBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSkY7QUFNRTtFQUNFLGlCQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0VBRUEsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQVhGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwREFBQTtBQVpGO0FBY0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtBQWJKO0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUFmSjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQWpCRjtBQW1CRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQWxCSjtBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0FBcEJKO0FBdUJFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUF0QkoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDExNjVweDtcclxuICBoZWlnaHQ6IDQ2MXB4O1xyXG4gIG1hcmdpbjogNDRweCBhdXRvIDAgYXV0bztcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkX190aHVtYm5haWwge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDM1cHggMzdweCAyOXB4IDM0cHg7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkX19zdGF0aXN0aWNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sdW1uLWdhcDogMjBweDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc3RhdGlzdGljc19faXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmRfX3RpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZC1kYXRlIHtcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICBjb2xvcjogIzgyODI4MjtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGl0bGUge1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcblxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXgtaGVpZ2h0OiAyODBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5jYXJkX19idXR0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjgwRUQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAzcHggMCA1cHggMnB4ICMyZjgxZWQ4MztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVBMkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XHJcbiAgICBjb2xvcjogI2RjZGNkYztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMzJweDtcclxuICB0b3A6IDA7XHJcblxyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY4MGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrLWFycm93LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVBMkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XHJcbiAgICBjb2xvcjogI2RjZGNkYztcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 397:
/*!*****************************************************************************************!*\
  !*** ./src/app/youtube/pages/main/search-results-item/search-results-item.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultsItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0) {
  return {
    "--bg-color": a0
  };
};
class SearchResultsItemComponent {
  constructor(router) {
    this.router = router;
    this.bgColor = '#2F80ED';
    this.videoItem = {};
    this.imageMap = [];
    this.imageSize = [];
  }
  ngOnInit() {
    this.imageMap = [`${this.videoItem.snippet.thumbnails.default.url} 120w`, `${this.videoItem.snippet.thumbnails.medium.url} 320w`, `${this.videoItem.snippet.thumbnails.high.url} 480w`];
    this.imageSize = ['(max-width: 320px) 120px', '(max-width: 480px) 320px', '480px'];
    const dateDiff = Date.now() - new Date(this.videoItem.snippet.publishedAt).getTime();
    const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      this.bgColor = '#2F80ED';
    } else if (daysDiff >= 7 && daysDiff <= 30) {
      this.bgColor = '#27AE60';
    } else if (daysDiff > 30 && daysDiff <= 180) {
      this.bgColor = '#F2C94C';
    } else if (daysDiff > 180) {
      this.bgColor = '#EB5757';
    }
  }
  showDetails() {
    this.router.navigate([`/main/${this.videoItem.id.videoId}`]);
  }
}
SearchResultsItemComponent.ɵfac = function SearchResultsItemComponent_Factory(t) {
  return new (t || SearchResultsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
SearchResultsItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchResultsItemComponent,
  selectors: [["app-search-results-item"]],
  inputs: {
    videoItem: "videoItem"
  },
  decls: 19,
  vars: 11,
  consts: [[1, "card", 3, "ngStyle"], ["alt", "", 1, "card__thumbnail", 3, "srcset", "sizes", "src"], [1, "card__statistics"], [1, "statistics__item"], ["src", "./assets/img/viewed.png", "alt", "view count"], ["src", "./assets/img/likes.png", "alt", "like count"], ["src", "./assets/img/favorites.png", "alt", "dislike count"], ["src", "./assets/img/comments.png", "alt", "comments count"], [1, "card__title"], [1, "card__button", 3, "click"]],
  template: function SearchResultsItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2)(3, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultsItemComponent_Template_button_click_17_listener() {
        return ctx.showDetails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "more...");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.bgColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", ctx.imageMap.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("sizes", ctx.imageSize.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoItem.snippet.thumbnails.default.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoItem.statistics.viewCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoItem.statistics.likeCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoItem.statistics.favoriteCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoItem.statistics.commentCount);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.videoItem.snippet.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 263px;\n  height: 327px;\n  padding: 20px 20px 15px 20px;\n  background-color: #e5e5e5;\n  border-radius: 5px;\n}\n.card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  background-color: var(--bg-color);\n  border-radius: 0 0 5px 5px;\n}\n\n.card__thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.card__statistics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  list-style: none;\n}\n\n.statistics__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.statistics__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: #4f4f4f;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.card__button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 32px;\n  color: #ffffff;\n  background-color: #2F80ED;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 0 5px 2px rgba(47, 129, 237, 0.5137254902);\n}\n.card__button[_ngcontent-%COMP%]:hover {\n  background-color: #5EA2FF;\n  cursor: pointer;\n  transition: 0.3s ease;\n}\n.card__button[_ngcontent-%COMP%]:active {\n  background-color: #b1b1b1;\n  color: #dcdcdc;\n  transition: 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAveW91dHViZS9wYWdlcy9tYWluL3NlYXJjaC1yZXN1bHRzLWl0ZW0vc2VhcmNoLXJlc3VsdHMtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7QUFETjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsaUNBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSkY7QUFNRTtFQUNFLGlCQUFBO0FBSko7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0FBUkY7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0FBVEo7QUFZRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0FBWEoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjYzcHg7XHJcbiAgaGVpZ2h0OiAzMjdweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMTVweCAyMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZF9fdGh1bWJuYWlsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmRfX3N0YXRpc3RpY3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uc3RhdGlzdGljc19faXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgJiBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZF9fdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBjb2xvcjogIzRmNGY0ZjtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmRfX2J1dHRvbiB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGODBFRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAwIDVweCAycHggIzJmODFlZDgzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RUEyRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYjFiMTtcclxuICAgIGNvbG9yOiAjZGNkY2RjO1xyXG5cclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1858:
/*!*****************************************************************************************!*\
  !*** ./src/app/youtube/pages/main/search-results-list/search-results-list.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultsListComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_services_filter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/filter.service */ 1375);
/* harmony import */ var src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/sort.service */ 5993);
/* harmony import */ var src_app_redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/redux/selectors */ 5410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_results_item_search_results_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-results-item/search-results-item.component */ 397);
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/search-filter.pipe */ 5964);
/* harmony import */ var _shared_pipes_sorting_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/sorting.pipe */ 5835);









function SearchResultsListComponent_main_0_app_search_results_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-search-results-item", 3);
  }
  if (rf & 2) {
    const videoItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("videoItem", videoItem_r2);
  }
}
function SearchResultsListComponent_main_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SearchResultsListComponent_main_0_app_search_results_item_1_Template, 1, 1, "app-search-results-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "sorting");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "sortFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 4, ctx_r0.videoItems, ctx_r0.filterText), ctx_r0.sortKey));
  }
}
class SearchResultsListComponent {
  constructor(sortService, filterService, store) {
    this.sortService = sortService;
    this.filterService = filterService;
    this.store = store;
    this.videoItems = [];
    this.showSearchResults = false;
    this.filterText = '';
    this.sortKey = '';
    this.store.select(src_app_redux_selectors__WEBPACK_IMPORTED_MODULE_2__.selectVideoItems).subscribe(items => {
      this.videoItems = items;
      this.showSearchResults = true;
    });
  }
  ngOnInit() {
    this.filterService.filter$.subscribe(filterService => {
      this.filterText = filterService;
    });
    this.sortService.sortKey$.subscribe(sortKey => {
      this.sortKey = sortKey;
    });
  }
}
SearchResultsListComponent.ɵfac = function SearchResultsListComponent_Factory(t) {
  return new (t || SearchResultsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sort_service__WEBPACK_IMPORTED_MODULE_1__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_filter_service__WEBPACK_IMPORTED_MODULE_0__["default"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
};
SearchResultsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SearchResultsListComponent,
  selectors: [["app-search-results-list"]],
  decls: 1,
  vars: 1,
  consts: [["class", "main", 4, "ngIf"], [1, "main"], [3, "videoItem", 4, "ngFor", "ngForOf"], [3, "videoItem"]],
  template: function SearchResultsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, SearchResultsListComponent_main_0_Template, 4, 7, "main", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSearchResults);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _search_results_item_search_results_item_component__WEBPACK_IMPORTED_MODULE_3__["default"], _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["default"], _shared_pipes_sorting_pipe__WEBPACK_IMPORTED_MODULE_5__["default"]],
  styles: [".main[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 30px 0;\n  margin: 0 auto;\n  width: 100%;\n  padding: 31px 152px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAveW91dHViZS9wYWdlcy9tYWluL3NlYXJjaC1yZXN1bHRzLWxpc3Qvc2VhcmNoLXJlc3VsdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDMwcHggMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzMXB4IDE1MnB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9787:
/*!******************************************************!*\
  !*** ./src/app/youtube/services/detailed.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailedService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DetailedService {}
DetailedService.ɵfac = function DetailedService_Factory(t) {
  return new (t || DetailedService)();
};
DetailedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DetailedService,
  factory: DetailedService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2264:
/*!***************************************************!*\
  !*** ./src/app/youtube/youtube-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_main_search_results_list_search_results_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main/search-results-list/search-results-list.component */ 1858);
/* harmony import */ var _pages_detailed_detailed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detailed/detailed.component */ 2610);
/* harmony import */ var _guards_detailed_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/detailed.guard */ 3589);
/* harmony import */ var _pages_custom_cards_custom_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/custom-cards/custom-cards.component */ 5854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _pages_main_search_results_list_search_results_list_component__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: 'custom-cards',
  component: _pages_custom_cards_custom_cards_component__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: ':id',
  component: _pages_detailed_detailed_component__WEBPACK_IMPORTED_MODULE_1__["default"],
  canActivate: [_guards_detailed_guard__WEBPACK_IMPORTED_MODULE_2__["default"]]
}];
class YoutubeRoutingModule {}
YoutubeRoutingModule.ɵfac = function YoutubeRoutingModule_Factory(t) {
  return new (t || YoutubeRoutingModule)();
};
YoutubeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: YoutubeRoutingModule
});
YoutubeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](YoutubeRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3756:
/*!*******************************************!*\
  !*** ./src/app/youtube/youtube.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_main_search_results_item_search_results_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main/search-results-item/search-results-item.component */ 397);
/* harmony import */ var _pages_main_search_results_list_search_results_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main/search-results-list/search-results-list.component */ 1858);
/* harmony import */ var _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/search-filter.pipe */ 5964);
/* harmony import */ var _shared_pipes_sorting_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/sorting.pipe */ 5835);
/* harmony import */ var _youtube_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./youtube-routing.module */ 2264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class YoutubeModule {}
YoutubeModule.ɵfac = function YoutubeModule_Factory(t) {
  return new (t || YoutubeModule)();
};
YoutubeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: YoutubeModule
});
YoutubeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _youtube_routing_module__WEBPACK_IMPORTED_MODULE_4__["default"]]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](YoutubeModule, {
    declarations: [_pages_main_search_results_item_search_results_item_component__WEBPACK_IMPORTED_MODULE_0__["default"], _pages_main_search_results_list_search_results_list_component__WEBPACK_IMPORTED_MODULE_1__["default"], _shared_pipes_search_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["default"], _shared_pipes_sorting_pipe__WEBPACK_IMPORTED_MODULE_3__["default"]],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _youtube_routing_module__WEBPACK_IMPORTED_MODULE_4__["default"]]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_youtube_youtube_module_ts.js.map