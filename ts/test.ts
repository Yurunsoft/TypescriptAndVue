import * as Vue from 'vue';
// 加载组件
import TreeSelect from 'components/TestComponent/TestComponent';

class Test extends Vue
{
	constructor()
	{
		TreeSelect; // 必须，否则不会自动引入
		var option = {
			el: '#body',
			created: ()=>{
				this.created();
			}
		};
		super(option);
	}

	private created()
	{
		// 初始化
		alert('test.ts: created');
	}

	public fuckContent()
	{
		// 改变test组件的数据
		this.$refs['test1'].content = '嘿嘿，被按钮改了';
	}
}

new Test();