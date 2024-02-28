<script setup>
import { computed, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconsArrow from '@/components/icons/Arrow.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Select data'
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  list: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: 'name'
  },
  reduce: {
    type: String,
    default: 'id'
  }
})

const search = ref('')
const showList = ref(false)
const target = ref(null)

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (val) => {
    console.log(val, 'model value')
    const data = props.list.find(item => item[props.reduce] === val)
    console.log(data, 'data')
    if (!data) {
      search.value = ''
      return
    }
    search.value = data[props.label]
  }
)

const filterList = computed(() =>
  props.list.filter(item => {
    return item[props.label].toLowerCase().includes(search.value.toLowerCase())
  })
)

const isFilterListEmpty = computed(() => filterList.value.length < 1)

const handleSelect = (item) => {
  console.log('select')
  search.value = item[props.label]
  emit('update:modelValue', item[props.reduce])
  showList.value = false
}

const focus = (event) => {
  console.log('focus')
  showList.value = true
}

const focusOut = (event) => {
  console.log('focus out')
  setTimeout(() => {
    showList.value = false
  }, 100)
}

const handleKeyUp = (event) => {
  console.log('onkeyup')
  emit('update:modelValue', '')
}

onClickOutside(target, () => (showList.value = false))
</script>

<template>
  <div ref="target" class="relative">
    <input
      class="input"
      :placeholder="placeholder"
      v-model="search"
      @focus="focus"
      @blur="focusOut"
      @keyup="handleKeyUp"
    />

    <IconsArrow
      :class="`fill-primary-100 w-7 h-7 transition-transform absolute top-2/4 -translate-y-2/4 right-3 ${showList? '-rotate-180' : ''}`"
    />

    <ul class="list-dropdown" :class="{'active': showList}">
      <li
        v-for="(item, index) in filterList"
        :key="`${item[props.reduce]}-${index}`"
        @click="handleSelect(item)"
      >
        {{ item[props.label] }}
      </li>
      <li v-if="isFilterListEmpty">
        Data not found
      </li>
    </ul>
  </div>
</template>