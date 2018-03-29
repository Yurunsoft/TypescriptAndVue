define(["require", "exports", "vue"], function (require, exports, Vue) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Util = (function () {
        function Util() {
        }
        Util.bindComponent = function (name, obj) {
            var d = obj._data;
            obj.data = function () {
                return JSON.parse(JSON.stringify(d));
            };
            for (var k in obj) {
                if ('props' !== k && 'function' === typeof (obj[k])) {
                    obj['methods'][k] = obj[k];
                }
            }
            Vue.component(name, obj);
        };
        return Util;
    }());
    exports.default = Util;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RzL1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtRQWlCQSxDQUFDO1FBZmMsa0JBQWEsR0FBM0IsVUFBNEIsSUFBWSxFQUFFLEdBQVE7WUFFakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFBO1lBQ0QsS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQ2hCO2dCQUNDLElBQUcsT0FBTyxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssT0FBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNqRDtvQkFDQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjthQUNEO1lBQ0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNGLFdBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBIiwiZmlsZSI6IlV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBWdWUgZnJvbSAndnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFV0aWxcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgYmluZENvbXBvbmVudChuYW1lOiBzdHJpbmcsIG9iajogYW55KVxyXG5cdHtcclxuXHRcdHZhciBkID0gb2JqLl9kYXRhO1xyXG5cdFx0b2JqLmRhdGEgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGsgaW4gb2JqKVxyXG5cdFx0e1xyXG5cdFx0XHRpZigncHJvcHMnICE9PSBrICYmICdmdW5jdGlvbicgPT09IHR5cGVvZihvYmpba10pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0b2JqWydtZXRob2RzJ11ba10gPSBvYmpba107XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFZ1ZS5jb21wb25lbnQobmFtZSwgb2JqKTtcclxuXHR9XHJcbn0iXX0=
