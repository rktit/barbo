export const UPDATE_PAGE = "[SYSTEM] UPDATE PAGE";

export function update_page(data) {
		return {
				type: UPDATE_PAGE,
				payload: data
		};
}