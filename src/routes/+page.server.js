import { fail, json } from '@sveltejs/kit';
import { getWixClient } from '$lib/server/wix';

export async function load({ request, url }) {
    console.log('load params:', url.searchParams.get('q'));
    return {
        
    };
}
/**@param {import('@sveltejs/kit').RequestEvent} event */
export const actions = {
    submit: async ({ request }) => {
        try {
            const formData = await request.formData();
            const formObject = Object.fromEntries(formData.entries());
            const wix = await getWixClient();
            console.log('formObject:', formObject);
            const inserted = await wix.items.insert('TestCollection', {title: "wix test from sveltekit"});
            console.log('inserted:', inserted);
            return { success: true, message: 'Form submitted successfully!'};
        } catch (error) {
            return fail(500, { error: error instanceof Error ? error.message : 'Unknown error' });
        }

    }
};