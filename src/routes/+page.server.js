import { fail } from '@sveltejs/kit';
import { getWixClient } from '$lib/server/wix';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	submit: async ({ request, getClientAddress }) => {
		try {
			const formData = await request.formData();
			const formObject = Object.fromEntries(formData.entries());

			const token = formObject['cf-turnstile-response'];
			if (!token || typeof token !== 'string' || token.trim() === '') {
				return fail(400, { error: 'Missing Turnstile token' });
			}

			const body = new URLSearchParams({
				secret: TURNSTILE_SECRET_KEY,
				response: token
			});

			const ip = getClientAddress?.();
			if (ip) body.append('remoteip', ip);

			const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body
			});

			const contentType = verifyRes.headers.get('content-type') || '';
			if (!contentType.includes('application/json')) {
				return fail(502, { error: 'Turnstile verify did not return JSON' });
			}

			const verifyData = await verifyRes.json();

			if (!verifyData.success) {
				console.error('Turnstile failed:', verifyData);
				return fail(400, {
					error: 'Turnstile verification failed',
					turnstileErrors: verifyData['error-codes'] ?? []
				});
			}

			const wix = await getWixClient();

			const objectToInsert = {
				name: `${formObject.name ?? ''} ${formObject.lastname ?? ''}`.trim(),
				email: formObject.email ?? '',
				message: formObject.scope ?? ''
			};

			await wix.items.insert('TestCollection', {title: 'wix sveltekit test'});

			return { success: true, message: 'Form submitted successfully!' };
		} catch (error) {
			console.error('submit action error:', error);
			return fail(500, { error: error instanceof Error ? error.message : 'Unknown error' });
		}
	}
};