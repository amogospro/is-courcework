<script lang="ts">
  export let min: number | undefined = undefined;
  export let disabled: boolean | undefined = undefined;
  export let readonly: boolean | undefined = undefined;
  export let required: boolean | undefined = undefined;
  export let percent: boolean | undefined = undefined;

  export let max: number | undefined = undefined;
  export let step: number | undefined = undefined;
  export let base: number | undefined = undefined;
  export let value: number | undefined | null = base;
  export let digits: number | undefined = undefined;
  export let units: string | undefined = undefined;
  export let label: string | undefined = undefined;
  export let sign = true;

  if (step != null && digits == null) {
    const s = String(step).split('.')[1] ?? '0';
    s === '0' ? (digits = 0) : (digits = s.length);
  }

  let old_text_value: string | undefined;
  let text_value: string | undefined;

  export let invalid = Boolean(value == null && required);
  $: invalid = Boolean(value == null && required);

  function validate() {}

  const fixValue = () => {
    if (value != null) {
      if (step != null) {
        const base = min ?? max;
        if (base != null) value = base + step * Math.round((value - base) / step);
      }

      if (max != null && value > max) value = max;
      if (min != null && value < min) value = min;
    }
  };
  const fixText = (value: number | undefined | null) => {
    if (value != null) {
      fixValue();

      text_value = (value * (percent ? 100 : 1)).toFixed(digits);
      if (sign && value >= 0) text_value = `+${text_value}`;
      if (percent) text_value = `${text_value}%`;
    } else {
      text_value = undefined;
    }
  };

  const fix = () => {
    const new_value = text_value == null ? NaN : Number.parseFloat(text_value);
    if (Number.isNaN(new_value)) {
      value = undefined;
      text_value = undefined;
      return;
    } else {
      old_text_value = text_value;
      value = new_value;
    }
  };

  $: fixText(value);

  const placeholder =
    (min ?? max) != null ? `${min ?? ''}..${max ?? ''}${step != null ? ` : ${step}` : ''}` : '';
</script>

<div
  class="flex gap-1 items-center border-solid border-b-1px px-2 border-#e0e0e0 bg-#f4f4f4"
  class:disabled
  class:readonly
  class:invalid
  style="border-color: {readonly ? '#0000' : '#c0c0c0'};"
>
  {#if disabled}
    <div class="grid w-full items-center justify-center">
      <p>н.д.</p>
    </div>
  {:else}
    {#if label}
      <div class="grid whitespace-nowrap items-center justify-right">
        {label}
      </div>
    {/if}
    <input
      {...$$restProps}
      class="w-full grow border-none text-right outline-none w-auto min-w-auto border-0px bg-#f4f4f4 {$$restProps.class}"
      class:readonly
      {placeholder}
      bind:value={text_value}
      {disabled}
      {readonly}
      on:input={() => validate()}
      on:change={() => fix()}
    />
    {#if units}
      <div class="grid whitespace-nowrap items-center justify-center">
        {units}
      </div>
    {/if}
    {#if !readonly && step !== undefined}
      <button
        class="bg-transparent border-none rounded cursor-pointer"
        on:click={() => {
          if (value !== undefined && value !== null && step !== undefined) {
            value -= step;
            fixValue();
          }
        }}
      >
        -
      </button>
      <button
        class="bg-transparent border-none rounded cursor-pointer"
        on:click={() => {
          if (value !== undefined && value !== null && step !== undefined) {
            value += step;
            fixValue();
          }
        }}
      >
        +
      </button>
    {/if}
  {/if}

  <!-- <input hidden type="number" bind:value /> -->
</div>

<style lang="scss">
  .invalid {
    border-color: red;
  }
  .readonly {
    box-shadow: none;
    cursor: default;
    background-color: transparent;
    opacity: 0.9;
  }
  .disabled {
    opacity: 0.4;
  }
</style>
