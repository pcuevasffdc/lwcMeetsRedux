import { LightningElement } from "lwc";
import { Redux } from "c/lwcRedux";
import actions from "c/catTrackerActions";

export default class CaTracker extends Redux(LightningElement) {
	connectedCallback() {
		super.connectedCallback();
		this.props.initialize();
	}

	mapDispatchToProps() {
		return { initialize: actions.registerCat.initialize };
	}
}
