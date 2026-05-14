'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { buildings } from '@/data'
import type { Flat } from '@/types'

interface Props {
  flat: Flat
  buildingName: string
}

export default function EnquiryForm({ flat, buildingName }: Props) {
  const t = useTranslation()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    flatId: flat.id,
    message: '',
  })

  const allFlats = buildings.flatMap((b) =>
    b.flats.map((f) => ({ id: f.id, label: `${b.name} — Depto ${f.number}`, buildingName: b.name }))
  )

  const selectedFlat = allFlats.find((f) => f.id === form.flatId) ?? allFlats[0]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          flatNumber: flat.number,
          buildingName: selectedFlat.buildingName,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-6 text-center">
        <p className="text-navy font-semibold text-sm">{t.enquiry.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 pt-4">
      <p className="font-semibold text-navy text-sm mb-2">{t.enquiry.title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          required
          placeholder={t.enquiry.name}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
        />
        <input
          required
          type="tel"
          placeholder={t.enquiry.phone}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input"
        />
        <input
          required
          type="email"
          placeholder={t.enquiry.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
        />
        <input
          placeholder={t.enquiry.company}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="input"
        />
      </div>

      <select
        value={form.flatId}
        onChange={(e) => setForm({ ...form, flatId: e.target.value })}
        className="input w-full"
      >
        {allFlats.map((f) => (
          <option key={f.id} value={f.id}>{f.label}</option>
        ))}
      </select>

      <textarea
        placeholder={t.enquiry.message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows={3}
        className="input w-full resize-none"
      />

      {status === 'error' && (
        <p className="text-red-500 text-xs">{t.enquiry.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-navy text-white text-sm font-semibold py-3 rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? t.enquiry.submitting : t.enquiry.submit}
      </button>
    </form>
  )
}
