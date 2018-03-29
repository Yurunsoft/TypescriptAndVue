import * as Vue from 'vue';
import Util from 'Util';
// 加载模版文件
import * as template from 'text!components/TestComponent/template.html';

class TestComponent implements vuejs.ComponentOption {
	public template: string = '';

	public css: string = '';

	public methods = {};

	public $data: any = {};

	public $props: any = {};

	public _data = {
		content: '请输入内容，再试试点击按钮',
	}

	constructor(template)
	{
		// 处理模版内容
		var tpl = $(template);
		this.template = '<div>' + tpl.find('template').html() + '</div>';
		this.css = tpl.find('style').html();
		$('body').append($('<style></style>').html(this.css));
		this.__init();
	}

	protected __init()
	{

	}

	public getName()
	{
		var list: Array<string> = this.constructor['name'].split(' ');
		return list.pop();
	}

	public updated()
	{
		// 如果使用layui，把下面的注释，可以解决渲染后控件不刷新问题
		// layui.form.render();
	}
}
// 注册组件
Util.bindComponent('test', new TestComponent(template));
export default TestComponent;