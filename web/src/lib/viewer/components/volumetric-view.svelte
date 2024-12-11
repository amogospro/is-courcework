<script lang="ts">
  import { onMount } from 'svelte';
  import { Scatter } from 'svelte-chartjs';
  import annotationPlugin from 'chartjs-plugin-annotation';
  import _ from 'lodash';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    type ChartData
  } from 'chart.js';
  import type { ViewerCore } from '../core';
  import type { Settings } from '../../utils';
  import View from './view.svelte';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    annotationPlugin
  );

  const data: ChartData<'scatter', any[]> = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: '#fff',
        backgroundColor: '#fff',
        showLine: true,
        pointRadius: 0
      }
    ]
  };
  let wl = 0;

  export let volumeElement: HTMLDivElement;
  export let core: ViewerCore;
  export let settings: Settings;

  export let activeElement: HTMLDivElement | null;
  let info: string = '';

  onMount(() => {
    core.onWindow = (cur_wl, scale, arr) => {
      wl = cur_wl;
      const chunks = _.chunk(arr, 2);
      info = `WL: ${Math.round(wl)} scale:${Math.round(scale * 100) / 100}`;
      data.datasets[0].data = chunks;
    };
  });
</script>

<div class="w-full h-full flex flex-col relative">
  <View {settings} core={core} bind:activeElement class="grow h-full" bind:element={volumeElement} />

  {#if settings.annotations}
    <div class="absolute bottom-70px right-10px flex gap-2">
      <Scatter
        {data}
        height="100px"
        width="200px"
        options={{
          responsive: false,
          animation: {
            duration: 0
          },
          scales: {
            x: {
              min: -1000,
              max: 1000,
              ticks: {
                color: '#fff'
              },
              grid: {
                display: false
              }
            },
            y: {
              min: 0,
              max: 1,
              ticks: {
                color: '#fff'
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            annotation: {
              annotations: {
                box1: {
                  type: 'line',
                  xMin: wl,
                  xMax: wl,
                  yMin: 0,
                  yMax: 1,
                  borderWidth: 3,
                  borderColor: '#0353e9'
                }
              }
            }
          }
        }}
      />
    </div>
  {/if}
</div>
