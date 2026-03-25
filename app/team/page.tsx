'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import StarfieldBackground from '@/components/StarfieldBackground'

interface TeamMember {
  name: string
  role: string
  image?: string      
  initials: string
  isED?: boolean
}

// ── Core Leadership ───────────────────────────────────────────────────────────
const LEADERSHIP: TeamMember[] = [
  { name: 'Isra Ghous', role: 'President', initials: 'IG' },
  { name: 'Abdul Qadir', role: 'Vice President', initials: 'AQ' },
  { name: 'Sameen Syed', role: 'Head of Brand & Marketing', initials: 'SS' },
  { name: 'Amna Ayub', role: 'General Secretary', initials: 'AA' },
  { name: 'Moiz Ali Siddiqui', role: 'Webmaster', initials: 'MA' },
  { name: 'Aashir Ali', role: 'Treasury', initials: 'AL' },
  { name: 'Aizah Rasheed', role: 'Assistant to the President', initials: 'AR' },
]

// ── Executive Body by Department ──────────────────────────────────────────────
interface Department {
  name: string
  tag: string
  members: TeamMember[]
}

const DEPARTMENTS: Department[] = [
  {
    name: 'Marketing & Publications',
    tag: 'Dept. 01',
    members: [
      { name: 'Ali Khurram', role: 'Executive Director', initials: 'AK', isED: true },
      { name: 'Muhammad Abdul Rehman Sheikha', role: 'Executive Director', initials: 'MR', isED: true },
      { name: 'Sara', role: 'Director', initials: 'SR' },
      { name: 'Ronit Taheja', role: 'Director', initials: 'RT' },
      { name: 'Pushkar Pawan', role: 'Director', initials: 'PP' },
      { name: 'Fatima Hashim', role: 'Director', initials: 'FH' },
      { name: 'Taiba Ahmed', role: 'Director', initials: 'TA' },
    ],
  },
  {
    name: 'HR',
    tag: 'Dept. 02',
    members: [
      { name: 'Sahar Hasan', role: 'Executive Director', initials: 'SH', isED: true },
      { name: 'Javeria Shakir', role: 'Executive Director', initials: 'JS', isED: true },
      { name: 'Shifa', role: 'Director', initials: 'SF' },
      { name: 'Bushra Batool', role: 'Director', initials: 'BB' },
      { name: 'Seher', role: 'Director', initials: 'SE' },
    ],
  },
  {
    name: 'Events',
    tag: 'Dept. 03',
    members: [
      { name: 'Muhammad Arshman Khan', role: 'Executive Director', initials: 'MK', isED: true },
      { name: 'Maha Yasir', role: 'Executive Director', initials: 'MY', isED: true },
      { name: 'Vijay Kumar', role: 'Executive Director', initials: 'VK', isED: true },
      { name: 'Zonaisha', role: 'Director', initials: 'ZO' },
      { name: 'Syeda Samana Fatima', role: 'Director', initials: 'SF' },
      { name: 'Mubashir', role: 'Director', initials: 'MB' },
      { name: 'Aasa Afaq', role: 'Director', initials: 'AF' },
      { name: 'Umaima Ahmed', role: 'Director', initials: 'UA' },
      { name: 'Sehrish', role: 'Director', initials: 'SH' },
    ],
  },
  {
    name: 'Corporate',
    tag: 'Dept. 04',
    members: [
      { name: 'Humna Sajjad', role: 'Executive Director', initials: 'HS', isED: true },
      { name: 'Muhammad Sarim', role: 'Executive Director', initials: 'MS', isED: true },
      { name: 'Ardashir Naseem', role: 'Executive Director', initials: 'AN', isED: true },
      { name: 'Waleed Ahmed Tariq', role: 'Director', initials: 'WA' },
      { name: 'Shiza Ashraf', role: 'Director', initials: 'SA' },
      { name: 'Umer Yasir', role: 'Director', initials: 'UY' },
      { name: 'Shaheer Ahmed', role: 'Director', initials: 'SH' },
      { name: 'Alisha Zakir', role: 'Director', initials: 'AZ' },
    ],
  },
  {
    name: 'Logistics',
    tag: 'Dept. 05',
    members: [
      { name: 'Muhammad Bilal', role: 'Executive Director', initials: 'MB', isED: true },
      { name: 'Hammadullah Khan', role: 'Executive Director', initials: 'HK', isED: true },
      { name: 'Muhammad Ali', role: 'Executive Director', initials: 'MA', isED: true },
      { name: 'Muhammad Yusuf', role: 'Director', initials: 'MY' },
      { name: 'Musfirah Ali', role: 'Director', initials: 'MF' },
      { name: 'Abeeha', role: 'Director', initials: 'AB' },
      { name: 'Ismail Qurban', role: 'Director', initials: 'IQ' },
      { name: 'Taha Sheikh', role: 'Director', initials: 'TS' },
    ],
  },
]

