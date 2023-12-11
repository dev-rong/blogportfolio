'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import LightLogo from '../public/static/images/portfolio-light.svg'
import DarkLogo from '../public/static/images/portfolio-dark.svg'

const LogoSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) {
    return null
  }

  return mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <DarkLogo /> : <LightLogo />
}

export default LogoSwitch
