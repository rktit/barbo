export const TOGGLE_MODAL = "[MODAL] TOGGLE MODAL";
export const TOGGLE_ALERT = "[MODAL] TOGGLE ALERT";
export const OPEN_ALERT = "[MODAL] OPEN ALERT";
export const CLOSE_MODAL = "[MODAL] CLOSE MODAL";
export const CLOSE_ALERT = "[MODAL] CLOSE ALERT";
export const INFO_MODAL = "[MODAL] INFO MODAL";

export function toggle_modal(modal) {
		return {
				type: TOGGLE_MODAL,
				payload: modal
		};
}

export function toggle_alert(type, text) {
		return {
				type: TOGGLE_ALERT,
				payload: {type, text}
		};
}

export function open_alert(type, text) {
		return {
				type: OPEN_ALERT,
				payload: {type, text}
		};
}

export function close_modal(modal) {
		return {
				type: CLOSE_MODAL,
				payload: modal
		};
}

export function close_alert() {
		return {
				type: CLOSE_ALERT
		};
}

export function info_modal(info) {
		return {
				type: INFO_MODAL,
				payload: info
		};
}
