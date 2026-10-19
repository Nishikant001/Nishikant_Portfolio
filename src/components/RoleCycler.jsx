import { useEffect, useState } from 'react'

/**
 * Stacked role headline. Lines rise out of a mask on a timer.
 * With reduced motion it shows the first role and never cycles.
 */
export default function RoleCycler({ roles, reduced, interval = 2900 }) {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(-1)

  useEffect(() => {
    if (reduced) return undefined
    const id = setInterval(() => {
      setActive((a) => {
        setPrev(a)
        return (a + 1) % roles.length
      })
    }, interval)
    return () => clearInterval(id)
  }, [reduced, roles.length, interval])

  return (
    <div className="grid" aria-live="off">
      {roles.map((lines, i) => {
        const state = i === active ? 'in' : i === prev ? 'out' : 'wait'
        const current = i === active
        return (
          <div
            key={lines.join(' ')}
            className="role [grid-area:1/1]"
            data-state={state}
            aria-hidden={!current}
          >
            {lines.map((line, li) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span
                  className="role-line block"
                  style={{ transitionDelay: state === 'in' ? `${li * 90}ms` : `${li * 40}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </div>
        )
      })}
    </div>
  )
}
