export interface SysMenuState {
  open: boolean;
  x: number;
  y: number;
  source: 'context' | 'brand';
}

export const useSysMenuState = () =>
  useState<SysMenuState>('sysmenu', () => ({ open: false, x: 0, y: 0, source: 'context' }));

export const useSysMenu = () => {
  const state = useSysMenuState();

  const close = () => {
    state.value.open = false;
  };

  // Coordinates are clamped to the viewport by SysMenu after measuring.
  const openAt = (x: number, y: number, source: SysMenuState['source'] = 'context') => {
    state.value.x = x;
    state.value.y = y;
    state.value.source = source;
    state.value.open = true;
  };

  return { state, openAt, close };
};
