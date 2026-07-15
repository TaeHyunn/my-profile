import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import App from './App.vue';

describe('App', () => {
  it('renders the resume landmark', () => {
    const wrapper = mount(App);

    expect(wrapper.get('main').attributes('id')).toBe('main-content');
  });
});
