<script>
	let { toggleMenu, handleToggleMenu } = $props();
    let menuItems = [
        { label: 'Services', href: '#services' },
        { label: 'Who We Are', href: '#who-we-are' },
        { label: 'About Us', href: '#about-us' },
        { label: 'Partners', href: '#partners' },
        { label: 'Why TotalHAUL', href: '#why-totalhaul' },
        { label: 'Certifications', href: '#certifications' },
        { label: 'Stats', href: '#stats' },
        { label: 'Materials', href: '#materials' },
        { label: 'Service Area', href: '#service-area' },
        { label: 'Projects', href: '#projects' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Request a Quote', href: '#request-a-quote' },
        { label: 'Contact Us', href: '#contact-us' }
    ];
</script>

<div
	class="offcanvas offcanvas-end {toggleMenu ? 'show' : ''} w-100 text-white"
	tabindex="-1"
	id="offcanvas"
	aria-labelledby="offcanvasLabel"
    style="background-color: var(--ink);"
>
	<div class="offcanvas-header">
		<a class="brand my-auto" href="#top">
			<div
				class="d-flex flex-column items-center justify-center me-auto"
				style="width: max-content !important;"
			>
				<span class="lh-1">
					TOTAL<b>HAUL</b>
				</span>
				<span
					class="lh-1 fs-6"
					style="font-family: 'Inter', sans-serif !important; font-weight: 100 !important; letter-spacing: 0.3em !important;"
				>
					TRUCKING
				</span>
			</div>
		</a>
		<button type="button" 
        class="btn btn-sm ms-auto" 
        aria-label="Close" 
        style="color: white !important;"
        onclick={handleToggleMenu}>
            <i class="bi bi-x-lg"></i>
        </button>
	</div>
	<div class="offcanvas-body">
		{#each menuItems as item}
			<a href={item.href} class="d-block mobile-menu-item px-4 py-2 text-start fs-4" onclick={handleToggleMenu}>
                {item.label}
            </a>
		{/each}
	</div>
</div>

<style>
    .mobile-menu-item {
        color: var(--limestone);
        text-decoration: none;
        transition: background-color 0.3s ease;
        border-bottom: 1px solid var(--limestone);
        text-transform: uppercase;

    }
    .mobile-menu-item:hover {
        --mobile-menu-hover-color: var(--amber);
        background-color: var(--mobile-menu-hover-color);
    }
</style>