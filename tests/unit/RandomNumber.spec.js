import RandomNumber from '@/components/RandomNumber.vue'
import { mount } from '@vue/test-utils'

//test suite
describe('RandomNumber.vue', () => {
    // can use it instead of test
    test('By default, random number should be zero', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    test('If button is clicked, random number should be between 1 and 10', async () => {
        const wrapper = mount(RandomNumber)
        wrapper.find('button').trigger('click') // since its one button, find by element

        await wrapper.vm.$nextTick()

        const randomNumber = parseInt(wrapper.find('span').element.textContent)

        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })

    test('If button is clicked, random number should be between 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            propsData: { min: 200, max: 300 }
        })
        wrapper.find('button').trigger('click') // since its one button, find by element

        await wrapper.vm.$nextTick()

        const randomNumber = parseInt(wrapper.find('span').element.textContent)

        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})
