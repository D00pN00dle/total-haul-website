<script>
	import { validateInputs } from '../js/validateInputs.js';
	import { enhance } from '$app/forms';    import { onMount } from 'svelte';
	import { parallaxLeave } from '$lib/assets/js/parallaxLeave.js';
	import { slide } from 'svelte/transition';
	let { data } = $props();
	/** @type {HTMLDivElement | null} */
	let widgetEl = null;

	let firstName = $state();
	let lastName = $state();
	let email = $state();
	let phone = $state();
	let organization = $state();
	let location = $state();
	let timeline = $state();
	let material = $state();
	let scope = $state();
	let formResult = $state();
	let firstNameTouched = $state(false);
	let lastNameTouched = $state(false);
	let emailTouched = $state(false);
	let phoneTouched = $state(false);
	let organizationTouched = $state(false);
	let locationTouched = $state(false);
	let timelineTouched = $state(false);
	let materialTouched = $state(false);
	let scopeTouched = $state(false);
	let hideTurnstile = $state(false);

	let turnstileResponse = $state();
	
	let firstNameValid = $derived(validateInputs('text', firstName));
	let lastNameValid = $derived(validateInputs('text', lastName));
	let emailValid = $derived(validateInputs('email', email));
	let phoneValid = $derived(validateInputs('tel', phone));
	let organizationValid = $derived(validateInputs('text', organization));
	let locationValid = $derived(validateInputs('text', location));
	let timelineValid = $derived(validateInputs('select-one', timeline));
	let materialValid = $derived(validateInputs('select-one', material));
	let scopeValid = $derived(validateInputs('textarea', scope));
	let turnstileValid = $derived(validateInputs('hidden', turnstileResponse));


	let isFormValid = $derived(
		firstNameValid.valid &&
			lastNameValid.valid &&
			emailValid.valid &&
			phoneValid.valid &&
			organizationValid.valid &&
			locationValid.valid &&
			timelineValid.valid &&
			materialValid.valid &&
			scopeValid.valid &&
			turnstileValid.valid
	);

	let isDisabled = $derived(!isFormValid);
	$effect(() => {
		// $inspect('firstName:', firstName);
		// $inspect('lastName:', lastName);
		// $inspect('firstNameValid:', firstNameValid);

	});
	/**@param {string} token The token returned by the Turnstile widget upon successful completion of the challenge */
	function onTurnstileSuccess(token) {
		turnstileResponse = token;
		console.log('Turnstile success token:', token);
		setTimeout(() => {
			hideTurnstile = true;
		}, 3000); // Added a delay to ensure the UI updates correctly
  	}

	function onTurnstileExpired() {
		turnstileResponse = '';
	}

	onMount(() => {
		/** @type {Window & { turnstile?: { render: (el: HTMLElement, opts: any) => string } }} */
		const w = window;

		const render = () => {
			if (!w.turnstile || !widgetEl) return;
			w.turnstile.render(widgetEl, {
				sitekey: data?.siteKey,
				size: 'compact',
				callback: onTurnstileSuccess,
				'expired-callback': onTurnstileExpired
			});
		};

		if (w.turnstile) {
			render();
			return;
		}

		const s = document.createElement('script');
		s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
		s.async = true;
		s.defer = true;
		s.onload = render;
		document.head.appendChild(s);
	});

