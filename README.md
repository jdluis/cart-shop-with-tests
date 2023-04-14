# Learning Jest and React Testing Library

### Test Chechklist
- [x] How check if Components is rendered?
- [x] Data is showing in my component?
- [x] Buttons are clicked?
- [ ] Styles is rendering ok?

### Methods Learned
- describe:  **Creates a block that groups together several related tests**
- test: **Allows us to start a block of test("definition", fc)**
- expect: **Check that values meet certain conditions**
- render: **For render a react component**
- screen: **Selected all the actual screen**
- debug(): **Show us in the console a better look of the component/element debugging**
- fireEvent: **Like the name said we can call any event, example: fireEvent.click(button)**
- getByText: **Like js with the querySelector but with text on the component rendered or in the screen**
- jest.fn(): **For implement a Mock**
- toBeInTheDocument(): **Used to assert that an element is in the body of the document, or not.**
- toHaveBeenCalledTimes(Number): **If a function was called a certain times**
- cleanup(): **Unmounts React trees that were mounted with render**


### Concepts
- #### Mock
 >Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.

### Links of Interest
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [My Web-Portafolio](https://jdluis.com/)

