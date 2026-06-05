<template>
  <div class="pricing-panel">
    <div class="pricing-panel-inner">
      <h2 class="pricing-heading">{{ t.heading }}</h2>
      <p class="pricing-subtitle">{{ t.subtitle }}</p>

      <div class="pricing-cards">
        <!-- Free Tier -->
        <div class="plan-card free-card">
          <div class="plan-header">
            <h3 class="plan-name">{{ t.freeName }}</h3>
          </div>
          <div class="plan-body">
            <div class="plan-price-row">
              <span class="price-amount">0</span>
              <span class="price-unit">{{ t.currencyUnit }}</span>
            </div>
            <div class="plan-duration">/ 30 {{ t.days }}</div>
            <ul class="plan-features">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{{ t.freeInstanceLabel }}</span>
              </li>
            </ul>
          </div>
          <div class="plan-footer">
            <span class="current-badge">{{ t.currentPlan }}</span>
          </div>
        </div>

        <!-- Paid Plans -->
        <div
          v-for="(plan, i) in plans"
          :key="i"
          class="plan-card paid-card"
          :class="{ featured: plan.featured }"
        >
          <div v-if="plan.featured" class="featured-tag">{{ t.recommended }}</div>
          <div class="plan-header">
            <h3 class="plan-name">{{ plan.name[lang] || plan.name.zh }}</h3>
          </div>
          <div class="plan-body">
            <div class="plan-price-row">
              <span class="price-amount">{{ plan.price }}</span>
              <span class="price-unit">{{ plan.currency[lang] || plan.currency.zh }}</span>
            </div>
            <div class="plan-duration">/ {{ plan.days }} {{ t.days }}</div>
            <div class="plan-points">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {{ plan.points }} {{ t.points }}
            </div>
            <ul class="plan-features">
              <li v-for="(feat, j) in plan.features" :key="j">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{{ feat[lang] || feat.zh }}</span>
              </li>
            </ul>
          </div>
          <div class="plan-footer">
            <a :href="plan.ctaUrl" class="plan-btn">{{ plan.cta[lang] || plan.cta.zh }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"

const props = withDefaults(defineProps<{
  plans?: Array<{
    name: { zh: string; en: string }
    price: string
    currency: { zh: string; en: string }
    points: string
    days: string
    features: Array<{ zh: string; en: string }>
    cta: { zh: string; en: string }
    ctaUrl: string
    featured?: boolean
  }>
}>(), {
  plans: () => [],
})

const { lang } = useData()

const messages: Record<string, Record<string, string>> = {
  zh: {
    heading: "积分订阅",
    subtitle: "购买积分兑换订阅特权，按需选择，灵活使用",
    freeName: "免费",
    currentPlan: "当前方案",
    recommended: "推荐",
    points: "积分",
    currencyUnit: "元",
    days: "天",
    freeInstanceLabel: "1 个运行实例",
  },
  en: {
    heading: "Points Subscription",
    subtitle: "Buy points and redeem subscription privileges – flexible and on-demand",
    freeName: "Free",
    currentPlan: "Current Plan",
    recommended: "Recommended",
    points: "Points",
    currencyUnit: "RMB",
    days: "Days",
    freeInstanceLabel: "1 Running Instance",
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

.pricing-cards {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.plan-card {
  flex: 1 1 240px;
  max-width: 320px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.plan-card.featured {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}

.featured-tag {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1-text, #fff);
  font-size: 12px;
  font-weight: 600;
  padding: 3px 14px;
  border-radius: 0 0 8px 8px;
  line-height: 1.5;
}

.plan-header {
  padding: 28px 20px 0;
}

.plan-name {
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-text-1);
}

.plan-body {
  padding: 20px 20px 24px;
  flex: 1;
}

.plan-price-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
}

.price-amount {
  font-size: 32px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.free-card .price-amount {
  color: var(--vp-c-text-2);
}

.plan-card.featured .price-amount {
  color: var(--vp-c-brand-1);
}

.price-unit {
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.plan-duration {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
}

.plan-points {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 14px;
}

.plan-points svg {
  flex-shrink: 0;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.plan-features li {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.plan-features li svg {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.plan-footer {
  padding: 0 20px 28px;
}

.current-badge {
  display: inline-block;
  font-size: 13px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-mute);
  padding: 7px 20px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  cursor: default;
}

.plan-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1-text, #fff);
  border: 1px solid var(--vp-c-brand-1);
  cursor: pointer;
}

.plan-btn:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}
</style>
