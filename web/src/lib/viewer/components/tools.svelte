<script lang="ts">
  import { Dropdown, OverflowMenu } from 'carbon-components-svelte';
  import OverflowMenuItem from '../../components/menu-item.svelte';
  import screenfull from 'screenfull';
  import { Button } from 'carbon-components-svelte';
  import Maximize from 'carbon-icons-svelte/lib/Maximize.svelte';
  import Minimize from 'carbon-icons-svelte/lib/Minimize.svelte';
  import { Events, type ViewerCore } from '../core';
  import type { Settings } from '../../utils';
  import Rotate from 'carbon-icons-svelte/lib/Rotate.svelte';
  import { cornerstoneTools } from '$lib/helpers';
  import QBarrier from 'carbon-icons-svelte/lib/QBarrier.svelte';
  import {
    STACK_PRESETS,
    type GridLayout,
    type ViewType,
    PrimaryBinding,
    SecondaryBinding,
    AuxiliaryBinding,
    type Preset2d
  } from '../utils';
  import NumberInput from '$lib/components/number-input.svelte';
  import Tool from './vtool.svelte';
  import ActionContainer from './action-container.svelte';
  import { onMount } from 'svelte';
  import MinMaxWindowLevelTool from '../tools/MinMaxWindowLevelTool';
  import Mousetrap from 'mousetrap';
  import SusCrosshairsTool from '../tools/SusCrosshairsTool';
  import type { Types } from '@cornerstonejs/core';
  import ImageReference from 'carbon-icons-svelte/lib/ImageReference.svelte';
  import { toPng } from 'html-to-image';
  import moment from 'moment';
  import Information from 'carbon-icons-svelte/lib/Information.svelte';

  const {
    PanTool,
    WindowLevelTool,
    StackScrollMouseWheelTool,
    TrackballRotateTool,
    ZoomTool,
    PlanarRotateTool,
    ToolGroupManager,
    ProbeTool,
    LengthTool,
    RectangleROITool,
    EllipticalROITool,
    CircleROITool,
    BidirectionalTool,
    AngleTool,
    CobbAngleTool,
    ArrowAnnotateTool,
    PlanarFreehandROITool,
    Enums: csToolsEnums,
    utilities
  } = cornerstoneTools;
  const { MouseBindings } = csToolsEnums;

  export let core: ViewerCore | null;
  export let annotations: boolean;
  export let enabled: ViewType[];
  export let settings: Settings;
  export let element: HTMLElement;
  export let viewElement: HTMLElement;
  export let view: ViewType;
  export let defaultViewPorts: () => string[];

  let selected_preset_idx: number = 0;
  let selected_layout = '2 Columns [1|2]';
  export let activeElement: HTMLDivElement | null;

  export let layouts: GridLayout[];
  export let layout: GridLayout | null;

  let icon = Maximize;

  $: core?.setMeasurements(settings.measurements);
  $: core?.volume_view?.selectPreset?.(core?.presets[selected_preset_idx].text);

  $: core?.emitter.on(Events.TOOL_SET, () => {
    refreshMouseBindings();
  });

  const custom_2d_preset: Preset2d = {
    id: 0,
    text: 'custom',
    name: 'custom',
    wl: 40,
    ww: 400,
    custom: true
  };
  const presets_2d: Preset2d[] = STACK_PRESETS.map(({ name, ww, wl }, idx) => ({
    id: idx + 1,
    text: `${name} ww:${ww} wl:${wl}`,
    name,
    wl,
    ww,
    custom: false
  }));
  const select2dPreset = (preset: Preset2d) => {
    const viewport_ids = defaultViewPorts();
    core?.applyPreset(viewport_ids, preset);
  };

  const refreshMouseBindings = () => {
    if (!core) return;
    const { activeTools } = core.getToolState();
    settings.lmb = activeTools.get(JSON.stringify(PrimaryBinding)) || '';
    settings.rmb = activeTools.get(JSON.stringify(SecondaryBinding)) || '';
    settings.mmb = activeTools.get(JSON.stringify(AuxiliaryBinding)) || '';
  };
  const changeLMBTool = (e: CustomEvent<string | number>) => {
    const value = e.detail.toString();
    core?.setTool(value, MouseBindings.Primary);
  };

  const changeRMBTool = (e: CustomEvent<string | number>) => {
    const value = e.detail.toString();
    core?.setTool(value, MouseBindings.Secondary);
  };

  const changeMMBTool = (e: CustomEvent<string | number>) => {
    const value = e.detail.toString();
    core?.setTool(value, MouseBindings.Auxiliary);
  };

  const reset = () => {
    core?.reset(defaultViewPorts());
  };

  const addPan = (offset: [number, number]) => {
    core?.addPan(defaultViewPorts(), offset);
  };

  const addZoom = (offset: number) => {
    core?.addZoom(defaultViewPorts(), offset);
  };

  const setZoom = (zoom: number) => {
    core?.setZoom(defaultViewPorts(), zoom);
  };

  const addRotation = (offset: [number, number]) => {
    core?.addRotation(defaultViewPorts(), offset);
  };

  const setPreset = (idx: number) => {
    const preset = core?.presets[idx];
    if (!preset) return;
    core?.volume_view?.selectPreset?.(preset.text);
  };

  onMount(async () => {
    setTimeout(() => {
      refreshMouseBindings();
    });

    // f3 - grid axis
    // ctrl+ -+ - zoom
    // arrows - change rotation
    // ctrl+arrows - change pan
    // esc - reset
    // f12 - annotations

    const mousetrap = new Mousetrap(viewElement);
    mousetrap.bind('r', (e, s) => {
      reset();
      e.preventDefault();
    });

    mousetrap.bind(['up', 'down', 'left', 'right'], (e, s) => {
      const offset = [0, 0] as [number, number];
      const shift = 10;

      if (s.includes('up')) offset[1] -= shift;
      if (s.includes('down')) offset[1] += shift;

      if (s.includes('right')) offset[0] += shift;
      if (s.includes('left')) offset[0] -= shift;
      addRotation(offset);
      e.preventDefault();
    });

    mousetrap.bind(['ctrl+up', 'ctrl+down', 'ctrl+left', 'ctrl+right'], (e, s) => {
      const offset = [0, 0] as [number, number];
      const shift = 50;

      if (s.includes('up')) offset[1] -= shift;
      if (s.includes('down')) offset[1] += shift;

      if (s.includes('right')) offset[0] += shift;
      if (s.includes('left')) offset[0] -= shift;
      addPan(offset);
      e.preventDefault();
    });

    mousetrap.bind('0', (e, s) => {
      defaultWindow();
      e.preventDefault();
    });

    mousetrap.bind(['1', '2', '3', '4', '5', '6', '7', '8', '9'], (e, s) => {
      console.log(s);
      setPreset(Number(s) - 1);
      e.preventDefault();
    });

    mousetrap.bind(['ctrl+=', 'ctrl+-'], (e, s) => {
      let offset = 1;
      const shift = 0.1;

      if (s.includes('-')) offset -= shift;
      if (s.includes('=')) offset += shift;

      addZoom(offset);
      e.preventDefault();
    });

    mousetrap.bind('f3', (e, s) => {
      settings.axis = !settings.axis;
      core?.grid_view?.toggleAxis(settings.axis);
      e.preventDefault();
    });
    mousetrap.bind('f11', (e, s) => {
      core?.stack_view?.toggleInvert();
      e.preventDefault();
    });
    mousetrap.bind('ctrl+f11', (e, s) => {
      settings.sync = !settings.sync;
      e.preventDefault();
    });
    mousetrap.bind('f12', (e, s) => {
      settings.annotations = !settings.annotations;
      e.preventDefault();
    });
    mousetrap.bind('shift+f12', (e, s) => {
      settings.patient_data = !settings.patient_data;
      e.preventDefault();
    });
    mousetrap.bind('alt+f12', (e, s) => {
      settings.measurements = !settings.measurements;
      e.preventDefault();
    });
    mousetrap.bind('ctrl+alt+t', (e, s) => {
      settings.dicom_tags = !settings.dicom_tags;
      e.preventDefault();
    });
    mousetrap.bind('ctrl+f3', (e, s) => {
      centerAxes();
      e.preventDefault();
    });
    // tools bind
    mousetrap.bind('m', (e, s) => {
      core?.setTool(PanTool.toolName, MouseBindings.Primary);
      e.preventDefault();
    });
    mousetrap.bind('t', (e, s) => {
      core?.setTool(PlanarRotateTool.toolName, MouseBindings.Primary);
      e.preventDefault();
    });
    mousetrap.bind('z', (e, s) => {
      core?.setTool(ZoomTool.toolName, MouseBindings.Primary);
      e.preventDefault();
    });
    mousetrap.bind('l', (e, s) => {
      core?.setTool(LengthTool.toolName, MouseBindings.Primary);
      e.preventDefault();
    });
    mousetrap.bind('e', (e, s) => {
      core?.setTool(EllipticalROITool.toolName, MouseBindings.Primary);
      e.preventDefault();
    });
    mousetrap.bind('del', (e, s) => {
      core?.removeSelectedMeasurement();
      e.preventDefault();
    });

    mousetrap.bind(['ctrl+0', 'ctrl+1', 'ctrl+2', 'ctrl+3', 'ctrl+4'], (e, s) => {
      let zoom = 1;

      if (s.includes('1')) zoom = 1;
      if (s.includes('2')) zoom = 2;
      if (s.includes('3')) zoom = 4;
      if (s.includes('4')) zoom = 8;

      setZoom(zoom);
      e.preventDefault();
    });
  });

  const nextLayout = () =>
    (layout = layouts[((layout ? layouts.indexOf(layout) : 0) + 1) % layouts.length]);
  const defaultWindow = () => {
    core?.setWindow(defaultViewPorts(), core?.metadata.WindowWidth, core?.metadata.WindowCenter);
  };

  const centerAxes = () => {
    const grid_view = core?.grid_view;
    if (!grid_view) return;

    const crosshair: SusCrosshairsTool | undefined =
      grid_view.toolState.toolGroup?._toolInstances[SusCrosshairsTool.toolName];
    if (!crosshair) return;

    const center = crosshair.toolCenter;
    grid_view.gridViewportIds.forEach((viewportId) => {
      const viewport = core?.renderingEngine.getViewport(viewportId);
      if (!viewport) return;

      const camera = viewport.getCamera();
      const { focalPoint, position } = camera;

      if (!focalPoint || !position) return;

      // Calculate the vector from the current center to the new center
      const vectorToNewCenter: Types.Point3 = [
        center[0] - focalPoint[0],
        center[1] - focalPoint[1],
        center[2] - focalPoint[2]
      ];

      // Calculate the new focal point by adding the vector to the new center
      const newFocalPoint: Types.Point3 = [
        focalPoint[0] + vectorToNewCenter[0],
        focalPoint[1] + vectorToNewCenter[1],
        focalPoint[2] + vectorToNewCenter[2]
      ];

      // Calculate the new position by adding the same vector to the current position
      const newPosition: Types.Point3 = [
        position[0] + vectorToNewCenter[0],
        position[1] + vectorToNewCenter[1],
        position[2] + vectorToNewCenter[2]
      ];

      // Update the viewport camera with the new position and focal point
      viewport?.setCamera({
        focalPoint: newFocalPoint,
        position: newPosition
      });
      viewport.render();
    });
  };
