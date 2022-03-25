import { LightningElement } from "lwc";

export default class CatCard extends LightningElement {
	state = {
		name: "",
		age: null,
		sex: "unknown",
		gender: null,
		vaccinated: false,
		sterilised: false
	};
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
}
