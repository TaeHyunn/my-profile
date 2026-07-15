import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import { resumeData } from '@/data/resume.js';
import SiteHeader from './SiteHeader.vue';
import ThemeToggle from './ThemeToggle.vue';

describe('ThemeToggle', () => {
  beforeEach(() => {
    window.localStorage.clear();
    delete document.documentElement.dataset.theme;
    window.matchMedia = () => ({
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    });
  });

  it('toggles and persists the page theme', async () => {
    const wrapper = mount(ThemeToggle);

    await wrapper.get('button').trigger('click');

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem('profile-theme')).toBe('dark');
  });
});

describe('SiteHeader', () => {
  it('closes the mobile menu after selecting a destination', async () => {
    const wrapper = mount(SiteHeader, {
      props: { navigation: resumeData.navigation },
    });
    const toggle = wrapper.get('[data-menu-toggle]');

    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');

    await wrapper.get('a[href="#projects"]').trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('false');
  });
});
