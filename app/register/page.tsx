'use client'

import { useState, useCallback, useEffect, ChangeEvent, FormEvent } from 'react'
import StarfieldBackground from '@/components/StarfieldBackground'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
type EntryType = 'individual' | 'team'

interface MemberFields {
  fullName:    string
  university:  string
  email:       string
  phone:       string
  cnic:        string
  department:  string
  year:        string
}

const emptyMember = (): MemberFields => ({
  fullName: '', university: '', email: '', phone: '', cnic: '', department: '', year: '',
})

interface FormState {
  entryType:      EntryType
  leader:         MemberFields
  member1:        MemberFields
  member2:        MemberFields
  paymentRef:     string
  agreeTerms:     boolean
}

// ── Constants ─────────────────────────────────────────────────────────────────
const UNIVERSITIES = [
  'IOBM – Institute of Business Management',
  'IBA – Institute of Business Administration',
  'NED – NED University of Engineering & Technology',
  'University of Karachi',
  'FAST-NUCES Karachi',
  'Habib University',
  'SZABIST Karachi',
  'Greenwich University',
  'Bahria University Karachi',
  'PAF-KIET',
  'DHA Suffa University',
  'Other',
]

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate']

// ── Shared field components ───────────────────────────────────────────────────
const inputCls = `w-full bg-transparent border border-white/10 focus:border-neon/45 outline-none
  px-4 py-3 font-body text-sm text-white placeholder-silver/25 transition-all duration-300
  focus:shadow-[0_0_10px_rgba(57,255,20,0.08)]`

const selectCls = `${inputCls} appearance-none cursor-pointer`

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block font-mono text-[10px] text-silver/45 tracking-widest uppercase mb-1.5">
    {children}
  </label>
)

const Field = ({
  label, name, value, onChange, type = 'text', placeholder, required = true,
}: {
  label: string; name: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string; placeholder?: string; required?: boolean;
}) => (
  <div>
    <Label>{label}{required && ' *'}</Label>
    <input
      type={type} name={name} value={value} onChange={onChange}
      required={required} placeholder={placeholder}
      className={inputCls}
    />
  </div>
)

