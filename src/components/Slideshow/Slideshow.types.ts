export interface SlideshowProps {
  id?: string
  active?: number
  showThumb?: boolean
  showAction?: boolean
  automatic?: number
  data?: ImageObj[]

  // handle
  onChange?: (page: number) => void
}
export interface ImageObj {
  url?: string
  id?: string
  name?: string
}
