import { REGISTER_CAT, CAT_VACCINATED, CAT_STERILISED } from "c/catTrackerConstants";

const initialState = {
	allIds: [],
	byIds: {}
};

const catTracker = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_CAT: {
			const payload = action.payload;
			console.log(payload);
			return {
				...state,
				allIds: [...state.allIds, payload.id],
				byIds: {
					...state.byIds,
					[payload.id]: { ...payload }
				}
			};
		}
		case CAT_VACCINATED: {
			const id = action.payload.id;
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...state.byIds[id],
						vaccinated: true
					}
				}
			}
		}
		case CAT_STERILISED: {
			const id = action.payload.id;
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...state.byIds[id],
						sterilised: true
					}
				}
			}
		}
		default:
			return state;
	}
};

export { catTracker };