// ── Member form block ─────────────────────────────────────────────────────────
const MemberBlock = ({
  title, prefix, values, onChange,
}: {
  title: string; prefix: string; values: MemberFields;
  onChange: (prefix: string, field: keyof MemberFields, val: string) => void;
}) => {
  const inp = (field: keyof MemberFields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => onChange(prefix, field, e.target.value)

  return (
    <div className="glass border border-white/5 p-6 sm:p-7 space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[10px] text-neon/55 tracking-widest uppercase">{title}</span>
        <div className="flex-1 h-px bg-neon/10" />
      </div>

      {/* Row 1: Full Name + University */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="fullName" value={values.fullName}
          onChange={inp('fullName') as (e: ChangeEvent<HTMLInputElement>) => void}
          placeholder="Enter full name" />
        <div>
          <Label>University *</Label>
          <select name="university" value={values.university} required
            onChange={inp('university') as (e: ChangeEvent<HTMLSelectElement>) => void}
            className={selectCls}>
            <option value="" disabled className="bg-black">Select university</option>
            {UNIVERSITIES.map(u => <option key={u} value={u} className="bg-black">{u}</option>)}
          </select>
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email" name="email" type="email" value={values.email}
          onChange={inp('email') as (e: ChangeEvent<HTMLInputElement>) => void}
          placeholder="name@email.com" />
        <Field label="Phone Number" name="phone" type="tel" value={values.phone}
          onChange={inp('phone') as (e: ChangeEvent<HTMLInputElement>) => void}
          placeholder="+92 300 0000000" />
      </div>

      {/* Row 3: CNIC + Department */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="CNIC" name="cnic" value={values.cnic}
          onChange={inp('cnic') as (e: ChangeEvent<HTMLInputElement>) => void}
          placeholder="00000-0000000-0" />
        <Field label="Department" name="department" value={values.department}
          onChange={inp('department') as (e: ChangeEvent<HTMLInputElement>) => void}
          placeholder="e.g. Finance, CS" />
      </div>

      {/* Row 4: Year */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Year of Study *</Label>
          <select name="year" value={values.year} required
            onChange={inp('year') as (e: ChangeEvent<HTMLSelectElement>) => void}
            className={selectCls}>
            <option value="" disabled className="bg-black">Select year</option>
            {YEARS.map(y => <option key={y} value={y} className="bg-black">{y}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

// ── Main form (inner) ─────────────────────────────────────────────────────────
function RegisterForm() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type') as EntryType | null

  const [form, setForm] = useState<FormState>({
    entryType:  typeParam === 'individual' ? 'individual' : 'team',
    leader:     emptyMember(),
    member1:    emptyMember(),
    member2:    emptyMember(),
    paymentRef: '',
    agreeTerms: false,
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // Update entryType when URL param changes
  useEffect(() => {
    if (typeParam === 'individual' || typeParam === 'team') {
      setForm(f => ({ ...f, entryType: typeParam }))
    }
  }, [typeParam])

  // ── Field handlers ────────────────────────────────────────────────────────
  const setEntryType = useCallback((t: EntryType) => {
    setForm(f => ({ ...f, entryType: t }))
  }, [])

  const updateMember = useCallback((prefix: string, field: keyof MemberFields, val: string) => {
    setForm(f => ({ ...f, [prefix]: { ...(f[prefix as keyof FormState] as MemberFields), [field]: val } }))
  }, [])

  const isIndividual = form.entryType === 'individual'

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const payload = {
        entryType:  form.entryType,
        paymentRef: form.paymentRef,
        teamLeader: form.leader,
        ...(isIndividual ? {} : { member1: form.member1, member2: form.member2 }),
      }
      const res = await fetch('https://formspree.io/f/xaqlqbdk', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  // ── Success screen ────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="glass-neon border border-neon/20 p-12 text-center max-w-lg w-full mx-auto">
        <div className="w-16 h-16 border-2 border-neon rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
          <svg className="w-8 h-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-display font-black text-3xl uppercase text-white mb-4">
          Registration <span className="neon-text">Received</span>
        </h2>
        <p className="font-body text-silver text-sm mb-2">
          Your application has been submitted successfully.
        </p>
        <p className="font-body text-silver/50 text-xs mb-8">
          Confirmation will be sent to{' '}
          <strong className="text-white">{form.leader.email}</strong> within 48 hours. Ensure payment
          is completed to secure your spot.
        </p>
        <div className="font-mono text-xs text-neon/50 tracking-widest border-t border-neon/10 pt-6">
          IOBM STOCK CHALLENGE 2026
        </div>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* ── Entry type selector ─────────────────────────────────────────── */}
      <div>
        <p className="font-mono text-xs text-silver/40 tracking-widest uppercase mb-3">Select Entry Type</p>
        <div className="grid grid-cols-2 gap-3">
          {([
            { id: 'individual', label: 'Individual', price: '1,500 PKR' },
            { id: 'team',       label: 'Team (3)',   price: '3,000 PKR', badge: 'RECOMMENDED' },
          ] as { id: EntryType; label: string; price: string; badge?: string }[]).map(opt => {
            const active = form.entryType === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setEntryType(opt.id)}
                className={`relative p-4 text-left border transition-all duration-300 focus:outline-none ${
                  active
                    ? 'border-neon/50 bg-neon/5 shadow-[0_0_16px_rgba(57,255,20,0.1)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {opt.badge && (
                  <span className={`absolute -top-2.5 right-3 font-display font-black text-[9px] px-2 py-0.5 tracking-widest uppercase transition-all duration-300 ${
                    active ? 'bg-neon text-black' : 'bg-white/10 text-silver'
                  }`}>
                    {opt.badge}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  {/* Radio dot */}
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    active ? 'border-neon' : 'border-white/20'
                  }`}>
                    {active && <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_5px_#39FF14]" />}
                  </div>
                  <div>
                    <div className={`font-display font-bold text-sm transition-colors duration-300 ${active ? 'text-neon' : 'text-white'}`}>
                      {opt.label}
                    </div>
                    <div className="font-mono text-xs text-silver/50">{opt.price}</div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/*
        ── FIX: Conditionally RENDER (not just hide) the member blocks.
           When a block is not rendered, its `required` inputs don't exist
           in the DOM at all, so browser validation never fires on them.
      ── */}

      {/* ── Individual fields ────────────────────────────────────────────── */}
      {isIndividual && (
        <MemberBlock
          title="Participant Details"
          prefix="leader"
          values={form.leader}
          onChange={updateMember}
        />
      )}

      {/* ── Team fields ─────────────────────────────────────────────────── */}
      {!isIndividual && (
        <div className="space-y-4">
          <MemberBlock
            title="Team Leader"
            prefix="leader"
            values={form.leader}
            onChange={updateMember}
          />
          <MemberBlock
            title="Member 1"
            prefix="member1"
            values={form.member1}
            onChange={updateMember}
          />
          <MemberBlock
            title="Member 2"
            prefix="member2"
            values={form.member2}
            onChange={updateMember}
          />
        </div>
      )}

      {/* ── Payment ─────────────────────────────────────────────────────── */}
      <div className="glass border border-white/5 p-6 sm:p-7 space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-[10px] text-neon/55 tracking-widest uppercase">Payment</span>
          <div className="flex-1 h-px bg-neon/10" />
        </div>
        <div className="glass-neon p-4">
          <p className="font-mono text-[10px] text-neon/60 tracking-widest uppercase mb-2">Bank Transfer Details</p>
          <div className="space-y-1">
            {[
              ['Account Name', 'Abdul Qadir'],
              ['Bank',         'Habib Bank Limited (HBL)'],
              ['IBAN',         'PK53HABB0054497000069199'],
              ['Amount',      isIndividual ? 'PKR 1,500' : 'PKR 3,000'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <span className="font-mono text-xs text-silver/40 w-28 flex-shrink-0">{k}</span>
                <span className="font-body text-xs text-silver">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <Field
          label="Transaction ID / Payment Reference"
          name="paymentRef"
          value={form.paymentRef}
          onChange={e => setForm(f => ({ ...f, paymentRef: e.target.value }))}
          placeholder="Enter your transaction reference number"
        />
      </div>

      {/* ── Terms ───────────────────────────────────────────────────────── */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <div
          className={`w-4 h-4 border flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-300 ${
            form.agreeTerms ? 'border-neon bg-neon/10' : 'border-white/20 group-hover:border-white/35'
          }`}
          onClick={() => setForm(f => ({ ...f, agreeTerms: !f.agreeTerms }))}
        >
          {form.agreeTerms && (
            <svg className="w-3 h-3 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <input
          type="checkbox" checked={form.agreeTerms} readOnly required
          className="sr-only"
        />
        <span className="font-body text-sm text-silver/55">
          I confirm that {isIndividual ? 'I am' : 'all team members are'} currently enrolled
          university students in Karachi and agree to the competition rules and regulations.
        </span>
      </label>

      {/* ── Submit ──────────────────────────────────────────────────────── */}
      <button
        type="submit"
        disabled={status === 'submitting' || !form.agreeTerms}
        className={`w-full py-4 text-base font-display font-black tracking-widest uppercase transition-all duration-300 ${
          status === 'submitting' || !form.agreeTerms
            ? 'opacity-50 cursor-not-allowed border border-neon/20 text-neon bg-neon/5'
            : 'btn-neon-solid'
        }`}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-3">
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          `Submit ${isIndividual ? 'Individual' : 'Team'} Registration →`
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 font-mono text-xs text-center tracking-widest">
          Submission failed. Please email isc@iobm.edu.pk directly.
        </p>
      )}
    </form>
  )
}

// ── Page wrapper ──────────────────────────────────────────────────────────────
export default function RegisterPage() {
  return (
    <>
      <StarfieldBackground />
      <div className="relative pt-32 pb-24 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">Join The Competition</p>
            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white mb-4">
              Register for <span className="neon-text">ISC 2026</span>
            </h1>
            <p className="font-body text-silver text-sm">
              Fill in your details below. Confirmation sent within 48 hours.
            </p>
          </div>

          {/* Deadline reminder */}
          <div className="flex items-center gap-3 glass-neon p-3 mb-8 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse flex-shrink-0" />
            <span className="font-mono text-[10px] text-neon tracking-widest uppercase">
              Registration Deadline: April 12, 2026
            </span>
          </div>

          <Suspense fallback={<div className="text-silver text-center font-mono text-xs">Loading form…</div>}>
            <RegisterForm />
          </Suspense>
        </div>
      </div>
    </>
  )
}