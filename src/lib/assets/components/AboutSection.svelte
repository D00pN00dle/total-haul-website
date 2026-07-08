<script>
  import img from '$lib/assets/images/dump-truck-orange-1.png';
  import { parallaxLeave } from '$lib/assets/js/parallaxLeave.js';

  const bgImg = img;
</script>
<section class="about" id="about">
  <div class="wrap about-grid" use:parallaxLeave={{ maxShift: 80, speed: 3, direction: 'up' }}>
    <div>
      <div class="eyebrow">Who we are</div>
      <h2 style="font-size:clamp(28px,4.2vw,46px);margin:14px 0 18px;color:var(--limestone)">Construction logistics, simplified.</h2>
      <p class="lead">TotalHAUL Trucking, LLC was established in 2023 to give Delaware Valley contractors a single, dependable source for trucking, disposal, and aggregate delivery.</p>
      <p class="body">We operate tri-axle and quad-axle dump trucks and coordinate a vetted network of carrier partners, keeping one point of accountability while scaling capacity to match the job. From base stone delivery to spoil haul-off, you deal with one team that understands contractor schedules.</p>
      <div class="filter">
        <b>Built for commercial work.</b> We partner with general contractors, builders, site developers, and public agencies on project-based work. Minimums apply: 4 hours for trucking services or 4 loads for material delivery.
      </div>
    </div>
    <div class="photo-slot" role="img" aria-label="Stylized TotalHAUL dump truck jobsite graphic">
      <div class="bg-img w-100 h-100 position-absolute" style="--bg-url:url('{bgImg}'); opacity: 0.7;"></div>
    </div>
  </div>
</section>