</script>

<div
  class="flex w-full gap-2 items-center flex-wrap bg-#f4f4f4 border-#8d8d8d py-2 px-4 rounded-t-4px"
>
  {#if enabled.length > 1}
    {#if enabled.includes('2d')}
      <ActionContainer
        tooltip="Режим просмотра: 2d"
        lmb={() => {
          view = '2d';
        }}
        text="2D"
        id="viewer_2d_mode_button"
      />
    {/if}

    {#if enabled.includes('3d')}
      <ActionContainer
        tooltip="Режим просмотра: 3D"
        lmb={() => {
          view = '3d';
        }}
        text="3D"
        id="viewer_3d_mode_button"
      />
    {/if}

    {#if enabled.includes('grid')}
      <ActionContainer
        tooltip="Режим просмотра: сетка"
        lmb={() => {
          view = 'grid';
        }}
        text="сетка"
        id="viewer_grid_mode_button"
      />
    {/if}

    <QBarrier />
  {/if}

  {#if true}
    <Tool lmb={reset} display="Сброс" name="Refresh" src="/icons/viewer/refresh.png" shortcut="R" />

    {#if view === 'grid'}
      <Tool {core} display="Оси" name={SusCrosshairsTool.toolName} src="/icons/viewer/axes.png" />
    {/if}

    <Tool
      {core}
      display="Перемещение"
      name={PanTool.toolName}
      src="/icons/viewer/pan.png"
      shortcut="M"
    />

    <Tool
      {core}
      display="Вращение"
      name={PlanarRotateTool.toolName}
      src="/icons/viewer/rotate.png"
      shortcut="T"
    />

    <Tool
      {core}
      display="Масштаб"
      name={ZoomTool.toolName}
      src="/icons/viewer/zoom.png"
      shortcut="Z"
    >
      <svelte:fragment slot="extra">
        <OverflowMenuItem on:click={() => setZoom(1)} text="Во весь экран (Ctrl+0)" />
        <OverflowMenuItem on:click={() => setZoom(1)} text="100% (Ctrl+1)" />
        <OverflowMenuItem on:click={() => setZoom(2)} text="200% (Ctrl+2)" />
        <OverflowMenuItem on:click={() => setZoom(4)} text="400% (Ctrl+3)" />
        <OverflowMenuItem on:click={() => setZoom(8)} text="800% (Ctrl+4)" />
        <OverflowMenuItem on:click={() => addZoom(1.1)} text="Увеличить (Ctrl++)" />
        <OverflowMenuItem on:click={() => addZoom(0.9)} text="Уменьшить (Ctrl+-)" />
      </svelte:fragment>
    </Tool>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <Tool
      {core}
      prefix="Окно просмотра: "
      tools={[
        { display: 'положение / ширина', name: WindowLevelTool.toolName },
        { display: 'мин / макс', name: MinMaxWindowLevelTool.toolName }
      ]}
      src="/icons/viewer/window.png"
      shortcut="W"
    >
      <svelte:fragment slot="extra">
        <OverflowMenuItem on:click={defaultWindow} text="Окно по-умолчанию" />

        <OverflowMenuItem
          on:click={() => {
            core?.stack_view?.toggleInvert();
          }}
          checked={core?.stack_view?.viewport?.getProperties().invert}
          text="Негатив"
        />

        <OverflowMenuItem
          on:click={() => {
            settings.sync = !settings.sync;
          }}
          checked={settings.sync}
          text="Синхронизация окон"
        />

        {#if view === 'grid' || view === '2d'}
          {#each presets_2d as preset}
            <OverflowMenuItem
              on:click={() => {
                select2dPreset(preset);
              }}
              text={preset.text}
            />
          {/each}

          <OverflowMenuItem
            on:click={() => {
              select2dPreset(custom_2d_preset);
            }}
          >
            <div class="flex gap-2 items-center">
              <p>custom</p>
              <div class="flex gap-2 items-center" on:click|stopPropagation on:keydown on:keyup>
                <p>ww:</p>
                <NumberInput class="w-50px!" hideSteppers bind:value={custom_2d_preset.ww} />
                <p>wl:</p>
                <NumberInput class="w-50px!" hideSteppers bind:value={custom_2d_preset.wl} />
              </div>
            </div>
          </OverflowMenuItem>
        {/if}
      </svelte:fragment>
    </Tool>

    <Tool
      {core}
      prefix="Измерения: "
      tools={[
        { display: 'Линейка (L)', name: LengthTool.toolName },
        { display: 'Эллипс (E)', name: EllipticalROITool.toolName },
        { display: 'CircleROITool', name: CircleROITool.toolName },
        { display: 'RectangleROITool', name: RectangleROITool.toolName },
        { display: 'PlanarFreehandROITool', name: PlanarFreehandROITool.toolName }
      ]}
      src="/icons/viewer/measurement.png"
    >
      <svelte:fragment slot="extra">
        <OverflowMenuItem
          on:click={() => core?.removeSelectedMeasurement()}
          text="Удалить текущую аннотацию (Del)"
        />
        <OverflowMenuItem
          on:click={() => core?.removeAllMeasurement()}
          text="Удалить все аннотации"
        />
      </svelte:fragment>
    </Tool>
    {#if annotations}
      <Tool
        lmb={() => (settings.annotations = !settings.annotations)}
        display="Аннотация"
        name="Annotation"
        src="/icons/viewer/a.png"
        shortcut="F12"
        menu
      >
        <svelte:fragment slot="extra">
          <OverflowMenuItem
            on:click={() => (settings.annotations = !settings.annotations)}
            text="{settings.annotations ? 'Скрыть' : 'Показать'} текст (F12)"
          />
          <OverflowMenuItem
            on:click={() => (settings.measurements = !settings.measurements)}
            text="{settings.measurements ? 'Скрыть' : 'Показать'} измерения (Alt+F12)"
          />
          <OverflowMenuItem
            on:click={() => (settings.patient_data = !settings.patient_data)}
            text="{settings.patient_data ? 'Скрыть' : 'Показать'} данные пациента (Shift+F12)"
          />
          <OverflowMenuItem
            on:click={() => (settings.dicom_tags = !settings.dicom_tags)}
            text="{settings.dicom_tags ? 'Скрыть' : 'Показать'} DICOM тэги"
          />
        </svelte:fragment>
      </Tool>
    {/if}
  {/if}

  {#if view === '3d'}
    <QBarrier />
    <p>3D</p>

    <Dropdown
      class="grow"
      titleText="Preset"
      bind:selectedId={selected_preset_idx}
      items={core?.presets}
    />
  {:else if view === '2d'}
    <QBarrier />
    <p>2D</p>
    <OverflowMenu icon={Rotate}>
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.rotate(90);
        }}
        text="Rotate 90° CW"
      />
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.rotate(-90);
        }}
        text="Rotate 90° CCW"
      />
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.flipH();
        }}
        text="Flip horizontal"
      />
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.flipV();
        }}
        text="Flip vertical"
      />
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.resetViewport();
        }}
        text="Clear transformations"
      />
      <OverflowMenuItem
        on:click={() => {
          core?.stack_view?.toggleInvert();
        }}
        text="Invert"
      />
    </OverflowMenu>
  {:else if view === 'grid'}
    <QBarrier />
    <p>Сетка</p>

    <Tool
      lmb={() => {
        if (core && core.grid_view) {
          settings.axis = !settings.axis;
          core.grid_view.toggleAxis(settings.axis);
        }
      }}
      display="Оси"
      name="Axes"
      src="/icons/viewer/axes.png"
      shortcut="F3"
      menu
    >
      <svelte:fragment slot="extra">
        <OverflowMenuItem on:click={centerAxes} text="Выровнять оси" />
      </svelte:fragment>
    </Tool>

    <Tool lmb={nextLayout} display="Сетка" name="Split" src="/icons/viewer/grid.png" menu>
      <svelte:fragment slot="extra">
        {#each layouts as { name }}
          <OverflowMenuItem
            checked={layout?.name === name}
            on:click={() => (layout = layouts.filter((item) => name === item.name)[0])}
            text={name}
          />
        {/each}

        <OverflowMenuItem on:click={nextLayout} text="Следующий вид" />
        <OverflowMenuItem
          on:click={() => {
            activeElement?.dispatchEvent(new Event('TOGGLE_FULL'));
          }}
          text="Во весь экран"
        />
      </svelte:fragment>
    </Tool>
  {/if}

  {#if $$slots['extra-tools']}
    <QBarrier />
  {/if}
  <slot name="extra-tools" />

  <Button
    style="margin-left: auto"
    size="small"
    href="/pdf/viewer.pdf"
    icon={Information}
    kind="ghost"
    iconDescription="Показать справку в pdf"
    tooltipPosition="left"
    tooltipAlignment="end"
  />

  <Button
    kind="ghost"
    size="small"
    icon={ImageReference}
    iconDescription="Экспорт скриншота"
    on:click={async () => {
      const dataUrl = await toPng(viewElement);
      const link = document.createElement('a');
      link.download = `viewer-${moment().format()}.png`;
      link.href = dataUrl;
      link.click();
    }}
  />

  <Button
    kind="ghost"
    size="small"
    {icon}
    iconDescription="Полноэкранный режим"
    on:click={async () => {
      await screenfull.toggle(element);
      icon = screenfull.isFullscreen ? Minimize : Maximize;
    }}
  />
</div>
