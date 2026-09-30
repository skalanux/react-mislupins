import { useMemo, useState } from 'react'

import type { CollectionRepository } from '../../collection/collectionRepository'
import type { Issue, IssueStatus } from '../../collection/types'

const STATUS_LABELS: Record<IssueStatus, string> = {
  missing: 'Faltante',
  existent: 'Existente',
  duplicated: 'Duplicado',
}

const STATUS_CLASSES: Record<IssueStatus, string> = {
  missing: 'bg-ml-missing',
  existent: 'bg-ml-existent',
  duplicated: 'bg-ml-duplicated',
}

interface PlanitosViewProps {
  repository: CollectionRepository
}

interface SchematicsMatch {
  issue: Issue
  schematics: string[]
}

const PlanitosView = ({ repository }: PlanitosViewProps) => {
  const [query, setQuery] = useState('')

  const matches = useMemo<SchematicsMatch[]>(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return []

    return repository
      .getCollection()
      .flatMap((issue) => {
        const matching = issue.schematics.filter((schematic) =>
          schematic.toLowerCase().includes(normalizedQuery),
        )
        return matching.length > 0 ? [{ issue, schematics: matching }] : []
      })
  }, [query, repository])

  const hasQuery = query.trim().length > 0

  return (
    <section className="grid grid-cols-1 gap-6">
      <div>
        <h1 className="text-3xl font-bold text-stone-900">Buscar planitos</h1>
        <p className="mt-1 text-stone-500">
          Encontrá el número que tiene el planito que buscás dentro de la colección.
        </p>
      </div>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ej: radio, mosquitero, pulqui…"
        aria-label="Buscar planitos"
        className="w-full max-w-xl rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-900 focus:border-ml-red focus:outline-none"
      />

      {hasQuery && matches.length === 0 && (
        <p className="text-stone-500">
          No se encontraron planitos para «{query.trim()}».
        </p>
      )}

      {matches.length > 0 && (
        <ul className="grid grid-cols-1 gap-4">
          {matches.map(({ issue, schematics }) => (
            <li
              key={issue.number}
              className="rounded-lg border border-stone-200 bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-stone-900">
                  Número {issue.number}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold text-white ${STATUS_CLASSES[issue.status]}`}
                >
                  {STATUS_LABELS[issue.status]}
                </span>
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {schematics.map((schematic) => (
                  <li
                    key={schematic}
                    className="rounded bg-stone-100 px-2 py-1 text-sm text-stone-700"
                  >
                    {schematic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default PlanitosView