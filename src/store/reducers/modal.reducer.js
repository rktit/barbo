import * as Actions from "../actions";

import * as Cookies from 'utils/cookies';

const initialState = {
		cookies: true,
		politica: false,
		load: false,
		black: false,
		alert: {
				show: false,
				type: '', //'primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
				text: 'Texto do alerta'
		},
};

const modal = function (state = initialState, action) {
		switch (action.type) {
				case Actions.TOGGLE_MODAL:
						return {
								...state,
								[action.payload]: true,
						};
				case Actions.TOGGLE_ALERT:
						return {
								...state,
								alert: {
										show: !state.alert.show,
										type: action.payload.type, //'primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
										text: action.payload.text
								},
						};
				case Actions.OPEN_ALERT:
						return {
								...state,
								alert: {
										show: true,
										type: action.payload.type, //'primary','secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
										text: action.payload.text
								},
						};
				case Actions.CLOSE_MODAL:
						// if(action.payload === 'black') cookies('true');
						return {
								...state,
								[action.payload]: false
						};
				case Actions.CLOSE_ALERT:
						return {
								...state,
								alert: {
										...state.alert,
										show: false,
								}
						};
				case Actions.INFO_MODAL:
						return {
								...state,
								status: action.payload.status,
								info: action.payload.text,
						};
				default:
						return {
								...state,
						};
		}
};

// async function cookies(value) {
// 		await Cookies.setCookie('black_friday', value);
// }

export default modal;
