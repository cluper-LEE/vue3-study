<script setup>
import { ref, useAttrs, onMounted, reactive } from "vue";
const attrs = useAttrs();
const props = defineProps({
  type: {
    type: String,
    default: "button",
    validator: (value) => {
      const allowed = ["button", "submit", "reset", "switch"];
      return allowed.includes(value);
    },
  },
  sm: Boolean,
  md: {
    type: Boolean,
    default: true,
  },
  lg: Boolean,
  pill: Boolean,
  active: {
    type: Boolean,
    default: true,
  },
});

const classes = ref([]);
const button = ref(null);
const active = ref(props.active);

if (props.sm) classes.value.push("sm");
else if (props.lg) classes.value.push("lg");
else classes.value.push("md");

if (props.pill) classes.value.push("pill");

const onSwitch = () => {
  active.value = !active.value;
  if (active.value) {
    classes.value = classes.value.filter((c) => c != "deactive");
  } else {
    classes.value.push("deactive");
  }
};
const emit = defineEmits(["update:active"]);
const onClick = () => {
  switch (props.type) {
    case "switch":
      onSwitch();
      emit("update:active", active.value);
      break;
    default:
      break;
  }
};

onMounted(() => {
  Object.keys(attrs).forEach((attr) => {
    if (attr.startsWith("text-")) {
      button.value.style.color = attr.substring(5);
    }
    if (attr.startsWith("background-")) {
      button.value.style.backgroundColor = attr.substring(11);
    }
  });
});
</script>

<template>
  <button
    v-bind="attrs"
    :type="type"
    :class="classes"
    ref="button"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  outline: none;
}
.sm {
  height: 20px;
  font-size: 13px;
}
.md {
  height: 40px;
  font-size: 31px;
}
.pill {
  border-radius: 16px;
}
.deactive {
  filter: brightness(50%);
}
</style>
