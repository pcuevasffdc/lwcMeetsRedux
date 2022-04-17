import { LightningElement, api } from "lwc";
import { createStore, combineReducers, createLogger } from "c/lwcRedux";
import reducers from "c/catTrackerReducer";

const ENABLE_LOGGING = true;

export default class CatTrackAppContainer extends LightningElement {
	@api store;
	initialize() {
		let logger;

		if (ENABLE_LOGGING) {
			logger = createLogger({
				duration: true,
				diff: true
			});
		}
		const combineReducersInstance = combineReducers(reducers);
		// eslint-disable-next-line @lwc/lwc/no-api-reassignments
		this.store = createStore(combineReducersInstance, logger);
	}
}
