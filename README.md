# useIsMountedRef
Returns a `current` value of true when a component is mounted.

## Motivation
Useful when working with server side rendering. Comparable to `componentDidMount` in a class-based component. Does __not__ trigger a rerender.

## Installation

```
yarn add @kaliber/use-is-mounted-ref
```

## Usage
```jsx
import { useIsMountedRef } from '@kaliber/use-is-mounted-ref'

function Component() {
  const [, setMounted] = React.useState(false)
  const isMounted = useIsMountedRef()

  return (
    <>
      <div style={{ fontSize: '5em' }}>{isMounted.current ? '⬆️' : '⬇️'}</div>
      {!isMounted.current
        ? <button onClick={() => setMounted(true)}>Mount</button>
        : <p>Compare <b>View source</b> to <b>Inspect element</b>.</p>
      }
    </>
  )
}
```

![](https://media.giphy.com/media/9SgOeNxFAh8Hu/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.