<template>
  <div v-if="hasAnyContact" class="contact-panel">
    <div class="contact-panel-inner">
      <h2 class="contact-heading">{{ t.heading }}</h2>
      <p class="contact-subtitle">{{ t.subtitle }}</p>

      <div class="contact-items">
        <!-- Social row: Email + GitHub + Bilibili -->
        <div v-if="hasSocial" class="contact-row">
          <a v-if="email" :href="'mailto:' + email" class="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
            <span>{{ email }}</span>
          </a>

          <a v-if="githubLink" :href="githubLink" class="contact-item" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <span>GitHub</span>
          </a>

          <a v-if="bilibiliLink" :href="bilibiliLink" class="contact-item" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><polygon points="10,8.5 10,15.5 16,12"/><circle cx="7" cy="2.5" r="2.5"/><circle cx="17" cy="2.5" r="2.5"/></svg>
            <span>Bilibili</span>
          </a>
        </div>

        <!-- QQ groups row -->
        <div v-if="qqGroups.length" class="contact-row">
          <a
            v-for="(group, i) in qqGroups"
            :key="i"
            :href="group.link"
            class="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            <span>{{ qqGroupLabel(i) }}: {{ group.number }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

const props = withDefaults(defineProps<{
  email?: string
  qqGroups?: Array<{ number: string; link: string }>
  githubLink?: string
  bilibiliLink?: string
}>(), {
  email: '',
  qqGroups: () => [],
  githubLink: '',
  bilibiliLink: '',
})

const { lang } = useData()

const hasSocial = computed(() => !!(props.email || props.githubLink || props.bilibiliLink))
const hasAnyContact = computed(() => hasSocial.value || props.qqGroups.length > 0)

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

function qqGroupLabel(index: number) {
  if (props.qqGroups.length <= 1) return t.value.qqGroup
  const label = t.value.qqGroup
  return `${label} ${index + 1}`
}
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
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.contact-row {
  display: flex;
  justify-content: center;
  gap: 12px;
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
