export type IssueStatus = 'missing' | 'existent' | 'duplicated'

export interface Issue {
  number: number
  status: IssueStatus
  comics: string[]
  schematics: string[]
}