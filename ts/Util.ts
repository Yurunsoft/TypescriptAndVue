import * as Vue from 'vue';

export default abstract class Util
{
	public static bindComponent(name: string, obj: any)
	{
		var d = obj._data;
		obj.data = function(){
			return JSON.parse(JSON.stringify(d));
		}
		for(var k in obj)
		{
			if('props' !== k && 'function' === typeof(obj[k]))
			{
				obj['methods'][k] = obj[k];
			}
		}
		Vue.component(name, obj);
	}
}