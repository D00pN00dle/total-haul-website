import { fail, json } from '@sveltejs/kit';
import { getWixClient } from '$lib/server/wix';
import { TURNSTILE_SECRET_KEY } from '$env/static/private';

export async function load({ request, url }) {
    //console.log('load params:', url);

}
/**@param {import('@sveltejs/kit').RequestEvent} event */
export const actions = {
    submit: async ({ request }) => {
        try {
            const formData = await request.formData();
            const formObject = Object.fromEntries(formData.entries());
            const wix = await getWixClient();
            const token = formObject['cf-turnstile-response'];
            if (!token || typeof token !== 'string' || token.trim() === '') {
                return fail(400, { error: 'Turnstile token is missing or invalid' });
            }
            const verfiyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    secret: TURNSTILE_SECRET_KEY,
                    response: token
                })
            });
            const response = await verfiyRes.json();
            if (!response.success) {
                return fail(400, { error: 'Turnstile verification failed' });
            }
            //console.log('formObject:', formObject);
            // might want to think about sterilizing fields before inserting into Wix collection, depending on your needs
            const objectToInsert = {
                name: formObject.name + ' ' + formObject.lastname,
                email: formObject.email,
                message: formObject.scope,
                //other fields as needed
            };
            // Insert the object into the Wix collection - replace 'TestCollection' with your actual collection name
            // and ensure that the fields in objectToInsert match the fields in your Wix collection.
            // change current object to objectToInsert when ready to insert form data
            const inserted = await wix.items.insert('TestCollection', {title: "wix test from sveltekit"});
            console.log('inserted:', inserted);
            return { success: true, message: 'Form submitted successfully!'};
        } catch (error) {
            return fail(500, { error: error instanceof Error ? error.message : 'Unknown error' });
        }

    }
};