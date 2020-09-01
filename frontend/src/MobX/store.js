import { observable, action } from 'mobx';
import Service from '../services/services.js';


class Store {

	@observable results = [];

	@action sendText(text) {
		Service.sendText(this.state.text).then((res) => {
	      this.results.push(res.data);
	    });
	}

}

const store = new Store();
export default store;