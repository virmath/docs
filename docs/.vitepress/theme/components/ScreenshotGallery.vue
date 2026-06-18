<template>
  <div class="screenshot-gallery-wrap">
    <!-- Gallery -->
    <div class="gallery-viewport" ref="viewportRef" @scroll="onScroll">
      <div class="gallery-track">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="gallery-card"
          role="button"
          tabindex="0"
          :aria-label="'查看大图：' + img.alt"
          @click="openLightbox(i)"
          @keydown.enter="openLightbox(i)"
          @keydown.space.prevent="openLightbox(i)"
        >
          <img :src="img.src" :alt="img.alt" loading="lazy" class="gallery-img" />
        </div>
      </div>
    </div>
    <div class="gallery-dots">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="dot"
        :class="{ active: current === i }"
        @click="goTo(i)"
        :aria-label="'第 ' + (i + 1) + ' 张截图'"
      />
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightboxIndex !== null"
      class="lightbox-overlay"
      @click.self="closeLightbox"
    >
      <button
        class="lightbox-close"
        @click="closeLightbox"
        aria-label="关闭大图"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <button
        v-if="images.length > 1"
        class="lightbox-nav lightbox-prev"
        @click="prevImage"
        aria-label="上一张"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <button
        v-if="images.length > 1"
        class="lightbox-nav lightbox-next"
        @click="nextImage"
        aria-label="下一张"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div class="lightbox-content">
        <img :src="images[lightboxIndex]?.src" :alt="images[lightboxIndex]?.alt" class="lightbox-img" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue"
import { useData } from "vitepress"

const screenshotModules = import.meta.glob("/public/screenshots/*.{png,jpg,jpeg,webp,gif,bmp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

interface Screenshot { src: string; alt: string }

const { lang } = useData()

const images = computed<Screenshot[]>(() =>
  Object.entries(screenshotModules)
    .map(([filepath, url]) => ({
      src: (lang.value === "en" ? "../" : "") + url.replace(/^\/public\//, ""),
      alt: filepath
        .split("/")
        .pop()!
        .replace(/\.\w+$/, "")
        .replace(/[-_]/g, " "),
    }))
    .sort((a, b) => a.alt.localeCompare(b.alt))
)

const current = ref(0)
const lightboxIndex = ref<number | null>(null)
const viewportRef = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | null = null

function onScroll() {
  const el = viewportRef.value
  if (!el) return
  const idx = Math.round(el.scrollLeft / el.clientWidth)
  current.value = idx
}

function goTo(i: number) {
  const el = viewportRef.value
  if (!el) return
  el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" })
  current.value = i
}

function openLightbox(i: number) {
  lightboxIndex.value = i
}

function closeLightbox() {
  lightboxIndex.value = null
}

function prevImage() {
  if (lightboxIndex.value === null || images.value.length === 0) return
  lightboxIndex.value = (lightboxIndex.value - 1 + images.value.length) % images.value.length
}

function nextImage() {
  if (lightboxIndex.value === null || images.value.length === 0) return
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length
}

function onKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return
  switch (e.key) {
    case "Escape":
      closeLightbox()
      break
    case "ArrowLeft":
      e.preventDefault()
      prevImage()
      break
    case "ArrowRight":
      e.preventDefault()
      nextImage()
      break
  }
}

// Pause autoplay while lightbox is open
watch(lightboxIndex, (val) => {
  if (val !== null) {
    stopAutoPlay()
  } else if (images.value.length > 0) {
    startAutoPlay()
  }
})

function next() {
  const el = viewportRef.value
  if (!el || images.value.length === 0) return
  const nextIdx = (current.value + 1) % images.value.length
  goTo(nextIdx)
}

function startAutoPlay() {
  stopAutoPlay()
  timer = setInterval(next, 5000)
}

function stopAutoPlay() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown)
  startAutoPlay()
})

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown)
  stopAutoPlay()
})
</script>

<style scoped>
.screenshot-gallery-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px 24px;
}

.gallery-viewport {
  overflow: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.gallery-viewport::-webkit-scrollbar {
  display: none;
}

.gallery-track {
  display: flex;
}

.gallery-card {
  flex: 0 0 100%;
  scroll-snap-align: start;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px var(--vp-c-shadow, rgba(0, 0, 0, 0.12));
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
  cursor: pointer;
}

.gallery-card:hover {
  transform: scale(1.02);
}

.gallery-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
}

.gallery-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--vp-c-border);
  transition: background 0.2s, transform 0.2s;
}

.dot.active {
  background: var(--vp-c-brand-1);
  transform: scale(1.3);
}

.dot:hover {
  background: var(--vp-c-brand-2);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}

.lightbox-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  display: block;
  cursor: default;
}

.lightbox-close {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.7);
}

.lightbox-prev {
  left: 16px;
}

.lightbox-next {
  right: 16px;
}
</style>
