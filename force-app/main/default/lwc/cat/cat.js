import { LightningElement, api, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { Redux } from "c/lwcRedux";
import actions from "c/catTrackerActions";

export default class Cat extends Redux(LightningElement) {
	@api recordId;

	@track
	inAdoption = false;

	mapStateToProps(state) {
		return { record: state.catTracker.byIds[this.recordId] };
	}

	mapDispatchToProps() {
		return {
			steriliseCat: actions.registerCat.steriliseCat,
			vaccinateCat: actions.registerCat.vaccinateCat,
			adoptCat: actions.registerCat.adoptCat
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
		this.showPostedToast();
	}

	handleAdoption() {
		this.props.adoptCat(this.recordId);
		this.showAdoptedToast();
	}

	showAdoptedToast() {
		const evt = new ShowToastEvent({
			title: "Adopted!",
			message: "Hooray! Adoption process for " + this.props.record.name + " is complete!",
			variant: "success"
		});
		this.dispatchEvent(evt);
	}

	showPostedToast() {
		const evt = new ShowToastEvent({
			title: "Posted!",
			message:
				"Hooray! Now that we are sure that " +
				this.props.record.name +
				" is healthy, we have posted " +
				this.getPossessivePronounForCat() +
				" to social networks to look for a forever home!",
			variant: "success"
		});
		this.dispatchEvent(evt);
	}

	getPossessivePronounForCat() {
		console.log(this.props.record.gender);
		switch (this.props.record.gender) {
			case "Female":
				return "her";
			case "Male":
				return "him";
			default:
				return "them";
		}
	}
}
