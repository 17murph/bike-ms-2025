export interface Episode {
  id?: string
  title: string
  guest: string
  link: string
  date?: string
}

export interface Season {
  number: number
  episodes: Episode[]
}
