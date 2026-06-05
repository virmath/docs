<template>
  <div class="contact-panel">
    <div class="contact-panel-inner">
      <h2 class="contact-heading">{{ t.heading }}</h2>
      <p class="contact-subtitle">{{ t.subtitle }}</p>

      <div class="contact-items">
        <a :href="'mailto:' + email" class="contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
          <span>{{ email }}</span>
        </a>

        <a :href="qqGroupLink" class="contact-item" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <span>{{ t.qqGroup }}: {{ qqGroup }}</span>
        </a>

        <a :href="githubLink" class="contact-item" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

withDefaults(defineProps<{
  email?: string
  qqGroup?: string
  qqGroupLink?: string
  githubLink?: string
}>(), {
  email: 'hello@example.com',
  qqGroup: '123456789',
  qqGroupLink: '#',
  githubLink: '#',
})

const { lang } = useData()

const messages: Record<string, Record<string, string>> = {
  zh: {
    heading: "联系我们",
    subtitle: "通过以下方式与我们取得联系",
    qqGroup: "QQ 群",
  },
  en: {
    heading: "Contact Us",
    subtitle: "Get in touch with us through the following channels",
    qqGroup: "QQ Group",
  },
}

const t = computed(() => messages[lang.value] ?? messages.zh)
</script>

<style scoped>
.contact-panel {
  padding: 8px 24px 48px;
}

.contact-panel-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.contact-heading {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--vp-c-text-1);
  letter-spacing: 0;
}

.contact-subtitle {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 24px;
}

.contact-items {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  text-decoration: none;
  transition: all 0.2s;
}

.contact-item:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.contact-item svg {
  flex-shrink: 0;
}
</style>
