import type { Issue } from '../features/collection/types'

export type { Issue }

const templateIssues: Array<Omit<Issue, 'number'>> = [
  { status: 'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca'] },
  { status: 'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio'] },
  { status: 'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar'] },
  { status: 'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm'] },
  { status: 'missing', comics: ['mosca kid', 'saltapones', 'piedrito y saurito'], schematics: ['pucara ua180', 'vumetro'] },
  { status: 'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio'] },
  { status: 'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar'] },
  { status: 'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm'] },
  { status: 'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca'] },
  { status: 'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio'] },
]

const mockedIssues: Record<number, Issue> = {}
let totalCounter = 1
let templateCounter = 0

do {
  const template = templateIssues[templateCounter]
  if (template) {
    mockedIssues[totalCounter] = { number: totalCounter, ...template }
  }
  templateCounter++
  if (templateCounter === 9) {
    templateCounter = 0
  }
  totalCounter++
} while (totalCounter < 500)

export { mockedIssues }