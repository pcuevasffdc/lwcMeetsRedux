import { REGISTER_CAT } from "c/catTrackerConstants";

import registerCat from "@salesforce/apex/CatController.registerCat";

export const register = (name, gender, age, sterilized, vaccinated) => {
	return (dispatch) => {
		registerCat({
			name: name,
			gender: gender,
			age: age,
			sterilized: sterilized,
			vaccinated: vaccinated
		})
			.then((result) => {
				dispatch({
					type: REGISTER_CAT,
					payload: JSON.parse(JSON.stringify(result))
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
};
