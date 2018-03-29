define(["require", "exports", "Util", "text!components/TestComponent/template.html"], function (require, exports, Util_1, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestComponent = (function () {
        function TestComponent(template) {
            this.template = '';
            this.css = '';
            this.methods = {};
            this.$data = {};
            this.$props = {};
            this._data = {
                content: '请输入内容，再试试点击按钮',
            };
            var tpl = $(template);
            this.template = '<div>' + tpl.find('template').html() + '</div>';
            this.css = tpl.find('style').html();
            $('body').append($('<style></style>').html(this.css));
            this.__init();
        }
        TestComponent.prototype.__init = function () {
        };
        TestComponent.prototype.getName = function () {
            var list = this.constructor['name'].split(' ');
            return list.pop();
        };
        TestComponent.prototype.updated = function () {
        };
        return TestComponent;
    }());
    Util_1.default.bindComponent('test', new TestComponent(template));
    exports.default = TestComponent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC9UZXN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBZUMsdUJBQVksUUFBUTtZQWRiLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFFdEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztZQUVqQixZQUFPLEdBQUcsRUFBRSxDQUFDO1lBRWIsVUFBSyxHQUFRLEVBQUUsQ0FBQztZQUVoQixXQUFNLEdBQVEsRUFBRSxDQUFDO1lBRWpCLFVBQUssR0FBRztnQkFDZCxPQUFPLEVBQUUsZUFBZTthQUN4QixDQUFBO1lBS0EsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDO1FBRVMsOEJBQU0sR0FBaEI7UUFHQSxDQUFDO1FBRU0sK0JBQU8sR0FBZDtZQUVDLElBQUksSUFBSSxHQUFrQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRU0sK0JBQU8sR0FBZDtRQUlBLENBQUM7UUFDRixvQkFBQztJQUFELENBekNBLEFBeUNDLElBQUE7SUFFRCxjQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGtCQUFlLGFBQWEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL1Rlc3RDb21wb25lbnQvVGVzdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFZ1ZSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICdVdGlsJztcclxuLy8g5Yqg6L295qih54mI5paH5Lu2XHJcbmltcG9ydCAqIGFzIHRlbXBsYXRlIGZyb20gJ3RleHQhY29tcG9uZW50cy9UZXN0Q29tcG9uZW50L3RlbXBsYXRlLmh0bWwnO1xyXG5cclxuY2xhc3MgVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIHZ1ZWpzLkNvbXBvbmVudE9wdGlvbiB7XHJcblx0cHVibGljIHRlbXBsYXRlOiBzdHJpbmcgPSAnJztcclxuXHJcblx0cHVibGljIGNzczogc3RyaW5nID0gJyc7XHJcblxyXG5cdHB1YmxpYyBtZXRob2RzID0ge307XHJcblxyXG5cdHB1YmxpYyAkZGF0YTogYW55ID0ge307XHJcblxyXG5cdHB1YmxpYyAkcHJvcHM6IGFueSA9IHt9O1xyXG5cclxuXHRwdWJsaWMgX2RhdGEgPSB7XHJcblx0XHRjb250ZW50OiAn6K+36L6T5YWl5YaF5a6577yM5YaN6K+V6K+V54K55Ye75oyJ6ZKuJyxcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlKVxyXG5cdHtcclxuXHRcdC8vIOWkhOeQhuaooeeJiOWGheWuuVxyXG5cdFx0dmFyIHRwbCA9ICQodGVtcGxhdGUpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9ICc8ZGl2PicgKyB0cGwuZmluZCgndGVtcGxhdGUnKS5odG1sKCkgKyAnPC9kaXY+JztcclxuXHRcdHRoaXMuY3NzID0gdHBsLmZpbmQoJ3N0eWxlJykuaHRtbCgpO1xyXG5cdFx0JCgnYm9keScpLmFwcGVuZCgkKCc8c3R5bGU+PC9zdHlsZT4nKS5odG1sKHRoaXMuY3NzKSk7XHJcblx0XHR0aGlzLl9faW5pdCgpO1xyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIF9faW5pdCgpXHJcblx0e1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXROYW1lKClcclxuXHR7XHJcblx0XHR2YXIgbGlzdDogQXJyYXk8c3RyaW5nPiA9IHRoaXMuY29uc3RydWN0b3JbJ25hbWUnXS5zcGxpdCgnICcpO1xyXG5cdFx0cmV0dXJuIGxpc3QucG9wKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlZCgpXHJcblx0e1xyXG5cdFx0Ly8g5aaC5p6c5L2/55SobGF5dWnvvIzmiorkuIvpnaLnmoTms6jph4rvvIzlj6/ku6Xop6PlhrPmuLLmn5PlkI7mjqfku7bkuI3liLfmlrDpl67pophcclxuXHRcdC8vIGxheXVpLmZvcm0ucmVuZGVyKCk7XHJcblx0fVxyXG59XHJcbi8vIOazqOWGjOe7hOS7tlxyXG5VdGlsLmJpbmRDb21wb25lbnQoJ3Rlc3QnLCBuZXcgVGVzdENvbXBvbmVudCh0ZW1wbGF0ZSkpO1xyXG5leHBvcnQgZGVmYXVsdCBUZXN0Q29tcG9uZW50OyJdfQ==
