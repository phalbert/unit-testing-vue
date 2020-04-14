import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

//test suite
describe('AppHeader.vue', () => {
    // can use it instead of test
    test('If user is not logged in, do not show the log out button', () => {
        const wrapper = mount(AppHeader)
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('If user is logged in, show the log out button', async () => {
        const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick() // wait for DOM updates
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})
