<template>
  <div data-theme="dark">

    <GoodNav ref="nav" />

    <NuxtPage />

    <MyFooter />
  </div>
</template>

<script setup>
  // nav = template ref
  // scrollTop can pass current window scrollTop
  // to child components
  
  const nav = ref(null)
  const scrollTop = ref(0)
  let scrolling = false

  const handleScroll = () => {
    // determine scroll direction and call all
    // scroll child methods from here

    let newScrollTop = document.documentElement.scrollTop

    if (newScrollTop >= scrollTop.value) {
      nav.value?.scrollDown()
    } else {
      nav.value?.scrollUp()
    }

    scrollTop.value = newScrollTop
  }

  onMounted(() => {
    document.addEventListener('scroll', () => scrolling = true)

    setInterval(() => {
      // throttle scroll event

      if (scrolling) {
        scrolling = false

        handleScroll()
      }
    }, 300)
  })
  


</script>