</script>
<div bind:this={widgetEl} class="fixed-bottom-right {hideTurnstile ? 'd-none' : ''}" transition:slide></div>
<section class="cta-band" id="form">
	<div class="wrap" use:parallaxLeave={{ maxShift: 80, speed: 3, direction: 'up' }}>
		<h2>Let's talk about your project.</h2>
		<p>
			Email the scope — material, volume, timeline, and location — and we'll get you a project
			quote.
		</p>
		<form
			class="d-flex flex-column flex-justify-center flex-align-center"
			action="?/submit"
			method="POST"
			use:enhance={() => {
				return (result) => {
					console.log('Form submission result:', result);
					formResult = result.result;
				}
			}}
		>
			<input type="hidden" name="cf-turnstile-response" id="cf-turnstile-response" bind:value={turnstileResponse} />
			<div class="row" style="max-width: 800px; margin: 0 auto;">
				<small class="text-center alert alert-danger mb-2" data-bs-theme="dark">* All fields are required *</small>
				<div class="col-12 col-md-6">
					<div class="d-flex flex-column flex-justify-center flex-align-center">
						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="firstName"><small>First</small></label>
							<input
								class={!firstNameValid.valid && firstNameTouched ? 'border-danger' : ''}
								type="text"
								name="firstName"
								bind:value={firstName}
                                onblur={() => (firstNameTouched = true)}
							/>
						</div>

						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="lastName"><small>Last</small></label>
							<input
								class={!lastNameValid.valid && lastNameTouched ? 'border-danger' : ''}
								type="text"
								name="lastName"
								bind:value={lastName}
                                onblur={() => (lastNameTouched = true)}
							/>
						</div>
						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="email"><small>Email</small></label>
							<input
								class={!emailValid.valid && emailTouched ? 'border-danger' : ''}
								type="email"
								name="email"
								bind:value={email}
                                onblur={() => (emailTouched = true)}
							/>
						</div>
						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="phone"><small>Phone</small></label>
							<input
								class={!phoneValid.valid && phoneTouched ? 'border-danger' : ''}
								type="tel"
								name="phone"
								bind:value={phone}
                                onblur={() => (phoneTouched = true)}
							/>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="d-flex flex-column flex-justify-center flex-align-center">
						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="organization"><small>Organization</small></label>
							<input
								class={!organizationValid.valid && organizationTouched ? 'border-danger' : ''}
								type="text"
								name="organization"
								bind:value={organization}
                                onblur={() => (organizationTouched = true)}
							/>
						</div>
						<div class="d-flex flex-column mb-1">
							<label class="text-start fs-6" for="location"><small>Location</small></label>
							<input
								class={!locationValid.valid && locationTouched ? 'border-danger' : ''}
								type="text"
								name="location"
								bind:value={location}
                                onblur={() => (locationTouched = true)}
							/>
						</div>
						<div class="select-wrapper mb-1">
							<label class="text-start w-100 fs-6" for="timeline"><small>Timeline</small></label>
							<select
								class="w-100 {!timelineValid.valid && timelineTouched ? 'border-danger' : ''}"
								name="timeline"
								bind:value={timeline}
                                onblur={() => (timelineTouched = true)}
								style="border-radius: 0px; height: 30px !important; padding: 0px 1rem;"
							>
								<option value="" disabled selected>Select a timeline</option>
								<option value="1">Timeline 1</option>
								<option value="2">Timeline 2</option>
								<option value="3">Timeline 3</option>
							</select>
						</div>
						<div class="select-wrapper mb-1">
							<label class="text-start w-100 fs-6" for="material"><small>Material</small></label>
							<select
								class="w-100 {!materialValid.valid && materialTouched ? 'border-danger' : ''}"
								name="material"
								bind:value={material}
                                onblur={() => (materialTouched = true)}
								style="border-radius: 0px; height: 30px !important; padding: 0px 1rem;"
							>
								<option value="" disabled selected>Select a material</option>
								<option value="1">Material 1</option>
								<option value="2">Material 2</option>
								<option value="3">Material 3</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="d-flex flex-column flex-justify-center flex-align-center">
						<div class="d-flex flex-column mb-1 w-100">
							<label class="text-start fs-6" for="scope"><small>Project Scope</small></label>
							<textarea
								class={!scopeValid.valid && scopeTouched ? 'border-danger' : ''}
								name="scope"
								rows="4"
								bind:value={scope}
                                onblur={() => (scopeTouched = true)}
								style="width: 100%;"></textarea>
						</div>
					</div>
				</div>
                {#if formResult?.type === 'success'}
                    <div class="alert alert-success text-center mt-2 d-flex flex-row w-100" data-bs-theme="dark">
                        <p class="text-success" style="width: 100% !important;">Your request has been submitted successfully!</p>
						<button class="btn-close ms-auto" title="close alert" onclick={() => (formResult = null)}><i class="bi bi-x"></i></button>
                    </div>
                {:else if formResult?.type === 'error'}
                    <div class="alert alert-danger text-center mt-2 d-flex flex-row w-100" data-bs-theme="dark">
                        <p class="text-danger" style="width: 100% !important;">There was an error submitting your request. Please try again.</p>
						<button class="btn-close ms-auto" title="close alert" onclick={() => (formResult = null)}><i class="bi bi-x"></i></button>
                    </div>
                {/if}
				<div class="hero-cta">
					<button class="btn btn-amber text-center" type="submit" disabled={isDisabled}>
						<span class="w-100">
							Request a Quote
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
								><path d="M5 12h14M13 6l6 6-6 6"></path></svg
							>
						</span>
					</button>
				</div>
			</div>
		</form>
	</div>
</section>

<style>
	.fixed-bottom-right {
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 1000;
	}
	.btn-close {
		width: 22px;
		height: 22px;
	}
	@media (max-width: 768px) {
		.btn {
			width: 100%;
		}
	}
</style>
