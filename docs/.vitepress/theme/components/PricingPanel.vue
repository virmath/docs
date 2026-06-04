<template>
  <div class="pricing-panel">
    <div class="pricing-panel-inner">
      <h2 class="pricing-heading">{{ t.heading }}</h2>
      <p class="pricing-subtitle">{{ t.subtitle }}</p>

      <div class="pricing-card">
        <div class="pricing-amount">
          <span class="points-value">3,000</span>
          <span class="points-label">{{ t.points }}</span>
        </div>
        <div class="pricing-equality">
          <span class="equal-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>30 {{ t.currencyUnit }}</span>
          </span>
          <span class="equal-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
          <span class="equal-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>30 {{ t.days }}</span>
          </span>
        </div>
        <div class="pricing-perk">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          {{ t.perk }}
        </div>
        <a href="#" class="pricing-btn">{{ t.buyButton }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

const { lang } = useData()

const messages: Record<string, Record<string, string>> = {
  zh: {
    heading: "积分订阅",
    subtitle: "购买积分兑换订阅特权，按需选择，灵活使用",
    points: "积分",
    currencyUnit: "元",
    days: "天",
    perk: "不限运行实例数",
    buyButton: "了解详情",
  },
  en: {
    heading: "Points Subscription",
    subtitle: "Buy points and redeem subscription privileges – flexible and on-demand",
    points: "Points",
    currencyUnit: "RMB",
    days: "Days",
    perk: "Unlimited Running Instances",
    buyButton: "Learn More",
  },
}

const t = computed(() => messages[lang.value] ?? messages.zh)
</script>

<style scoped>
.pricing-panel {
  padding: 8px 24px 32px;
}

.pricing-panel-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.pricing-heading {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 6px;
  color: var(--vp-c-text-1);
  letter-spacing: 0;
}

.pricing-subtitle {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 24px;
}

.pricing-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 32px 28px;
  text-align: center;
}

.pricing-amount {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  margin-bottom: 20px;
}

.points-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1;
}

.points-label {
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.pricing-equality {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.equal-row {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.equal-row svg {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.equal-arrow {
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
}

.pricing-perk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-mute);
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-brand-1);
  margin-bottom: 24px;
}

.pricing-perk svg {
  flex-shrink: 0;
}

.pricing-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1-text, #fff);
  border: 1px solid var(--vp-c-brand-1);
  cursor: pointer;
}

.pricing-btn:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
</style>
