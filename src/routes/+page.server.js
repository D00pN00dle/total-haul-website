import { fail, json } from '@sveltejs/kit';
import { getWixClient } from '$lib/server/wix';

export async function load({ request, url }) {
    //console.log('load params:', url);
    return {seoData: {
        url: url.origin + url.pathname,
        title: 'TotalHAUL - Commercial Aggregate Supply, Demolition, and Hauling Services',
        description: 'TotalHAUL is a professional junk removal, demolition, and hauling service provider serving the Greater Delaware Valley. We offer efficient and reliable solutions for commercial clients.',
        keywords: 'junk removal, demolition services, hauling services, waste management, debris removal, construction cleanup, property cleanout',
        image: '/images/totalhaul.jpg',

    }};
}
/**@param {import('@sveltejs/kit').RequestEvent} event */
export const actions = {
    submit: async ({ request }) => {
        try {
            const formData = await request.formData();
            const formObject = Object.fromEntries(formData.entries());
            const wix = await getWixClient();
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