import { LightningElement, track } from "lwc";
import { Redux } from "c/lwcRedux";
import actions from "c/catTrackerActions";

const emptyState = {
	name: "",
	age: null,
	gender: "Unknown",
	vaccinated: false,
	sterilised: false
};
export default class CatCard extends Redux(LightningElement) {
	@track
	state = { ...emptyState };

	sexOptions = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
		{ label: "Unknown", value: "Unknown" }
	];
	ageOptions = [
		{ label: "Kitten", value: "Kitten" },
		{ label: "Young cat", value: "Young cat" },
		{ label: "Adult cat", value: "Adult cat" },
		{ label: "Senior cat", value: "Senior cat" }
	];

	mapDispatchToProps() {
		return { register: actions.registerCat.register };
	}

	mapStateToProps(state) {
		console.log(state);
	}

	nameChange(event) {
		this.state.name = event.target.value;
	}

	genderChange(event) {
		this.state.gender = event.target.value;
	}

	ageChange(event) {
		this.state.age = event.target.value;
	}

	sterilisedChange(event) {
		this.state.sterilised = event.target.checked;
	}

	vaccinatedChange(event) {
		this.state.vaccinated = event.target.checked;
	}

	handleClick() {
		if (this.state.name) {
			this.props.register(
				this.state.name,
				this.state.gender,
				this.state.age,
				this.state.vaccinated,
				this.state.sterilised
			);
			this.state = { ...emptyState };
		}
	}
}
