<template>
  <div @scroll="handleScroll" data-theme="dark">

    <TopNav ref="nav" />

    <NuxtPage />

    <MyFooter />
  </div>
</template>

<script setup>
  const nav = ref(null)
  const scrollTop = ref(0)

  const handleScroll = () => {
    let newScrollTop = document.documentElement.scrollTop

    if (newScrollTop >= scrollTop.value) {
      nav.value?.scrollDown()
    } else {
      nav.value?.scrollUp()
    }

    console.log('new', newScrollTop, 'old', scrollTop.value)

    scrollTop.value = newScrollTop
    // console.log(scrollTop.value)
  }

  onMounted(() => {
    document.addEventListener('scroll', handleScroll)
    console.log(nav.value)
  })
  


</script>
