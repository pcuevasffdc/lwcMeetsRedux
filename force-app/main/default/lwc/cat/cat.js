import { LightningElement, api, track } from 'lwc';
import { Redux } from "c/lwcRedux";
import actions from "c/catTrackerActions";

export default class Cat extends Redux(LightningElement) {
	@api recordId;

	@track
	inAdoption = false;

	mapStateToProps(state) {
		return { record : state.catTracker.byIds[this.recordId] };
	}

	mapDispatchToProps(){
		return {
			steriliseCat : actions.registerCat.steriliseCat,
			vaccinateCat : actions.registerCat.vaccinateCat,
			adoptCat : actions.registerCat.adoptCat
		};
	}

	get isSterilisedCls() {
		return this.props.record.sterilized ? "slds-theme_success" : "";
	}

	get isVaccinatedCls() {
		return this.props.record.vaccinated ? "slds-theme_success" : "";
	}

	get catNeedsVet() {
		return !this.props.record.sterilized || !this.props.record.vaccinated;
	}

	get isInAdoption() {
		return this.props.record.sterilized && this.props.record.vaccinated;
	}

	handleVetVisit() {
		if (!this.props.record.sterilized) {
			this.props.steriliseCat(this.recordId);
		}
		if (!this.props.record.vaccinated) {
			this.props.vaccinateCat(this.recordId);
		}
		this.inAdoption = true;
	}

	handleAdoption() {
		this.props.adoptCat(this.recordId);
	}
}