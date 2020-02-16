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
var states;
(function (states) {
    // OVER CLASS
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR
        function Over() {
            return _super.call(this) || this;
        }
        // PUBLIC METHODS
        Over.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240, true);
            this.addChild(this._levelLabel); // add label to the stage
            // back button
            this._backButton = new objects.Button("BackButton", 320, 340);
            this._backButton.on("click", this._clickBackButton, this); // event listener
            this.addChild(this._backButton);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
            this._levelLabel.rotation += 5;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Back Button Click
        Over.prototype._clickBackButton = function (event) {
            changeState(config.PLAY_STATE);
        };
        return Over;
    }(objects.Scene));
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map