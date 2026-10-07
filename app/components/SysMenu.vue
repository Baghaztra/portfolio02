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
    <button
      v-for="(item, i) in items"
      :key="item.label"
      ref="itemEls"
      type="button"
      role="menuitem"
      class="sysmenu-item"
      :data-active="i === active"
      @click="run(item)"
      @mousemove="active = i"
    >
      {{ item.label === copyLabel && copied ? '> ✓ link copied' : item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSysMenu } from '~/composables/useSysMenu';

interface MenuItem {
  label: string;
  run: () => void | Promise<void>;
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

const items = computed<MenuItem[]>(() => {
  const all: MenuItem[] = [
    { label: '> home', run: () => navigateTo('/') },
    { label: '> open /projects', run: () => navigateTo('/projects') },
    { label: '> open /journey', run: () => navigateTo('/journey') },
    { label: '> back to top', run: () => window.scrollTo({ top: 0, behavior: smooth() ? 'smooth' : 'auto' }) },
    { label: copyLabel, run: copyLink },
    { label: '> GitHub', run: () => window.open('https://github.com/Baghaztra', '_blank', 'noopener') },
    {
      label: '> LinkedIn',
      run: () => window.open('https://www.linkedin.com/in/baghaztra-van-ril-8011b0294', '_blank', 'noopener')
    }
  ];
  // ponytail: brand menu is nav-only, page actions stay on right-click
  return state.value.source === 'brand'
    ? all.filter((i) => i.label !== '> back to top' && i.label !== copyLabel)
    : all;
});

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
    active.value = (active.value + 1) % items.value.length;
    itemEls.value[active.value]?.focus();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    active.value = (active.value + items.value.length - 1) % items.value.length;
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
