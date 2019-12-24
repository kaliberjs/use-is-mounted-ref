import { useIsMountedRef } from '@kaliber/use-is-mounted-ref'

export default function App() {
  const [state, setState] = React.useState('⬇️')
  const isMountedRef = useIsMountedRef()

  // Use it to check if a component is still mounted after calling an async function.
  React.useEffect(
    () => {
      async function doSomethingAync() {
        try {
          await someAsyncFunction()
        } catch (err) {
          console.error(err)
          if (isMountedRef.current) setState('⚠️')
        }
        if (isMountedRef.current) setState('⬆️')
      }
      doSomethingAync()
    },
    [isMountedRef]
  )

  return (
    <>
      <div style={{ fontSize: '5em' }}>{state}</div>
    </>
  )
}

function someAsyncFunction() {
  return new Promise(resolve => { window.setTimeout(resolve, 1000) })
}
