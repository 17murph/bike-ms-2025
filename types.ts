export interface Episode {
  title: string
  guest: string
  link: string
}

export interface Season {
  number: number
  episodes: Episode[]
}
