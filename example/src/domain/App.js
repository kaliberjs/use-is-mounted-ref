import { useIsMountedRef } from '@kaliber/use-is-mounted-ref'

export default function App() {
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
