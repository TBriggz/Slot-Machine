var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    // SPRITE BUTTON CLASS
    var SpriteButton = /** @class */ (function (_super) {
        __extends(SpriteButton, _super);
        function SpriteButton(imageString, x, y) {
            var _this = _super.call(this, imageString, x, y) || this;
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this.overButton, _this);
            _this.on("mouseout", _this.outButton, _this);
            return _this;
        }
        // PRIVATE METHODS
        // Event Handler for mouse over
        SpriteButton.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        // Event Handler for mouse out
        SpriteButton.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return SpriteButton;
    }(objects.GameObject));
    objects.SpriteButton = SpriteButton;
})(objects || (objects = {}));
//# sourceMappingURL=spritebutton.js.map