# React Base Project

## Installation

```bash
npm install
```

## Development

- Main entry point for your application: `src/components/main/Main.js`
- Additional components should go into `src/components`, including all necessary elements (styles, images, data ...)
- Metadata must be edited in `src/config.json`

Development server can be started with:

```bash
npm run start
```

The site should reload automatically on changes.

### Code Style

For code to work with React-Lite or Preact, it needs to follow some special rules.

#### Template for stateful components (containers)
```js
//region import React
import React from 'react';
//endregion

//region import additional libraries
//import * as d3request from 'd3-request';
//endregion

//region import additional components
//import AdditionalComponent from './AdditionalComponent.component';
//endregion

//region import CSS
// Semantic UI
//require('ta-semantic-ui/semantic/dist/components/reset.css');

// Specific CSS
require('./MyComponent.scss');
//endregion


class MyComponent extends React.Component {

  /**
  * Called once right after the component has been invoked.
  */
  constructor(state) {
    super(state);

    this.state = {
      ...state,
    };
  }


  /**
   * Called once the component has been mounted.
   */
  componentDidMount() {
  }

  /**
  * Called whenever the component needs to be rendered again.
  */
  render() {
  }
  
}

/**
* Define the types of your props.
* Clever editors (like IntelliJ) will be able to use that information
* and offer code assistance.
*/
MyComponent.propTypes = {
  myProp: React.PropTypes.string
};

/**
* Define default prop values.
* Used for the initial render of the component.
*/
MyComponent.defaultProps = {
  myProp: 'Default State'
};


export default MyComponent;

```

### Template for stateless components
```js
//region React imports
import React from 'react';
//endregion

//region CSS imports
//require('ta-semantic-ui/semantic/dist/components/icon.css');
//endregion

const MyComponent = (props) => {
  return (
   <p>props.text</p>
  )
};

/**
* Define the types of your props.
* Clever editors (like IntelliJ) will be able to use that information
* and offer code assistance.
*/
MyComponent.propTypes = {
  text: React.PropTypes.string
};

/**
* Default props.
* Remember that all components will be rendered the first time round without
* the props that have been provided by their parent components (since
* components will be rendered from the inside out). As such, all 
* components need default props that can act as placeholders or a switch
* in the render function that will disable rendering the component alltogether.
*/
MyComponent.defaultProps = {
  text: 'Default Text'
};

export default FacebookShareIcon;
```

or

```js
//region React imports
import React from 'react';
//endregion

//region CSS imports
//require('ta-semantic-ui/semantic/dist/components/icon.css');
//endregion

function MyComponent (props) {
  return (
   <p>props.text</p>
  )
}

MyComponent.propTypes = {
  text: React.PropTypes.string
};

MyComponent.defaultProps = {
  text: 'Default Text'
};

export default MyComponent;
```

## Distribution
Compile the webapp using

```bash
npm run dist
```

Compilation happens per default using *React-Lite*. In case stuff doesn't work, edit the aliases in `cfg/dist.js` to use `preact-compat` as the first alternative. In case stuff *still* doesn't work, use the original `react` and `react-dom`.

Files will be placed in `dist`. JS files will get a hash in their filename, so that the new versions of an app will be immediately provided to users once uploaded. This does, however, also mean that **index.html needs to be uploaded every time as well.**

## FAQ

### `ref` attributes not working in compiled version
`ref` doesn't work in React-Lite. Use `preact-compat` instead.
