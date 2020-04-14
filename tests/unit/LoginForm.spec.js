import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

//test suite
describe('LoginForm.vue', () => {
    // can use it instead of test
    it('emits an event with the user data payload', () => {
        const wrapper = mount(LoginForm)
        const input = wrapper.find('input[type="text"]')
        input.setValue('Adam Walq')
        wrapper.trigger('submit')

        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)
    })

    test('emiited event has the correct user data payload', () => {
        const wrapper = mount(LoginForm)
        const input = wrapper.find('input[type="text"]')
        input.setValue('Adam Walq')
        wrapper.trigger('submit')

        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        const expectedPayload = {'name': 'Adam Walq'}
        expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
    })
})
