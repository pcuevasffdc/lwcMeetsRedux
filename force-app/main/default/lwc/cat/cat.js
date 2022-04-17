import { LightningElement, api } from 'lwc';
import { Redux } from "c/lwcRedux";

export default class Cat extends Redux(LightningElement) {
	@api recordId;

	mapStateToProps(state) {
		return { record : state.register.byIds[this.recordId] };
	}

	get isSterilisedCls() {
		return this.props.record.sterilized ? "slds-theme_success" : "";
	}

	get isVaccinatedCls() {
		return this.props.record.vaccinated ? "slds-theme_success" : "";
	}
}