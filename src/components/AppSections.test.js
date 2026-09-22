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

  it('renders six chronological project records as a resume document', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('관리자웹');
    expect(wrapper.text()).toContain('입주민앱');
    expect(wrapper.text()).toContain('경비원웹');
    expect(wrapper.findAll('[data-project]')).toHaveLength(6);
    expect(wrapper.find('.system-visual').exists()).toBe(false);
    expect(wrapper.find('details').exists()).toBe(false);
  });

  it('keeps the work experience link at the start of the section', () => {
    const wrapper = mount(App);

    expect(wrapper.get('a[href="#experience"]').exists()).toBe(true);
  });

  it('does not render a profile photo or theme control', () => {
    const wrapper = mount(App);

    expect(wrapper.find('img').exists()).toBe(false);
    expect(wrapper.find('.theme-toggle').exists()).toBe(false);
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
