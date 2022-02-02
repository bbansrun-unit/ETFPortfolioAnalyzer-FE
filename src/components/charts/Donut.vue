<template>
  <Responsive class="w-full">
    <template #main>
      <Chart
        direction="circular"
        :data="data"
        :margin="{
          left: Math.round((width - 360) / 2),
          top: 20,
          right: 0,
          bottom: 20,
        }"
        :config="{ controlHover: false }"
      >
        <template #layers>
          <Pie
            :dataKeys="['group', 'value']"
            :pieStyle="{ innerRadius: 100, padAngle: 0.05 }"
          />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              group: {},
              value: { label: 'value' },
            }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
import { Chart, Responsive, Pie, Tooltip } from "vue3-charts";

export default {
  props: ["data"],
  components: { Chart, Responsive, Pie, Tooltip },
};
</script>
