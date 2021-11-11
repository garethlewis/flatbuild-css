<script>
  import Header from './Header.svelte';
  import CTA_Primary from './buttons/cta-primary.svelte';
</script>

<Header></Header>
<div class="grid grid-cols-3 w-full mt-1 mr-1">
  <CTA_Primary text="First"></CTA_Primary>
  <CTA_Primary text="Second"></CTA_Primary>
  <CTA_Primary text="Third"></CTA_Primary>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>