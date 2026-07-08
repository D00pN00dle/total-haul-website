<script>
let urlSiteDev = "https://cdn.continental.com/fileadmin/__imported/sites/corporate/_international/english/hubpages/10_20press/01_press_releases/09_20cvs/2022/continental_pp_proviu360_excavator.jpg";
let urlRoadway = "https://images.stockcake.com/public/4/f/2/4f2e5493-9424-42c2-a2fa-b8bf573e43ce/highway-construction-view-stockcake.jpg";
let urlDisposal = "https://diamonddemolish.com/wp-content/uploads/0-11.jpg";

import { parallaxLeave } from '$lib/assets/js/parallaxLeave.js';
</script>
<section class="projects" id="projects">
  <div class="wrap" use:parallaxLeave={{ maxShift: 80, speed: 3, direction: 'up' }}>
    <div class="sec-head">
      <div class="eyebrow">Work types</div>
      <h2>The kind of work we support.</h2>
      <p>TotalHAUL is built for contractor scopes where trucking, disposal, aggregate sourcing, and jobsite communication all need to work together.</p>
    </div>
    <div class="proj-grid">
      <article class="proj">
        <div class="pimg">
          <span class="tagk z-3">SITE DEVELOPMENT</span>
          <div class="bg-img w-100 h-100 position-absolute z-2" style="--bg-url:url('{urlSiteDev}'); opacity: 0.7;"></div>
        </div>
        <div class="pbody"><h3>Site Development Hauling</h3><p>Base aggregate imports, dirt haul-off, and daily truck support for commercial site packages.</p></div>
      </article>
      <article class="proj">
        <div class="pimg">
          <span class="tagk z-3">ROADWAY</span>
          <div class="bg-img w-100 h-100 position-absolute z-2" style="--bg-url:url('{urlRoadway}'); opacity: 0.7;"></div>
        </div>
        <div class="pbody"><h3>Roadway &amp; Paving Support</h3><p>Dense-grade, #57 stone, and other aggregate deliveries coordinated with paving and grading crews.</p></div>
      </article>
      <article class="proj">
        <div class="pimg">
          <span class="tagk z-3">DISPOSAL</span>
          <div class="bg-img w-100 h-100 position-absolute z-2" style="--bg-url:url('{urlDisposal}'); opacity: 0.7;"></div>
        </div>
        <div class="pbody"><h3>Demolition &amp; Spoil Disposal</h3><p>Debris and excavated-material haul-off routed by material type, project location, and disposal requirements.</p></div>
      </article>
    </div>
  </div>
</section>