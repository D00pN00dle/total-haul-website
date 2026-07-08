/**
 * @typedef {Object} ParallaxLeaveOptions
 * @property {number} [maxShift]
 * @property {number} [speed]
 * @property {boolean} [requireEnter]
 * @property {'up'|'down'} [direction]
 * @property {string} [target]
 * @param {number} [v]
 */

function clamp(v, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

/**
 * @param {HTMLElement} node
 * @param {ParallaxLeaveOptions} [opts]
 */
export function parallaxLeave(node, opts = {}) {
  /** @type {ParallaxLeaveOptions} */
  let options = opts;

  let {
    maxShift = 80,
    speed = 1,
    requireEnter = true,
    direction = 'up',
    target
  } = options;

  /** @type {HTMLElement|null} */
  let targetEl = target
    ? /** @type {HTMLElement|null} */ (node.querySelector(target))
    : node;

  if (!targetEl) targetEl = node;

  let hasEntered = !requireEnter;
  let ticking = false;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) hasEntered = true;
      }
    },
    { threshold: 0.01 }
  );

  io.observe(node);

  function updateParallax() {
    if (!targetEl || !hasEntered) return;

    const rect = node.getBoundingClientRect();
    if (!rect.height) return;

    const progress = clamp((0 - rect.top) / rect.height, 0, 1);
    const sign = direction === 'up' ? -1 : 1;
    const y = sign * progress * maxShift * speed;

    targetEl.style.setProperty('--parallax-y', `${y}px`);
    targetEl.style.transform = `translate3d(0, var(--parallax-y), 0)`;
    targetEl.style.willChange = 'transform';
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
  }

  updateParallax();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  return {
    /** @param {ParallaxLeaveOptions} [newOpts] */
    update(newOpts = {}) {
      if (typeof newOpts.maxShift === 'number') maxShift = newOpts.maxShift;
      if (typeof newOpts.speed === 'number') speed = newOpts.speed;
      if (typeof newOpts.requireEnter === 'boolean') requireEnter = newOpts.requireEnter;
      if (newOpts.direction === 'up' || newOpts.direction === 'down') direction = newOpts.direction;

      if (typeof newOpts.target === 'string' && newOpts.target !== target) {
        target = newOpts.target;
        targetEl = /** @type {HTMLElement|null} */ (node.querySelector(target)) || node;
      }

      if (!requireEnter) hasEntered = true;
      onScroll();
    },
    destroy() {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };
}