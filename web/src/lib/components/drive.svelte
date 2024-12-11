<script lang="ts">
  import {
    StructuredList,
    StructuredListHead,
    StructuredListRow,
    StructuredListCell,
    StructuredListBody,
    Dropdown,
    Checkbox,
    Button,
    Toggle
  } from 'carbon-components-svelte';
  import NumberInput from './number-input.svelte';
  import Djson from './djson.svelte';
  import { type DriveTelemetry } from '$lib/telemetry';

  export let drive: DriveTelemetry | undefined;

  let actualPosition: number | null = null;
  let actualVelocity: number | null = null;

  $: {
    if (drive != null) {
      if ('drive_position_deg' in drive) {
        actualPosition = drive.drive_position_deg;
        actualVelocity = drive.drive_velocity_deg_per_sec;
        units = 'гр';
      } else if ('drive_position_mm' in drive) {
        actualPosition = drive.drive_position_mm;
        actualVelocity = drive.drive_velocity_mm_per_sec;
        units = 'мм';
      }
    }
  }

  let targetPosition: number;
  let velocity: number;
  let acceleration: number;

  export let startMove: (items: {
    targetPosition: number;
    velocity: number;
    acceleration: number;
  }) => any;

  export let stop: (() => any) | null = null;
  export let setOrigin: (() => any) | null = null;

  export let units: string = '';

  type Range = {
    min: number;
    max: number;
    step: number;
    base?: number;
  };
  export let ranges: {
    targetPosition: Range;
    velocity: Range;
    acceleration: Range;
  };
  export let name: string | undefined = undefined;
  export let position_enabled: boolean = true;
</script>

{#if name}
  <h3>
    {name}
  </h3>
{/if}
<div class="flex gap-10">
  <StructuredList>
    <StructuredListHead>
      <StructuredListRow head class="">
        <StructuredListCell class="w-20%" head />
        <StructuredListCell class="w-40%" head>Плановое</StructuredListCell>
        <StructuredListCell class="w-40%" head>Актуальное</StructuredListCell>
      </StructuredListRow>
    </StructuredListHead>
    <StructuredListBody>
      {#if position_enabled}
        <StructuredListRow>
          <StructuredListCell noWrap>Выбор положения</StructuredListCell>
          <StructuredListCell>
            <Dropdown
              selectedId={0}
              items={[
                { id: 0, text: 'Голова/Шея' },
                { id: 1, text: 'Тело' }
              ]}
            />
          </StructuredListCell>
          <StructuredListCell>
            <Dropdown
              selectedId={0}
              items={[
                { id: 0, text: 'Голова/Шея' },
                { id: 1, text: 'Тело' }
              ]}
            />
          </StructuredListCell>
        </StructuredListRow>
      {/if}
      <StructuredListRow>
        <StructuredListCell noWrap>Позиция</StructuredListCell>
        <StructuredListCell>
          <NumberInput bind:value={targetPosition} {...ranges.targetPosition} {units} />
        </StructuredListCell>
        <StructuredListCell>
          <div class="grid grid-cols-2 gap-4">
            <NumberInput readonly value={actualPosition} {units} />
            <NumberInput disabled />
          </div>
        </StructuredListCell>
      </StructuredListRow>
      <StructuredListRow>
        <StructuredListCell noWrap>Скорость</StructuredListCell>
        <StructuredListCell>
          <NumberInput bind:value={velocity} {...ranges.velocity} units="{units}/с" />
        </StructuredListCell>
        <StructuredListCell>
          <div class="grid grid-cols-2 gap-4">
            <NumberInput readonly value={actualVelocity} units="{units}/с" />
          </div>
        </StructuredListCell>
      </StructuredListRow>
      <!-- <StructuredListRow>
        <StructuredListCell noWrap>Ускорение</StructuredListCell>
        <StructuredListCell>
          <NumberInput bind:value={acceleration} {...ranges.acceleration} units="{units}/c²" />
        </StructuredListCell>
      </StructuredListRow> -->
    </StructuredListBody>
  </StructuredList>

  <div class="flex flex-col gap-2">
    <div>
      <Checkbox labelText="по умолчанию" />
    </div>
    <div>
      <Checkbox labelText="по умолчанию" />
    </div>
    <Button
      on:click={() =>
        startMove({
          targetPosition,
          velocity,
          acceleration
        })}
    >
      Старт
    </Button>
    <Button disabled={stop == null} on:click={() => stop && stop()}>Стоп</Button>
    <Button>Инициализация</Button>
    {#if setOrigin != null}
      <Button on:click={() => setOrigin()}>Задать текущее положение</Button>
    {/if}
  </div>

  <div class="w-300px">
    <StructuredList>
      <StructuredListHead>
        <StructuredListRow head />
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell noWrap>Драйвер</StructuredListCell>
          <StructuredListCell>❔</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell noWrap>Концевой выключатель 1</StructuredListCell>
          <StructuredListCell>
            {#if true}
              ❔
            {:else if true}
              ✅
            {:else}
              ❌
            {/if}
          </StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell noWrap>Концевой выключатель 2</StructuredListCell>
          <StructuredListCell>
            {#if true}
              ❔
            {:else if true}
              ✅
            {:else}
              ❌
            {/if}
          </StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell noWrap>
            <div class="">
              <p>Тормоз</p>

              <Toggle disabled size="sm">
                <span slot="labelA" />
                <span slot="labelB" />
              </Toggle>
            </div>
          </StructuredListCell>
          <StructuredListCell>❔</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredList>
  </div>
</div>

<!-- <Djson item={drive} /> -->
