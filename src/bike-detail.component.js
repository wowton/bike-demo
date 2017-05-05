"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var bike_model_1 = require("./bike.model");
var bike_service_1 = require("./bike.service");
var BikeComponent = (function () {
    function BikeComponent(bikeService, route, location) {
        this.bikeService = bikeService;
        this.route = route;
        this.location = location;
    }
    BikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.bikeService.getBike(+params['id']);
        })
            .subscribe(function (bike) { return _this.bike = bike; });
    };
    return BikeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof bike_model_1.Bike !== "undefined" && bike_model_1.Bike) === "function" && _a || Object)
], BikeComponent.prototype, "bike", void 0);
BikeComponent = __decorate([
    core_1.Component({
        selector: 'bike-detail',
        templateUrl: './bike-detail.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof bike_service_1.BikeService !== "undefined" && bike_service_1.BikeService) === "function" && _b || Object, router_1.ActivatedRoute,
        common_1.Location])
], BikeComponent);
exports.BikeComponent = BikeComponent;
var _a, _b;
//# sourceMappingURL=bike-detail.component.js.map