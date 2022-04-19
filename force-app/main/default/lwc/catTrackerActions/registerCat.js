import {
	REGISTER_CAT,
	CAT_VACCINATED,
	CAT_STERILISED,
	INITIALIZE_APP
} from "c/catTrackerConstants";

import registerCat from "@salesforce/apex/CatController.registerCat";
import getAllCats from "@salesforce/apex/CatController.getAllCats";
import updateCat from "@salesforce/apex/CatController.updateCat";

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

export const vaccinateCat = (id) => {
	return (dispatch, getState) => {
		const cat = getState().catTracker.byIds[id];
		cat.vaccinated = true;
		updateCat({strCat: JSON.stringify(cat)})
			.then((result) => {
				dispatch({
					type: CAT_VACCINATED,
					payload: { id }
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

export const steriliseCat = (id) => {
	return (dispatch, getState) => {
		const cat = getState().catTracker.byIds[id];
		cat.sterilized = true;
		updateCat({strCat: JSON.stringify(cat)})
			.then((result) => {
				dispatch({
					type: CAT_STERILISED,
					payload: { id }
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

export const initialize = () => {
	return (dispatch) => {
		getAllCats()
			.then((result) => {
				dispatch({
					type: INITIALIZE_APP,
					payload: JSON.parse(JSON.stringify(result))
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
};
