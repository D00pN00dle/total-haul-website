import {TURNSTILE_SITE_KEY} from '$env/static/private';

export async function load({ request, url }) {
    return {seoData: {
        url: url.origin + url.pathname,
        title: 'TotalHAUL - Commercial Aggregate Supply, Demolition, and Hauling Services',
        description: 'TotalHAUL is a professional junk removal, demolition, and hauling service provider serving the Greater Delaware Valley. We offer efficient and reliable solutions for commercial clients.',
        keywords: 'junk removal, demolition services, hauling services, waste management, debris removal, construction cleanup, property cleanout',
        image: '/images/totalhaul.jpg',
        },
        siteKey: TURNSTILE_SITE_KEY
    };
}