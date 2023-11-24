export interface GradeAndWeight {
    grade: number
    weight: number
}

export interface Wallet {
    balance: number
    draft?: number
    deposit?: number
}

export interface Product {
    productName: string
    price: number
}

export interface ProductCRD {
    register?: Product
    listProducts?: boolean
    deleteProduct?: Product
}

export interface User {
    name: string
    age: number
    occupation: string
    wage?: number | string
}

export interface Director extends User {
    commission: number
}

export type CompanyMember = Director | User