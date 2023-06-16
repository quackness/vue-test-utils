import TestComponent from '@/test'
import { mount } from '@vue/test-utils'


test('first spec', () => {
  console.log(TestComponent)
})
test('mount a vue comp', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueS'

    }
  })
  console.log(wrapper)
  expect(wrapper.html()).toMatchSnapshot()
})