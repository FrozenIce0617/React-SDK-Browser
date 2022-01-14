export enum SdkIndex {
  INSTALLED = 0,
  UNINSTALLED = 1,
}

export type Sdk = {
  id: string
  name: string
  categories: string[]
  firstSeenDate: string
  lastSeenDate: string
}
