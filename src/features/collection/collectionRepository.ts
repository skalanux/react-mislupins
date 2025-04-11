import type { Issue } from './types'

export interface CollectionRepository {
  getCollection(): Issue[]
  getIssue(number: number): Issue | undefined
}

export class SeedCollectionRepository implements CollectionRepository {
  private readonly issues: Issue[]

  constructor(issues: Issue[]) {
    this.issues = issues
  }

  getCollection(): Issue[] {
    return this.issues
  }

  getIssue(number: number): Issue | undefined {
    return this.issues.find((issue) => issue.number === number)
  }
}