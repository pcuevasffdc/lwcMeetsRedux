import { REGISTER_CAT } from "c/catTrackerConstants";

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
		default:
			return state;
	}
};

export { catTracker };
