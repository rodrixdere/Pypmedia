export interface CardItem {
  id: number
  title: string
  description: string
  image?: string
  tag?: string
}

export interface Feature {
  id: number
  number: string
  title: string
  highlight: string
  description: string
  image?: string
}

export interface ContactInfo {
  instagram: string
  facebook: string
  linkedin: string
  phone: string
  hours: string
  address: string
  coordinates: [number, number]
}
