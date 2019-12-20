import { useIsMountedRef } from '@kaliber/use-is-mounted-ref'

export default function App() {
  const [, set] = React.useState(false)
  const isMountedRef = useIsMountedRef()

  // Use it to check if a component is still mounted after calling an async function.
  React.useEffect(
    () => {
      async function doSomethingAync() {
        try {
          await someAsyncFunction()
        } catch (err) {
          console.error(err)
        }
        if (isMountedRef.current) { console.log('I\'m still mounted!') }
      }
      doSomethingAync()
    },
    [isMountedRef]
  )

  // Or use it to see if a component is mounted, a functional equivalent of `componentDidMount`
  return (
    <>
      <div style={{ fontSize: '5em' }}>{isMountedRef.current ? '⬆️' : '⬇️'}</div>
      {!isMountedRef.current
        // calling set with a new value triggers a rerender
        && <button onClick={() => set(true)}>Mount</button>
      }
    </>
  )
}

function someAsyncFunction() {
  return new Promise(resolve => { window.setTimeout(resolve, 1000) })
}
