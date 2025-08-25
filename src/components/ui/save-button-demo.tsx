"use client"

import { SaveButton } from "@/components/ui/save-button"

export function SaveButtonDemo() {
  return (
    <SaveButton 
      text={{ idle: "Pricing", saving: "Loading...", saved: "Ready" }}
      onSave={() => {
        const el = document.getElementById('pricing')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }}
    />
  )
}


