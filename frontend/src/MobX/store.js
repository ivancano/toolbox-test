import {observable, action, computed, decorate} from 'mobx';
import Service from '../services/services.js';


class Store {

	words = [];

	get getText() {
        return this.words;
    }

    setText(text) {
    	this.words.push(text);
    }

	async sendText(text) {
		const res = await Service.sendText(text);
		if(!res.error){
			this.words.push(text);
		}
	}

}

decorate(Store, {
	words: observable,
	getText: computed,
    sendText: action,
    setText: action
});

const store = new Store();
export default store;
export {
	Store
}