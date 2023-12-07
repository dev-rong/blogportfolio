'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import LightLogo from '@/data/portfolio-light.svg'
import DarkLogo from '@/data/portfolio-dark.svg'

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
