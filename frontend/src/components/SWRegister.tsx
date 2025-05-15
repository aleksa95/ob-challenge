import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

export const SWRegister = () => {
  useEffect(() => {
    registerSW({
      immediate: true,
    })
  }, [])

  return null
}
