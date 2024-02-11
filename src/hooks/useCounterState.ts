import { onMounted, ref } from 'vue'

export function useCounterState() {
  const count = ref(0)

  function increment() {
    count.value++
  }

  onMounted(() => {
    console.log('hello')
  })

  return { count, increment }
}
