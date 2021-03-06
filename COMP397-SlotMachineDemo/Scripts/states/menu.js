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
    // MENU CLASS
    var Menu = /** @class */ (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR
        function Menu() {
            return _super.call(this) || this;
        }
        // PUBLIC METHODS
        Menu.prototype.start = function () {
            // hello label
            this._helloLabel = new objects.Label("Briggz Casino", "60px Consolas", "#000000", 320, 240, true);
            this.addChild(this._helloLabel); // add label to the stage
            // start button
            this._startButton = new objects.Button("StartButton", 320, 340);
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        Menu.prototype._clickStartButton = function (event) {
            createjs.Sound.play("coin"); // activate static class play 
            changeState(config.PLAY_STATE);
        };
        return Menu;
    }(objects.Scene));
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map