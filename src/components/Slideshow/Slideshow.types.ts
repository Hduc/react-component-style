export interface SlideshowProps {
    id?: string;
    active?: number;
    data?: ImageObj[];
}
export interface ImageObj {
    url?: string;
    id?: string;
    name?: string;
}
