import type { Issue } from '../types'

const templates: Array<Pick<Issue, 'status' | 'comics' | 'schematics'>> = [
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

export function buildSeedIssues(total = 499): Issue[] {
  const issues: Issue[] = []
  for (let number = 1; number <= total; number++) {
    const template = templates[(number - 1) % templates.length]
    issues.push({ number, ...template })
  }
  return issues
}