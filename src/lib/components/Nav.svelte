<script>
  import { page } from '$app/stores';
  import Icon from './Icon.svelte';
  import { NAV_LINKS } from '$lib/data.js';
  import { locale, setLocale, LANGUAGES, t } from '$lib/i18n/index.js';

  let open = false;
  let langOpen = false;

  $: currentPath = $page.url.pathname;

  const navKeys = ['home','corporate','about','services','projects','contact'];

  function closeLang() { langOpen = false; }

  function handleLangKey(e, code) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLocale(code); langOpen = false; }
    if (e.key === 'Escape') langOpen = false;
  }
</script>

<svelte:window on:click={(e) => { if (!e.target.closest('.lang-switcher')) langOpen = false; }}/>

<header class="nav">
  <div class="nav-inner">
    <a href="/" class="logo">
      <span class="logo-mark"><Icon name="LogoMark" size={22}/></span>
      <span class="logo-text"><span>KÖSEK ENERJİ</span></span>
    </a>

    <ul class="nav-links" class:open>
      {#each NAV_LINKS as l, i}
        <li>
          <a href={l.href}
             class="nav-link"
             class:active={currentPath === l.href}
             on:click={() => open = false}>{$t(`nav.${navKeys[i]}`)}</a>
        </li>
      {/each}
    </ul>

    <div class="nav-right">
      <!-- Language Switcher -->
      <div class="lang-switcher" class:open={langOpen}>
        <button
          class="lang-btn"
          on:click|stopPropagation={() => langOpen = !langOpen}
          aria-label="Dil seçin"
          aria-expanded={langOpen}
          aria-haspopup="listbox"
        >
          <span class="lang-globe">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </span>
          <span class="lang-code">{LANGUAGES.find(l => l.code === $locale)?.short ?? 'TR'}</span>
          <span class="lang-chevron" class:rotated={langOpen}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>

        {#if langOpen}
          <div class="lang-dropdown" role="listbox" aria-label="Dil seçenekleri">
            {#each LANGUAGES as lang}
              <button
                class="lang-option"
                class:selected={$locale === lang.code}
                role="option"
                aria-selected={$locale === lang.code}
                on:click={() => { setLocale(lang.code); langOpen = false; }}
                on:keydown={(e) => handleLangKey(e, lang.code)}
              >
                <span class="lang-opt-short">{lang.short}</span>
                <span class="lang-opt-label">{lang.label}</span>
                {#if $locale === lang.code}
                  <span class="lang-check"><Icon name="Check" size={12}/></span>
                {/if}
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <a href="/iletisim" class="nav-cta">{$t('nav.cta')} <Icon name="Arrow" size={14}/></a>
    </div>

    <button class="menu-toggle" on:click={() => open = !open} aria-label="Menu"><span></span></button>
  </div>
</header>

<style>
  .nav-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* ── Language switcher ── */
  .lang-switcher {
    position: relative;
  }
  .lang-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border: 1px solid var(--line);
    border-radius: var(--r-sm);
    background: transparent;
    color: var(--text-dim);
    font-size: 12px;
    font-weight: 600;
    font-family: var(--font-mono);
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
  }
  .lang-btn:hover, .lang-switcher.open .lang-btn {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(255,212,0,0.04);
  }
  .lang-globe { display: flex; align-items: center; opacity: 0.7; }
  .lang-code { min-width: 20px; text-align: center; }
  .lang-chevron {
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
    opacity: 0.6;
  }
  .lang-chevron.rotated { transform: rotate(180deg); }

  .lang-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 150px;
    background: var(--bg-elevated);
    border: 1px solid var(--line);
    border-radius: var(--r-md);
    padding: 6px;
    z-index: 200;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    animation: dropIn 0.15s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-6px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  .lang-option {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 9px 12px;
    border-radius: var(--r-sm);
    font-size: 13px;
    color: var(--text-dim);
    background: transparent;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
    text-align: left;
    border: none;
    font-family: var(--font-body);
  }
  .lang-option:hover { background: rgba(255,212,0,0.06); color: var(--text); }
  .lang-option.selected { color: var(--accent); }
  .lang-opt-short {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--accent);
    min-width: 22px;
  }
  .lang-opt-label { flex: 1; }
  .lang-check { color: var(--accent); display: flex; margin-left: auto; }

  @media (max-width: 920px) {
    .nav-right .nav-cta { display: none; }
    .lang-switcher { display: flex; }
  }
</style>
