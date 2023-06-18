import FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('can add fruits to the basket', () => {
  const wrapper = mount(FruitBasket)
  const input = wrapper.find('input')
  const button = wrapper.find('button')

  input.element.value = 'banana'
  input.trigger('input')
  expect(wrapper.vm.fruit).toBe('banana')
})
