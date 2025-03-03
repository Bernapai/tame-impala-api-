export type Albums = 'currents' | 'lonerism' | 'innerspeaker'

export interface Song {
  id: number
  title: string
  album: Albums
  year: number
  duration: string
}

export type UpdateSong = (id: number, songUpdates: Partial<Song>) => Song | undefined
