import MessageDisplay from '@/components/MessageDisplay.vue'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
    jest.clearAllMocks()
})
//test suite
describe('MessageDisplay.vue', () => {
    // can use it instead of test
    it('calls getMessage once and displays message', async () => {
        //mock the API call
        const mockMessage = 'Hello'
        getMessage.mockResolvedValueOnce({ text: mockMessage })
        const wrapper = mount(MessageDisplay)

        await flushPromises()

        expect(getMessage).toHaveBeenCalledTimes(1)
        const message = wrapper.find('[data-testid="message"]').element.textContent
        expect(message).toEqual(mockMessage)
    })

    it('displays error when the getMessage call fails', async () => {
        //mock the API call
        const mockError = 'Oops! Something went wrong'
        getMessage.mockRejectedValueOnce(mockError)
        const wrapper = mount(MessageDisplay)

        await flushPromises()

        expect(getMessage).toHaveBeenCalledTimes(1)
        const error = wrapper.find('[data-testid="message-error"]').element.textContent
        expect(mockError).toEqual(error)
    })
})
