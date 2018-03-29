var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "vue", "components/TestComponent/TestComponent"], function (require, exports, Vue, TestComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Test = (function (_super) {
        __extends(Test, _super);
        function Test() {
            var _this = this;
            TestComponent_1.default;
            var option = {
                el: '#body',
                created: function () {
                    _this.created();
                }
            };
            _this = _super.call(this, option) || this;
            return _this;
        }
        Test.prototype.created = function () {
            alert('test.ts: created');
        };
        Test.prototype.fuckContent = function () {
            this.$refs['test1'].content = '嘿嘿，被按钮改了';
        };
        return Test;
    }(Vue));
    new Test();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUlBO1FBQW1CLHdCQUFHO1FBRXJCO1lBQUEsaUJBVUM7WUFSQSx1QkFBVSxDQUFDO1lBQ1gsSUFBSSxNQUFNLEdBQUc7Z0JBQ1osRUFBRSxFQUFFLE9BQU87Z0JBQ1gsT0FBTyxFQUFFO29CQUNSLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQzthQUNELENBQUM7WUFDRixRQUFBLGtCQUFNLE1BQU0sQ0FBQyxTQUFDOztRQUNmLENBQUM7UUFFTyxzQkFBTyxHQUFmO1lBR0MsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVNLDBCQUFXLEdBQWxCO1lBR0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQzFDLENBQUM7UUFDRixXQUFDO0lBQUQsQ0F6QkEsQUF5QkMsQ0F6QmtCLEdBQUcsR0F5QnJCO0lBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVnVlIGZyb20gJ3Z1ZSc7XHJcbi8vIOWKoOi9vee7hOS7tlxyXG5pbXBvcnQgVHJlZVNlbGVjdCBmcm9tICdjb21wb25lbnRzL1Rlc3RDb21wb25lbnQvVGVzdENvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBUZXN0IGV4dGVuZHMgVnVlXHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0VHJlZVNlbGVjdDsgLy8g5b+F6aG777yM5ZCm5YiZ5LiN5Lya6Ieq5Yqo5byV5YWlXHJcblx0XHR2YXIgb3B0aW9uID0ge1xyXG5cdFx0XHRlbDogJyNib2R5JyxcclxuXHRcdFx0Y3JlYXRlZDogKCk9PntcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHN1cGVyKG9wdGlvbik7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZWQoKVxyXG5cdHtcclxuXHRcdC8vIOWIneWni+WMllxyXG5cdFx0YWxlcnQoJ3Rlc3QudHM6IGNyZWF0ZWQnKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmdWNrQ29udGVudCgpXHJcblx0e1xyXG5cdFx0Ly8g5pS55Y+YdGVzdOe7hOS7tueahOaVsOaNrlxyXG5cdFx0dGhpcy4kcmVmc1sndGVzdDEnXS5jb250ZW50ID0gJ+WYv+WYv++8jOiiq+aMiemSruaUueS6hic7XHJcblx0fVxyXG59XHJcblxyXG5uZXcgVGVzdCgpOyJdfQ==
