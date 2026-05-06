<script>
  export let name;
  export let size = 24;
  export let stroke = 1.6;

  $: props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none' };
</script>

{#if name === 'Bolt'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z"/></svg>
{:else if name === 'Sun'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>
{:else if name === 'Tower'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M5 22L12 4l7 18M8.5 13L12 4l3.5 9M7 17h10M9 19h6M10 8h4"/></svg>
{:else if name === 'Panel'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="1"/><path d="M3 11h18M9 4v14M15 4v14M3 21h18"/></svg>
{:else if name === 'Bulb'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V18h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z"/></svg>
{:else if name === 'Wrench'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z"/></svg>
{:else if name === 'Cpu'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>
{:else if name === 'Shield'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9.3-8 10-4.5-.7-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
{:else if name === 'Phone'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"/></svg>
{:else if name === 'Mail'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>
{:else if name === 'Pin'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
{:else if name === 'Clock'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
{:else if name === 'Arrow'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
{:else if name === 'ArrowUR'}
  <svg {...props} stroke="currentColor" stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
{:else if name === 'Check'}
  <svg {...props} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>
{:else if name === 'LogoMark'}
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none"><path d="M14 4L6 18h7l-2 10 11-14h-7l2-10z" fill="currentColor"/></svg>
{/if}
