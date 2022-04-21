import { LightningElement } from "lwc";
import { Redux } from "c/lwcRedux";
import actions from "c/catTrackerActions";

export default class CatList extends Redux(LightningElement) {
	connectedCallback() {
		super.connectedCallback();
		this.props.initialize();
	}

	mapDispatchToProps() {
		return { initialize: actions.registerCat.initialize };
	}

	mapStateToProps(state) {
		return { allIds: state.catTracker.allIds };
	}

	get hasRecord() {
		return this.props.allIds && this.props.allIds.length > 0;
	}
}
