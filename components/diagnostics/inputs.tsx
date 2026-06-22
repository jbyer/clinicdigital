"use client"
import { ReactNode } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

export function InputRow({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div className="input-row">
      <div className="input-label-block">
        <span className="input-label">{label}</span>
        {hint && <span className="input-hint">{hint}</span>}
      </div>
      <div className="input-control">{children}</div>
    </div>
  )
}

export function SliderInput({ value, min, max, step = 1, onChange, format }: {
  value: number; min: number; max: number; step?: number
  onChange: (v: number) => void; format?: (v: number) => string
}) {
  return (
    <div className="slider-wrap">
      <Slider min={min} max={max} step={step} value={[value]} onValueChange={(v) => onChange(v[0])} />
      <span className="slider-value">{format ? format(value) : value}</span>
    </div>
  )
}

export function NumberInput({ value, prefix, suffix, onChange }: {
  value: number; prefix?: string; suffix?: string; onChange: (v: number) => void
}) {
  return (
    <div className="number-input-wrap">
      {prefix && <span className="affix">{prefix}</span>}
      <Input type="number" min={0} value={value} onChange={(e) => onChange(Number(e.target.value))} className="number-input" />
      {suffix && <span className="affix">{suffix}</span>}
    </div>
  )
}