const Avatar = ({ member, size = 'md' }: { member: TeamMember; size?: 'lg' | 'md' | 'sm' }) => {
  const dim = size === 'lg' ? 'w-20 h-20' : size === 'md' ? 'w-14 h-14' : 'w-12 h-12'
  const txt = size === 'lg' ? 'text-xl'   : size === 'md' ? 'text-base' : 'text-sm'
  const px  = size === 'lg' ? 80          : size === 'md' ? 56          : 48

  return (
    <div className={`${dim} rounded-full border border-neon/20 group-hover:border-neon/50 transition-all duration-400 flex items-center justify-center bg-white/5 flex-shrink-0 overflow-hidden`}>
      {member.image ? (
        <Image src={member.image} alt={member.name} width={px} height={px} className="w-full h-full object-cover" />
      ) : (
        <span className={`font-display font-black text-neon ${txt}`}>{member.initials}</span>
      )}
    </div>
  )
}

const LeaderCard = ({ member }: { member: TeamMember }) => (
  <div className="group glass border border-white/5 hover:border-neon/20 transition-all duration-400 p-8 flex flex-col items-center text-center relative overflow-hidden">
    <Avatar member={member} size="lg" />
    <div className="mt-5 relative z-10 flex flex-col items-center">
      <h3 className="font-display font-bold text-white text-base tracking-wide mb-1">{member.name}</h3>
      <p className="font-mono text-neon text-[10px] uppercase tracking-[0.2em]">{member.role}</p>
    </div>
  </div>
)

const MemberRow = ({ member }: { member: TeamMember }) => (
  <div className="group glass border border-white/5 hover:border-neon/10 transition-all duration-300 p-3 flex items-center gap-3 relative">
    <Avatar member={member} size="sm" />
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-display font-semibold text-white text-sm tracking-wide">{member.name}</h3>
        {member.isED && (
          <span className="font-mono text-[8px] tracking-widest text-neon/80 border border-neon/30 px-1.5 py-0.5 rounded-sm">ED</span>
        )}
      </div>
      <p className="font-mono text-silver/40 text-[10px] tracking-wide uppercase">{member.role}</p>
    </div>
  </div>
)

export default function TeamPage() {
  return (
    <>
      <StarfieldBackground />

      <section className="relative pt-32 pb-16 px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-4">The Organizers</p>
          <h1 className="font-display font-black text-5xl sm:text-7xl uppercase tracking-tighter text-white mb-6">
            Meet the <span className="neon-text">Team</span>
          </h1>
          <p className="font-body text-silver max-w-xl mx-auto">
            The dedicated team behind Karachi's premier student-led finance competition.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-24 relative z-10">
        {/* Core Leadership */}
        <div>
          <div className="mb-10 text-center sm:text-left">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-2">Management</p>
            <h2 className="font-display font-black text-3xl uppercase text-white">Core Leadership</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {LEADERSHIP.map((m, i) => <LeaderCard key={i} member={m} />)}
          </div>
        </div>

        {/* Departments */}
        <div>
          <div className="mb-10 text-center sm:text-left">
            <p className="font-mono text-neon text-xs tracking-[0.4em] uppercase mb-2">Executive Body</p>
            <h2 className="font-display font-black text-3xl uppercase text-white">Departments</h2>
          </div>
          <div className="space-y-12">
            {DEPARTMENTS.map(dept => (
              <div key={dept.name}>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-display font-bold text-white text-lg uppercase tracking-widest">{dept.name}</h3>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dept.members.map((m, i) => <MemberRow key={i} member={m} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="glass border border-white/5 p-12 text-center">
          <h2 className="font-display font-black text-3xl uppercase text-white mb-4">Join the legacy</h2>
          <p className="font-body text-silver text-sm mb-8 max-w-md mx-auto">Interested in volunteering or collaborating? Reach out to our HR department.</p>
          <a href="mailto:isc@iobm.edu.pk" className="btn-neon px-10 py-4 text-xs font-display font-bold tracking-[0.2em] uppercase inline-block">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </>
  )
}