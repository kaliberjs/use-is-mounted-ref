# useIsMountedRef
Returns ref with a `current` value of true when a component is mounted.

## Motivation
Useful when working with server side rendering. Comparable to `componentDidMount` in a class-based component. Does __not__ trigger a rerender.

Use it to check if a component is still mounted after calling an async function.

## Installation

```
yarn add @kaliber/use-is-mounted-ref
```

## Usage
```jsx
import { useIsMountedRef } from '@kaliber/use-is-mounted-ref'

function Component() {
  const [, set] = React.useState(false)
  const isMountedRef = useIsMountedRef()

  // Use it to check if a component is still mounted or hydrated
  // after calling an async function.
  React.useEffect(
    () => {
      async function doSomethingAync() {
        await someAsyncFunction()
        if (isMountedRef.current) { console.log('I\m still mounted!') }
      }
      doSomethingAync()
    },
    []
  )

  // Or use it to see if a component is mounted,
  // a functional equivalent of `componentDidMount`
  return (
    <>
      <div style={{ fontSize: '5em' }}>
        {isMountedRef.current ? '⬆️' : '⬇️'}
      </div>
      {!isMountedRef.current
        // calling set with a new value triggers a rerender
        && <button onClick={() => set(true)}>Mount</button>
      }
    </>
  )

  function someAsyncFunction() {
    return new Promise(resolve => { window.setTimeout(resolve, 3000) })
  }
}

```

![](https://media.giphy.com/media/9SgOeNxFAh8Hu/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.