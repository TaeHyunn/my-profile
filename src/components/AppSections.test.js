import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import App from '../App.vue';

describe('resume sections', () => {
  it('renders exactly one h1 and all main sections', () => {
    const wrapper = mount(App);

    expect(wrapper.findAll('h1')).toHaveLength(1);
    ['intro', 'experience', 'projects', 'skills', 'education', 'contact'].forEach(
      (id) => {
        expect(wrapper.find(`#${id}`).exists()).toBe(true);
      },
    );
  });

  it('renders the three product case studies', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('관리자웹');
    expect(wrapper.text()).toContain('입주민앱');
    expect(wrapper.text()).toContain('경비원웹');
    expect(wrapper.findAll('[data-project]').length).toBe(3);
  });

  it('renders safe public contact links', () => {
    const wrapper = mount(App);
    const github = wrapper.get('a[href="https://github.com/TaeHyunn"]');

    expect(wrapper.get('a[href="mailto:xogus998@naver.com"]').exists()).toBe(
      true,
    );
    expect(github.attributes('rel')).toContain('noopener');
  });
});
