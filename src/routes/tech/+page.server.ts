import notification from '$lib/server/notification';

/** @type {import('./$types').PageLoad} */
export function load({ depends }) {
	const current = notification.code;
	depends('app:notification');

	return {
		current,
	};
}