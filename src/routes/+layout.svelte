<script>
	//import favicon from '$lib/assets/favicon.ico';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import MobileMenu from '$lib/assets/components/MobileMenu.svelte';
	import '$lib/assets/site.css';

	let { children, data } = $props();
	let seoData = $derived(data.seoData);
	//
	let topbar = $state();
	let header = $state();
	let toggleMenu = $state(false);
	let heroPaddingTop = writable(0);
	//@ts-ignore
	let io;
	function handleToggleMenu() {
		toggleMenu = !toggleMenu;
	}
	$effect(() => {
		//@ts-ignore
		const top = topbar?.offsetHeight ?? 0;
		//@ts-ignore
		const head = header?.offsetHeight ?? 0;
		$inspect('topbar height:', top);
		$inspect('header height:', head);
		heroPaddingTop.set(top + head);
		setContext('heroPaddingTop', heroPaddingTop);
	});

	// onMount(() => {
	// 	//@ts-ignore
	// 	const rellax = new Rellax('.rellax');

	// });
</script>

<svelte:head>
	<title>{seoData.title}</title>
	<meta name="description" content={seoData.description} />
	<meta name="keywords" content={seoData.keywords} />
	<meta property="og:title" content={seoData.title} />
	<meta property="og:description" content={seoData.description} />
	<meta property="og:image" content={seoData.image} />
	<meta property="og:url" content={seoData.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seoData.title} />
	<meta name="twitter:description" content={seoData.description} />
	<meta name="twitter:image" content={seoData.image} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
	<!-- link bootstrap 5.3 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">	<!-- link bootstrap icons -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

</svelte:head>

<MobileMenu {toggleMenu} {handleToggleMenu} />
<div class="topbar" bind:this={topbar}>
	<div class="wrap">
		<div class="certs-mini">
			Certified & Insured <b>NJDOT · PENNDOT · DELDOT</b>
		</div>
		<a href="tel:1-888-888-8888" class="phone-mini">1-888-888-8888</a>
	</div>
</div>
<header class="site" bind:this={header}>
	<div class="nav-wrap d-flex flex-column">
		<div class="d-flex flex-row py-2 px-3" style="max-width: 1200px; margin: 0 auto; width: 100%;">
			<a class="brand my-auto" href="#top">
				<div class="d-flex flex-column items-center justify-center me-auto" style="width: max-content !important;">
					<span class="lh-1">
						TOTAL<b>HAUL</b>
					</span>
					<span class="lh-1 fs-6" style="font-family: 'Inter', sans-serif !important; font-weight: 100 !important; letter-spacing: 0.3em !important;">
						TRUCKING
					</span>
				</div>
			</a>
			<div class="nav-cta ms-auto">
				<button class="btn btn-amber" style="height: 100% !important;">Get A Quote</button>
				<button class="menu-btn" title="Menu" onclick={handleToggleMenu}><i class="bi bi-list text-white" ></i></button>
			</div>
		</div>
		<div class="nav-links-wrap bg-dark">
			<nav class="links d-flex flex-row justify-space-between mx-auto" aria-label="Main navigation" style="max-width: 1200px;">
				<a href="#services" class="nav-link mx-auto" style="text-align: center;">Services</a>
				<a href="#about" class="nav-link mx-auto" style="text-align: center;">Area</a>
				<a href="#materials" class="nav-link mx-auto" style="text-align: center;">Materials</a>
				<a href="#certifications" class="nav-link mx-auto" style="text-align: center;">Certifications</a>
				<a href="#projects" class="nav-link mx-auto" style="text-align: center;">Projects</a>
				<a href="#careers" class="nav-link mx-auto" style="text-align: center;">Careers</a>
				<a href="#contact" class="nav-link mx-auto" style="text-align: center;">Contact</a>
			</nav>
		</div>
	</div>
</header>
<div>
	{@render children()}	
</div>

<footer class="site">
	<div class="wrap">
		<div class="foot-grid">
			<div class="foot-brand">
				<div class="brand">
						<div class="d-flex flex-column items-center justify-center me-auto" style="width: max-content !important;">
							<span class="lh-1">
								TOTAL<b>HAUL</b>
							</span>
							<span class="lh-1 fs-6" style="font-family: 'Inter', sans-serif !important; font-weight: 100 !important; letter-spacing: 0.2em !important;">
								TRUCKING
							</span>
						</div>
				</div>
				<p>
					One-call dump truck hauling, disposal, and aggregate supply for Greater Delaware Valley contractors and public agencies.
				</p>
				<div class="certline">
					NJDOT · PENNDOT · DELDOT · GREATER DELAWARE VALLEY
					<br>
					GREATER PHILADELPHIA · MID-ATLANTIC REGION
				</div>
			</div>
			<div class="foot-col">
				<h4>Services</h4>
				<a href="#services">Dump Truck Hauling</a>
				<a href="#services">Disposal &amp; Removal</a>
				<a href="#materials">Aggregate Supply</a>
				<a href="#drive">Drive for Us</a>
			</div>
			<div class="foot-col">
				<h4>Company</h4>
				<a href="#about">About</a>
				<a href="#certifications">Certifications</a>
				<a href="#projects">Work Types</a>
				<a href="#contact">Contact</a>
			</div>
			<div class="foot-col">
				<h4>Where We Work</h4>
				<a href="#area">Greater Delaware Valley</a>
				<a href="#area">Philadelphia</a>
				<a href="#area">Camden</a>
				<a href="#area">Wilmington</a>
			</div>
		</div>
		<div class="foot-bottom">
			<div>© 2026 TotalHAUL Trucking, LLC · Camden, NJ · Serving the Greater Delaware Valley</div>
      		<div><a href="tel:18888888888">1-888-888-8888</a> &nbsp;·&nbsp; <a href="mailto:contact@totalhaultrucking.com">contact@totalhaultrucking.com</a></div>
    	</div>
	</div>
</footer>
<style>
	@media (max-width: 980px) {
		.nav-links-wrap {
			display: none;
		}
	}
</style>