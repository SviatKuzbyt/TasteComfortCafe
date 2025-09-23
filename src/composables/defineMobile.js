import { ref, onMounted, onUnmounted } from "vue"

export function defineMobile() {
  const isMobile = ref(false)

  let mediaQuery

  const updateIsMobile = (e) => {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia("(max-width: 1024px)")
    isMobile.value = mediaQuery.matches
    mediaQuery.addEventListener("change", updateIsMobile)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener("change", updateIsMobile)
  })

  return { isMobile }
}