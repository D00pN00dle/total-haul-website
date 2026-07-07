<script>
	import { getContext } from 'svelte';
    import img from '$lib/assets/images/dump-truck-orange-1.png';
    const bgImg = img;
	let paddingValue = $state(0);

	// top-level
	const heroPaddingTop = getContext('heroPaddingTop');

	$effect(() => {
		paddingValue = $heroPaddingTop ?? 0;
	});


	$inspect('heroPaddingTop FROM CONTEXT value:', paddingValue);
</script>
<section class="hero d-flex flex-column my-auto py-4" 
style="--bg-url: url('{bgImg}'); --bg-height: calc(100vh - {paddingValue}px) !important; min-height: 600px !important;"
>
    <div class="wrap hero-inner py-4 my-auto rellax" data-rellax-speed="7" style="height: fit-content; min-height: 600px;">
        <div class="eyebrow">
            Greater Philadelphia Area  ·  Built for contractors & public agencies
        </div>
        <h1>
            One-call dump truck hauling, disposal & aggregate supply.
        </h1>
        <p class="sub">
            TotalHAUL provides dump truck hauling, disposal, dirt haul-off, and aggregate delivery for commercial contractors and public projects across the Greater Philadelphia Area — backed by owned tri-axle and quad-axle trucks plus a vetted subhauler network.
        </p>
        <div class="hero-cta">
            <a class="btn btn-amber" href="mailto:contact@totalhaultrucking.com?subject=Project%20Quote%20Request">Request a Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </a>
            <a class="btn btn-ghost" href="tel:1-888-888-8888">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"></path></svg>
                Call 1-888-888-8888
            </a>
        </div>
        <div class="hero-trust">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"></path></svg>COIs available upon request</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"></path></svg>NJDOT / PENNDOT / DELDOT Licensed</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"></path></svg>Built for commercial, civil &amp; public work</span>
        </div>
    </div>

</section>