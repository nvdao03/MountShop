import { useState, useRef, type ReactNode, useEffect } from 'react'

interface Props {
  children: ReactNode
  renderPopover: ReactNode
  className?: string
}

export default function Popover({ children, renderPopover, className }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [popoverStyles, setPopoverStyles] = useState({})
  const containerRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const calculatePosition = () => {
    if (containerRef.current && popoverRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const popoverRect = popoverRef.current.getBoundingClientRect()
      const { innerWidth, innerHeight } = window

      let top = containerRect.height + 10
      // Thay đổi cách tính left để căn mép phải
      let left = containerRect.width - popoverRect.width
      let arrowLeft = '90%' // Điều chỉnh vị trí mũi tên về phía phải
      let isTopPosition = false

      // Kiểm tra nếu popover bị chọc ra bên trái
      if (containerRect.left + left < 0) {
        left = -containerRect.left + 10
        arrowLeft = `${containerRect.width / 2}px`
      }

      if (containerRect.bottom + popoverRect.height > innerHeight) {
        top = -popoverRect.height - 10
        isTopPosition = true
      }

      setPopoverStyles({
        top: `${top}px`,
        left: `${left}px`
      })
    }
  }

  // Tính toán vị trí khi component mount và khi kích thước window thay đổi
  useEffect(() => {
    calculatePosition()
    window.addEventListener('resize', calculatePosition)
    return () => window.removeEventListener('resize', calculatePosition)
  }, [])

  // Tính toán lại vị trí khi popover mở
  useEffect(() => {
    if (isOpen) {
      calculatePosition()
    }
  }, [isOpen])

  const showPopover = () => {
    setIsOpen(true)
  }

  const hidePopover = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      ref={containerRef}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      {children}
      <div
        ref={popoverRef}
        style={{
          ...popoverStyles,
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0
        }}
        className='absolute z-50 transition-all duration-200'
      >
        {/* Nội dung Popover */}
        <div className='bg-white rounded-sm border border-gray-200 shadow-md'>{renderPopover}</div>
      </div>
    </div>
  )
}
