/* export interface Container {
    background: string,
    padding: number,
}

export interface Screen {
    background: string,
    padding: number,
}

export interface Button {
    background: string,
    title: string,
}

export interface Navigation {
    background: string,
    title: string,
} */

export interface Color {
    background: string,
    title: string,
    subtitle: string,
    description: string,
    body: string,
    border: string,
    purple: string,
    blue: string,
    gradient: string,
}

export interface Spacement {
    padding: number,
    margin: number,
    marginVertical: number,
    margimHorizontal: number,
}

export interface Font {
    title: FontSize, // 1
    subtitle: FontSize, // 5
    description: FontSize, // 6
    body: FontSize,
}

interface FontSize {
    size: string,
    lineheight: number, 
    family: string,
}

export const spacement: Spacement = {
    padding: 15,
    margin: 10,
    marginVertical: 10,
    margimHorizontal: 10,
}

export const font: Font = {
    title: {
        size: '22px',
        lineheight: 1, 
        family: 'bold',
    },
    subtitle: {
        size: '16px',
        lineheight: 1, 
        family: 'semibold',
    }, 
    description: {
        size: '12px',
        lineheight: 1, 
        family: 'medium',
    }, 
    body: {
        size: '12px',
        lineheight: 1,
        family: 'regular',
    }, 
}