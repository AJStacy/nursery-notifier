import notification from '$lib/server/notification';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const current = notification.code;

	if (current) {
		return { current };
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async ({ request }) => {
		const body = await request.formData();
		const childCode = body.get('child-code') as string;
		notification.code = childCode;

		return {
			success: true,
			message: `Successfully notified the tech team for ${childCode}`,
		}
	},
	remove: async () => {
		notification.code = null;

		return {
			removeSuccess: true,
			message: `Successfully removed the current notification.`,
		}
	}
};