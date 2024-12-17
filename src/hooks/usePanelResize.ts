import { useState, useCallback, useEffect } from 'react'
import { useConfig } from '../context/ConfigContext'

export function usePanelResize(initialWidth = 50) {
  const [leftPanelWidth, setLeftPanelWidth] = useState(initialWidth)
  const [isDragging, setIsDragging] = useState(false)
  const { invertLayout } = useConfig()

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const container = document.getElementById('panels-container')
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const newWith = invertLayout
        ? ((e.clientX - containerRect.left) / containerRect.width) * 100
        : ((containerRect.right - e.clientX) / containerRect.width) * 100

      const clampedWidth = Math.min(Math.max(newWith, 20), 80)
      setLeftPanelWidth(clampedWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return {
    leftPanelWidth,
    isDragging,
    handleMouseDown,
  }
}
