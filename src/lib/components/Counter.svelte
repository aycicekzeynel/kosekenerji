<script>
  import { onMount, onDestroy } from 'svelte';
  export let to = 0;
  export let suffix = '';
  export let duration = 1800;

  let val = 0;
  let el;
  let started = false;
  let observer;

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            val = Math.round(to * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    if (el) observer.observe(el);
  });
  onDestroy(() => observer?.disconnect());
</script>

<span bind:this={el}>{val}<span class="stat-suffix">{suffix}</span></span>
