<template>
  <div
    v-if="state.open"
    ref="menuEl"
    class="sysmenu"
    role="menu"
    aria-label="Quick actions"
    :style="{ left: `${pos.x}px`, top: `${pos.y}px` }"
  >
    <div class="sysmenu-bar" aria-hidden="true"><span>SYS.MENU</span></div>
    <template v-for="sec in sections" :key="sec.label">
      <div role="separator" class="sysmenu-sep" aria-hidden="true">{{ sec.label }}</div>
      <button
        v-for="item in sec.items"
        :key="item.label"
        ref="itemEls"
        type="button"
        role="menuitem"
        class="sysmenu-item"
        :data-active="item.idx === active"
        @click="run(item)"
        @mousemove="active = item.idx"
      >
        {{ item.label === copyLabel && copied ? '> ✓ link copied' : item.label }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useSysMenu } from '~/composables/useSysMenu';

interface MenuItem {
  label: string;
  idx: number;
  run: () => any;
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

const copyLabel = '> copy page link';
const { state, close } = useSysMenu();
const route = useRoute();

const menuEl = ref<HTMLElement | null>(null);
const itemEls = ref<HTMLElement[]>([]);
const pos = ref({ x: 0, y: 0 });
const active = ref(0);
const copied = ref(false);
let lastFocus: HTMLElement | null = null;

const smooth = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const copyLink = async () => {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    // ponytail: legacy fallback only, clipboard API covers modern browsers
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
    close();
  }, 900);
};

const sections = computed<MenuSection[]>(() => {
  let idx = 0;
  const group = (label: string, labels: string[], defs: Omit<MenuItem, 'idx'>[]): MenuSection | null => {
    const items = defs
      .filter((d) => labels.includes(d.label))
      .map((d) => ({ ...d, idx: idx++ }));
    return items.length ? { label, items } : null;
  };
  const all: Omit<MenuItem, 'idx'>[] = [
    { label: '> home', run: () => navigateTo('/') },
    { label: '> projects', run: () => navigateTo('/projects') },
    { label: '> journey', run: () => navigateTo('/journey') },
    { label: '> back to top', run: () => window.scrollTo({ top: 0, behavior: smooth() ? 'smooth' : 'auto' }) },
    { label: copyLabel, run: copyLink },
    { label: '> goto Instagram', run: () => window.open('https://www.instagram.com/baghaztra', '_blank', 'noopener') },
    { label: '> goto GitHub', run: () => window.open('https://github.com/Baghaztra', '_blank', 'noopener') },
    {
      label: '> goto LinkedIn',
      run: () => window.open('https://www.linkedin.com/in/baghaztra-van-ril-8011b0294', '_blank', 'noopener')
    }
  ];
  // ponytail: brand menu is nav-only, page actions stay on right-click
  const visible =
    state.value.source === 'brand'
      ? all.filter((i) => i.label !== '> back to top' && i.label !== copyLabel)
      : all;
  const labels = visible.map((i) => i.label);
  return [
    group('-- NAVIGATE --', labels, all.slice(0, 3)),
    group('-- TOOLS --', labels, all.slice(3, 5)),
    group('-- SOCIAL --', labels, all.slice(5))
  ].filter((s): s is MenuSection => s !== null);
});

const flatCount = computed(() => sections.value.reduce((n, s) => n + s.items.length, 0));

const run = (item: MenuItem) => {
  if (item.label !== copyLabel) close();
  void item.run();
};

const onContextMenu = (e: MouseEvent) => {
  if (e.shiftKey) {
    // Shift+right-click keeps the native browser menu.
    close();
    return;
  }
  e.preventDefault();
  lastFocus = document.activeElement as HTMLElement | null;
  active.value = 0;
  state.value.x = e.clientX;
  state.value.y = e.clientY;
  state.value.source = 'context';
  state.value.open = true;
};

const onKeyDown = (e: KeyboardEvent) => {
  if (!state.value.open) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    close();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    active.value = (active.value + 1) % flatCount.value;
    itemEls.value[active.value]?.focus();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    active.value = (active.value + flatCount.value - 1) % flatCount.value;
    itemEls.value[active.value]?.focus();
  }
};

const onPointerDown = (e: Event) => {
  if (menuEl.value && !menuEl.value.contains(e.target as Node)) close();
};

const clamp = () => {
  if (!menuEl.value) return;
  const r = menuEl.value.getBoundingClientRect();
  pos.value = {
    x: Math.max(8, Math.min(state.value.x, window.innerWidth - r.width - 8)),
    y: Math.max(8, Math.min(state.value.y, window.innerHeight - r.height - 8))
  };
};

watch(
  () => state.value.open,
  (open) => {
    if (!open) {
      lastFocus?.focus?.();
      return;
    }
    pos.value = { x: state.value.x, y: state.value.y };
    active.value = 0;
    nextTick(() => {
      clamp();
      itemEls.value[0]?.focus();
    });
  }
);

watch(() => route.path, close);

onMounted(() => {
  document.addEventListener('contextmenu', onContextMenu);
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('scroll', close, { passive: true });
  window.addEventListener('resize', close);
});

onUnmounted(() => {
  document.removeEventListener('contextmenu', onContextMenu);
  document.removeEventListener('keydown', onKeyDown);
  document.removeEventListener('pointerdown', onPointerDown);
  window.removeEventListener('scroll', close);
  window.removeEventListener('resize', close);
});
</script>
