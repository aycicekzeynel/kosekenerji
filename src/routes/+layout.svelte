<script>
  import '$lib/styles/app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<Nav/>
<main>
  <slot/>
</main>
<Footer/>

<a
  href="https://wa.me/905325551212"
  target="_blank"
  rel="noopener noreferrer"
  class="wa-fab"
  aria-label="WhatsApp ile iletişime geç"
>
  <span class="wa-fab-ring"></span>
  <Icon name="WhatsApp" size={26}/>
  
</a>

<style>
  .wa-fab {
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 999;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #25D366;
    color: #fff;
    border-radius: 100px;
    padding: 14px 14px 14px 14px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(37,211,102,0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.25s ease;
    overflow: hidden;
  }
  .wa-fab:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 32px rgba(37,211,102,0.55);
  }
  .wa-fab-ring {
    position: absolute;
    inset: 0;
    border-radius: 100px;
    animation: waRing 2.4s ease-out infinite;
    pointer-events: none;
  }
  @keyframes waRing {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  .wa-fab-label { white-space: nowrap; letter-spacing: 0.01em; }

  @media (max-width: 540px) {
    .wa-fab { bottom: 20px; right: 20px; padding: 14px; border-radius: 50%; }
    .wa-fab-label { display: none; }
  }
</style>