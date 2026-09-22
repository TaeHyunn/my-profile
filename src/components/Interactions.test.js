import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import { resumeData } from '@/data/resume.js';
import SiteHeader from './SiteHeader.vue';

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

  it('opens the browser print dialog from the PDF save button', async () => {
    const print = vi.spyOn(window, 'print').mockImplementation(() => {});
    const wrapper = mount(SiteHeader, {
      props: { navigation: resumeData.navigation },
    });

    await wrapper.get('[data-print-resume]').trigger('click');

    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });
});
