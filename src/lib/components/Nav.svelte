<script>
  import { page } from '$app/stores';
  import Icon from './Icon.svelte';
  import { NAV_LINKS } from '$lib/data.js';

  let open = false;

  $: currentPath = $page.url.pathname;
</script>

<header class="nav">
  <div class="nav-inner">
    <a href="/" class="logo">
      <span class="logo-mark"><Icon name="LogoMark" size={22}/></span>
      <span class="logo-text">
        <span>KÖSEK ENERJİ</span>
        <small>EST · 2001</small>
      </span>
    </a>
    <ul class="nav-links" class:open>
      {#each NAV_LINKS as l}
        <li>
          <a href={l.href}
             class="nav-link"
             class:active={currentPath === l.href}
             on:click={() => open = false}>{l.label}</a>
        </li>
      {/each}
    </ul>
    <a href="/iletisim" class="nav-cta">Teklif Al <Icon name="Arrow" size={14}/></a>
    <button class="menu-toggle" on:click={() => open = !open} aria-label="Menu"><span></span></button>
  </div>
</header>
