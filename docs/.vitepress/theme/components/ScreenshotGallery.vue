<template>
  <div class="screenshot-gallery-wrap">
    <div class="gallery-viewport" ref="viewportRef" @scroll="onScroll">
      <div class="gallery-track">
        <div v-for="(img, i) in images" :key="i" class="gallery-card">
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue"

const screenshotModules = import.meta.glob("/public/screenshots/*.{png,jpg,jpeg,webp,gif,bmp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

interface Screenshot { src: string; alt: string }

const images = computed<Screenshot[]>(() =>
  Object.entries(screenshotModules)
    .map(([filepath, url]) => ({
      src: url.replace(/^\/public\//, ""),
      alt: filepath
        .split("/")
        .pop()!
        .replace(/\.\w+$/, "")
        .replace(/[-_]/g, " "),
    }))
    .sort((a, b) => a.alt.localeCompare(b.alt))
)

const current = ref(0)
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

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())
</script>

<style scoped>
.screenshot-gallery-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 8px 24px 0;
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
}

.gallery-card:hover {
  transform: scale(1.02);
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
</style>
