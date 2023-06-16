import TestComponent from '@/test'
import List from '@/test'
import { mount, shallowMount } from '@vue/test-utils'


// test('first spec', () => {
//   console.log(TestComponent)
// })
// test('mount a vue comp', () => {
//   const wrapper = mount(TestComponent, {
//     propsData: {
//       value: 'VueS'

//     }
//   })
//   console.log(wrapper)
//expect(wrapper.html()).toMatchSnapshot()
//})

// test('ListComponent shallow', () => {
//   console.log(mount(List).html())
//   console.log(shallowMount(List).html())
// })

test('List component', () => {
  const wrapper = mount(List)
  const movies = wrapper.vm.marvelMovies || ['']


  wrapper.setData({ marvelMovies: [...movies, 'Endgame'] })

  expect(wrapper.html()).toMatchSnapshot()
})