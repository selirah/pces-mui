import React, { useEffect, useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const SITE_KEY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE_SITE_KEY
const DELAY = process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE_DELAY
  ? parseInt(process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE_DELAY)
  : 0

const useRecaptcha = () => {
  const [load, setLoad] = useState(false)
  const [expired, setExpired] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, DELAY)
  }, [])

  const handleRecaptcha = (value: string) => {
    if (!value) setExpired(true)
  }

  const displayRecaptcha = () => {
    return (
      load && (
        <ReCAPTCHA
          theme="light"
          size="invisible"
          ref={ref}
          sitekey={SITE_KEY}
          onChange={handleRecaptcha}
        />
      )
    )
  }

  return [expired, ref, displayRecaptcha] as const
}

export default useRecaptcha
