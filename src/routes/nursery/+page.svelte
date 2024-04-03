<script lang="ts">
  import { enhance } from '$app/forms';
  import { Label, Input, Button, Alert } from 'flowbite-svelte';
  import logo from '$lib/assets/sgc-logo.png';

  /** @type {import('./$types').PageData} */
	export let data: { current?: string };

  /** @type {import('./$types').ActionData} */
	export let form: { success?: boolean, removeSuccess?: boolean, message?: string } | undefined;
</script>

<div class="nursery-container">
  <div class="sgc-logo">
    <img src={logo} alt="Sovereign Grace Dayton logo" />
  </div>
  <div class="nursery-form-container text-base">
    <h1 class="text-center">
      <strong>Current Notification</strong><br/>
      {#if data.current}
        <span class="text-green-500">{data.current}</span>
      {:else}
        None
      {/if}
    </h1>
  </div>
  <div class="nursery-form-container text-base">
    <!-- {#if form?.success}
      <Alert color="green" dismissable>
        <span class="text-m font-bold">Notification successful!</span><br/>
      </Alert>
    {/if} -->
    <form class="nursery-form" method="POST" action="?/submit" use:enhance>
      <div>
        <Label color="gray" defaultClass="text-l font-bold" for="child-code">Child's Nametag Code</Label>
        <Input type="text" id="child-code" name="child-code" placeholder="Nametag code..." />
      </div>
      <div class="text-right">
        <Button type="submit" color="green" block>Notify Parents</Button>
      </div>
    </form>
  </div>
  <div class="nursery-form-container text-base">
    <!-- {#if form?.removeSuccess}
      <Alert color="green" dismissable>
        <span class="text-m font-bold">Removed the notification!</span><br/>
      </Alert>
    {/if} -->
    <form class="nursery-form" method="POST" action="?/remove" use:enhance>
      <Button color="red" type="submit" block>Remove Current Notification</Button>
    </form>
  </div>
</div>

<style lang="scss">
  .nursery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
    width: 100%;
    background-color: #414d5c;
  }

  .sgc-logo {
    width: 200px;
    img {
      height: auto;
      max-width: 100%;
    }
  }

  .nursery-form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 320px;
    padding: 20px 32px;
    border: 1px solid #000716;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);

    .nursery-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>