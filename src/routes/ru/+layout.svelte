<script>
  import { locale } from '$lib/i18n/index.js';
  export let data;
  locale.set(data.lang);
</script>
<slot/>
