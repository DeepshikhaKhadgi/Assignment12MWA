var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseObject = (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}(baseObject));
var rectangleObj = new rectangle(5, 2);
console.log(rectangleObj.calcSize());
