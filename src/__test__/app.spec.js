import { describe, it, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import InputDropDown from '../components/form/InputDropDown.vue'

const wrapper = mount(InputDropDown);

it('it will render component', async () => {
  expect(wrapper.exists()).toBe(true)
  // expect(GuessAge.props.title).toContain("Guess User Age App");
});

