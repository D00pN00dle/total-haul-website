<script>
    import { validateInputs } from '../js/validateInputs.js';
    let isDisabled = $state(false);
    let firstName = $state('');
    let lastName = $state('');
    let email = $state('');
    let phone = $state('');
    let organization = $state('');
    let location = $state('');
    let timeline = $state('');
    let material = $state('');
    let scope = $state('');

    const fieldsValidity = $derived({
        firstName: validateInputs('text', firstName),
        lastName: validateInputs('text', lastName),
        email: validateInputs('email', email),
        phone: validateInputs('tel', phone),
        organization: validateInputs('text', organization),
        location: validateInputs('text', location),
        timeline: validateInputs('select-one', timeline),
        material: validateInputs('select-one', material),
        scope: validateInputs('textarea', scope)
    });

    const isFormValid = $derived(() => {
        // avoids string indexing
        return Object.values(fieldsValidity).every(Boolean);
    });
</script>
<section class="cta-band">
  <div class="wrap">
    <h2>Let's talk about your project.</h2>
    <p>Email the scope — material, volume, timeline, and location — and we'll get you a project quote.</p>
    <form>
    <div class="row" style="max-width: 800px; margin: 0 auto;">
        <div class="col-12 col-md-6">
            <div class="d-flex flex-column flex-justify-center flex-align-center">
                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="firstName"><small>First</small></label>
                    <input type="text" name="firstName" bind:value={firstName} />                    
                </div>

                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="lastName"><small>Last</small></label>
                    <input type="text" name="lastName" bind:value={lastName} />
                </div>
                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="email" ><small>Email</small></label>
                    <input type="email" name="email" bind:value={email} />
                </div>
                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="phone"><small>Phone</small></label>
                    <input type="tel" name="phone" bind:value={phone} />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="d-flex flex-column flex-justify-center flex-align-center">
                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="organization"><small>Organization</small></label>
                    <input type="text" name="organization" bind:value={organization} />
                </div>
                <div class="d-flex flex-column mb-1">
                    <label class="text-start fs-6" for="location"><small>Location</small></label>
                    <input type="text" name="location" bind:value={location} />            
                </div>           
                <div class="select-wrapper mb-1">
                    <label class="text-start w-100 fs-6" for="timeline"><small>Timeline</small></label>
                    <select class="w-100" name="timeline" bind:value={timeline} style="border-radius: 0px; height: 30px !important; padding: 0px 1rem;">
                        <option value="" disabled selected>Select a timeline</option>
                        <option value="1">Timeline 1</option>
                        <option value="2">Timeline 2</option>
                        <option value="3">Timeline 3</option>
                    </select>
                </div>
                <div class="select-wrapper mb-1">
                    <label class="text-start w-100 fs-6" for="material"><small>Material</small></label>
                    <select class="w-100" name="material" bind:value={material} style="border-radius: 0px; height: 30px !important; padding: 0px 1rem;">
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
                    <textarea name="scope" rows="4" bind:value={scope} style="width: 100%;"></textarea>
                </div>
            </div>
        </div>
        <div class="hero-cta">
            <button class="btn btn-amber text-center" type="submit" disabled={isDisabled}>
                <span class="w-100">
                    Request a Quote
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>                    
                </span>
            </button>
        </div>
    </div>
   </form>   
  </div>
</section>

<style>
    @media (max-width: 768px) {
        .btn {
            width: 100%;
        }
    }
</style>