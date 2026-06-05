<template>
  <div class="download-panel">
    <div class="download-header">
      <h2 class="download-heading">{{ t.heading }}</h2>
      <p class="download-subtitle">{{ t.subtitle }}</p>
    </div>
    <div class="download-panel-inner">
      <div class="download-meta">
        <span class="meta-badge version-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {{ version }}
        </span>
        <span class="meta-badge version-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          {{ releaseDate }}
        </span>
        <span class="meta-badge platform-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="15" y2="22"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
          {{ platforms }}
        </span>
      </div>

      <div class="download-actions">
        <a :href="downloadUrl" class="download-btn primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          {{ t.downloadNow }}
        </a>
        <a :href="chinaDownloadUrl" class="download-btn secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          {{ t.chinaDownload }}
        </a>
      </div>

      <div class="download-links">
        <a :href="allDownloadsUrl" class="link-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          {{ t.viewAll }}
        </a>
        <a :href="changelogUrl" class="link-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          {{ t.changelog }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

withDefaults(defineProps<{
  downloadUrl?: string
  chinaDownloadUrl?: string
  allDownloadsUrl?: string
  changelogUrl?: string
  version?: string
  releaseDate?: string
  platforms?: string
}>(), {
  downloadUrl: '#',
  chinaDownloadUrl: '#',
  allDownloadsUrl: '#',
  changelogUrl: '#',
  version: 'v1.0.0',
  releaseDate: '2026-06-05',
  platforms: 'Windows x64',
})

const { lang } = useData()

const messages: Record<string, Record<string, string>> = {
  zh: {
    heading: "下载",
    subtitle: "获取最新版本",
    downloadNow: "立即下载",
    chinaDownload: "加速下载（中国）",
    viewAll: "查看全部下载",
    changelog: "查看更新日志",
  },
  en: {
    heading: "Download",
    subtitle: "Get the latest version",
    downloadNow: "Download Now",
    chinaDownload: "Mirror (China)",
    viewAll: "View All Downloads",
    changelog: "Changelog",
  },
}

const t = computed(() => messages[lang.value] ?? messages.zh)
</script>

<style scoped>
.download-panel {
  padding: 32px 24px 8px;
}

.download-header {
  text-align: center;
  margin-bottom: 16px;
}

.download-panel-inner {
  max-width: 720px;
  margin: 0 auto;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px 28px 32px;
  text-align: center;
}

.download-heading {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--vp-c-text-1);
  letter-spacing: 0;
}

.download-subtitle {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.download-meta {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.meta-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
}

.meta-badge svg {
  flex-shrink: 0;
}

.download-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid transparent;
  cursor: pointer;
}

.download-btn svg {
  flex-shrink: 0;
}

.download-btn.primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1-text, #fff);
  border-color: var(--vp-c-brand-1);
}

.download-btn.primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.download-btn.secondary {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-border);
}

.download-btn.secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.download-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.link-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.link-item svg {
  flex-shrink: 0;
}

.link-item:hover {
  color: var(--vp-c-brand-1);
}
</style>
