import { LightningElement } from 'lwc';
import { Redux } from "c/lwcRedux";

export default class CatList extends Redux(LightningElement) {
	mapStateToProps(state) {
		return { allIds: state.catTracker.allIds };
	}

	get hasRecord() {
		return this.props.allIds && this.props.allIds.length > 0
	}
}