# unit-testing-vue

![](https://github.com/phalbert/unit-testing-vue/workflows/CI/badge.svg)

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

- When working with multiple similar components like input elements, it may be tempting to find them in your tests using attributes like `id` or `name`. However, if these were to change in the future, your tests would. A future proof solution would a `data-testid` attr. e.g.

```javascript
// Feature.vue
...
<input data-testid='name-input' type='text' v-model='name'>
...

//Feature.spec.js
...
const wrapper = mount(Feature)
const input = wrapper.find('[data-testid="name-input"]')
...
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## References

1. [Adding badges for github actions](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow#adding-a-workflow-status-badge-to-your-repository)