# React-focused-test

Solutions for React tasks are in the repository

## What is your favorite new javascript feature and why?

My favorite feature of new javascript is a destructure assignment.
It allows you to write less code without losing too much or readability.

## Explain an interesting way in which you have used this javascript feature.
  
In React it is possible to effectively destruct props, state, and other big data structures. Also, you can get a `getByText` function from react-testing-library as shown in the example below:

```
  test('header sample test', () => {
    const {getByText} = render(<Header />);
  });
```

## Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)

There are few differences between these two. Function declaration or function expression are bound to their context, in which they are called, while arrow function is not. Also, the arrow function doesn't hoist, so you cant access it before the declaration. If you will use a call, apply, or bind on arrow function, it will not make any effect on the function scope.

## What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’

  The difference is that if we use increment as prefix variable, it will be returned after increment, so if, we would pass a variable which equals 1, it would be incremented and return 2. While, if we would use it as postfix, it would return value before increment, which is 1.

## In your own words, explain what a javascript ‘class’ is and how it differs from a function.

JavaScript class is used to create objects, and define their behavior by means of methods and attributes. The function is used to make some actions - return value, change some objects, etc. Class's name answers the question "what it describes?" when function answers on a question "what it does?" Under the hood, the class is javaScript is a modified function, which has additional features.

# Css:

## In your own words, explain CSS specificity.

In css you need to create selector in order to make browser understand on which element styles have to be applied. And for each selector, the specificity is calculated. For example - selecting by id adds more specificity value than selecting by class. If the specificity value is higher, then CSS rules of this selector will override the values of those rules, which have less specificity. You need to deal with specificity in the case when there are few CSS rules, applied on a single element.

## In your own words, explain, what is ‘!important` in CSS.  Also, how does it work?  Are there any special circumstances when using it, where its behavior might not be what you expect?

!important rule can be applied to override other CSS declarations. using of !important is a bad practice because it can cause problems with debugging and also it makes it harder to apply new styles, as you often have to write another !important rule to make some components work. But, in some cases !important is acceptable, for example, if you want to override some library styles, and it is convenient to use in browser explorer to test some styles.

## What is your preferred layout system: inline-block, floating + clearing, flex, grid, other?  And why?

I prefer to use flex as it can cover the majority of style needs. It is flexible and easy to understand.  Also, the grid system is very convenient, it allows you to create a design without writing a lot of html, because you can specify positions of your grid in css file.

## Are negative margins legal and what do they do (margin: -20px)?

Negative margins can be tricky sometimes. If you apply a negative margin, the element will be moved in opposite direction, instead of getting some gap. For example: we are setting `'margin-top': -20px`. The browser will find the point, at which the component should start, and move it up to 20px. I think that negative margins can be applied, but it is better to improve other design parts because negative margins can make markup more confusing.

## If a <div\/> has no margin or other styling and a `<p/>` tag inside of it has a margin top of some kind, the margin from the `<p/>` tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?

This is specificity of browser work. If the parent element doesn't have padding, margin of the child element is applied to parent element: parent element is moved instead of child. This behavior will not significantly affect the design. But, if we need to prevent this behavior, we can add `overflow: auto;` rule for parent `<div/>`, or to add `padding-top: 1px` and `margin-top: -1px;`, depending on your design.


# Unit tests:

## What technologies do you use to unit test your React components?

I'm using jest, react-testing-library, and Enzyme.

## Are there any pitfalls associated with this technology that have caused you difficulty in the past?

Testing is always a bit complicated when you are trying to find the most effective solution. The most often pitfall was to wrap things i act, which actually are not necessary to be wrapped in it (for example, fireEvent). Also, the tricky question was the mocking of fetch API, which was a bit unpredictable. A good alternative for this is a mock service worker.

## How do you test in your unit tests to see if the correct properties are being passed to child components.

For beggining, we need to render the parent component and then test the behavior of child components on the screen with help of a `screen` method.
If there is some asynchronous function, we need to mock it and launch the asynchronous function, and apply these values to the component.

# React:

## React test step1:

## Create a react component that has a <div\/> with a border.
## Inside this <div\/> should be a <span\/> that displays the ‘live’ width of the browser window at all times.  Keep in mind that the size of the window could easily be changed by the user and you should reflect this.

# React test step2:

## Inside the <div\/> you created in the previous step, add a text input that, as a number is entered into it, uses that number to set the height of the div itself in pixels, live as you update the text field (keypress not change event).


# React test step3:

## Add the following code to your project root (same project as in step 2, but add the code in the global / window space):  

## Let divHeight;
## window.setDivHeight = (height) => divHeight = height;

## Add a HOC for your div component that allows you to set the height of your <div\/> component from the previous steps by calling that external function.

## If you do not know what a HOC is or how to create one, that is also fine, just mention that in your answer and instead create a parent component that can still do this (allow you to call that function ‘setDivHeight’ in order to set the height of the div manually.

## Bare in mind that when the height of the div is forcefully set like this, the text fields value should also update to reflect this and should still carry on working as normal (user can continue to modify its value).