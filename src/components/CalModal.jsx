import { useEffect, useState } from 'react'

const CAL_URL = 'https://cal.com/swaroop-codes-yirggk/30min'

export default function CalModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-cal', handler)
    const escHandler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', escHandler)
    return () => {
      window.removeEventListener('open-cal', handler)
      window.removeEventListener('keydown', escHandler)
    }
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative z-10 bg-white rounded-xl shadow-2xl w-[95vw] max-w-4xl h-[80vh] overflow-hidden">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-slate-700 hover:text-slate-900 z-20"
          aria-label="Close"
        >
          ✕
        </button>
        <iframe
          src={CAL_URL}
          title="Book a Call"
          className="w-full h-full"
          style={{ border: '0' }}
          allow="camera; microphone; autoplay; clipboard-read; clipboard-write;"
        />
      </div>
    </div>
  )
}


