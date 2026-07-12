<script>
	import AboutSection from '$lib/assets/components/AboutSection.svelte';
	import AreaSection from '$lib/assets/components/AreaSection.svelte';
	import CertsSection from '$lib/assets/components/CertsSection.svelte';
	import ContactSection from '$lib/assets/components/ContactSection.svelte';
	import FAQsSection from '$lib/assets/components/FAQsSection.svelte';
	import FormSection from '$lib/assets/components/FormSection.svelte';
    import HeroSection from '$lib/assets/components/HeroSection.svelte';
	import MaterialsSection from '$lib/assets/components/MaterialsSection.svelte';
	import PartnersSection from '$lib/assets/components/PartnersSection.svelte';
	import ProjectsSection from '$lib/assets/components/ProjectsSection.svelte';
	import ServicesSection from '$lib/assets/components/ServicesSection.svelte';
	import StatsSection from '$lib/assets/components/StatsSection.svelte';
	import WhoSection from '$lib/assets/components/WhoSection.svelte';
	import WhySection from '$lib/assets/components/WhySection.svelte';
	import { onMount } from 'svelte';
	let { data } = $props();
	let seoData = $derived(data.seoData);
	onMount(() => {
		$inspect('seoData:', seoData);
	});
</script>

<HeroSection />
<ServicesSection />
<WhoSection />
<AboutSection />
<PartnersSection />
<WhySection />
<CertsSection />
<StatsSection />
<MaterialsSection />
<AreaSection />
<ProjectsSection />
<FAQsSection />
<FormSection {data}/>
<ContactSection />

