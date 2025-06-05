export interface AuthForm {
    email: string,
    password: string
}

export interface ProductForm {
    name: string,
    value: string,
    description: string,
    quantity: string,
    active?: boolean
}

export interface Product {
    id: number,
    name: string,
    description: string,
    value: string,
    quantity: string,
    active: number,
    deleted: number,
    created_at: string,
    updated_at: string
}

export interface ProductModals {
    edit: boolean,
    delete: boolean
}

export interface CustomerForm {
    first_name: string,
	last_name: string,
	telephone: string,
	cpf_cnpj: string,
	address: string,
    active?: boolean
}

export interface Customer {
    id: number,
    first_name: string,
    last_name: string,
    telephone: string,
    cpf_cnpj: string,
    address: string,
    active: number,
    deleted: number,
    created_at: string,
    updated_at: string
}

export interface CustomerModals {
    edit: boolean,
    delete: boolean
}