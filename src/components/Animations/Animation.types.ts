export interface IAnimationProps {
  id?: string
  className?:string
  children?: any
  type: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  delay?: number
  timeTransform?: number

  width?: string
  toWidth?:string
  timeWidth?: number

  height?: string
  toHeight?:string
  timeHeight?: number
  transform?:string
}
