# unit-testing-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```
## Nuggets

- Event triggers that simulate user interaction require DOM updates which are async so use `await wrapper.vm.$nextTick()` to wait for DOM updates before you assert e.g
```javascript
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
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
