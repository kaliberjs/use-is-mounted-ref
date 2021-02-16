import React from 'react'

export function useIsMountedRef() {
  const isMountedRef = React.useRef(false)

  React.useEffect(
    () => {
      isMountedRef.current = true
      return () => { isMountedRef.current = false }
    },
    []
  )

  return isMountedRef
}
