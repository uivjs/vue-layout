import { defineComponent, ExtractPropTypes, h, onUnmounted, ref, watch, watchEffect, provide, inject } from 'vue';
import '../dist.css';

/**
 * Returns a random text
 */
export function randomid(): string {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

export const Layout = defineComponent({
  name: 'uiv-layout',
  setup(props, { slots }) {
    const siders = ref<string[]>([]);
    const addSider = (siderId: string) => {
      if (siders.value.indexOf(siderId) < 0) {
        siders.value.push(siderId);
      }
    };
    const removeSider = (siderId: string) => {
      siders.value = siders.value.filter((currentId) => currentId !== siderId);
    };
    provide('addSider', addSider);
    provide('removeSider', removeSider);
    return () => {
      return (
        <section class={`uiv-layout ${siders.value.length > 0 ? 'uiv-layout-has-sider' : ''}`}>
          {slots.default ? slots.default() : null}
        </section>
      );
    };
  },
});

export const Content = defineComponent({
  name: 'uiv-layout-content',
  setup(props, { slots }) {
    return () => <main class="uiv-layout-content">{slots.default ? slots.default() : null}</main>;
  },
});

export const Header = defineComponent({
  name: 'uiv-layout-header',
  setup(props, { slots }) {
    return () => <header class="uiv-layout-header">{slots.default ? slots.default() : null}</header>;
  },
});

export const Footer = defineComponent({
  name: 'uiv-layout-footer',
  setup(props, { slots }) {
    return () => <footer class="uiv-layout-footer">{slots.default ? slots.default() : null}</footer>;
  },
});

const sider = {
  collapsed: { type: Boolean, default: false },
};

export type SiderProps = ExtractPropTypes<typeof sider>;
export const Sider = defineComponent({
  name: 'uiv-layout-sider',
  props: sider,
  inject: ['addSider', 'removeSider'],
  setup(props, { slots }) {
    const width = ref(props.collapsed ? 80 : 200);
    const siderId = ref(randomid());
    const addSider = inject<(id: string) => void>('addSider');
    const removeSider = inject<(id: string) => void>('removeSider');
    watch(props, ({ collapsed }) => (width.value = collapsed ? 80 : 200));

    if (addSider) {
      addSider(siderId.value);
    }
    onUnmounted(() => {
      if (removeSider) {
        removeSider(siderId.value);
      }
    });
    return () => (
      <aside
        class={`uiv-layout-sider`}
        style={{ width: `${width.value}px`, minWidth: `${width.value}px`, maxWidth: `${width.value}px` }}
      >
        {slots.default ? slots.default() : null}
      </aside>
    );
  },
});
