export interface AuthForm {
    email: string,
    password: string
}

export interface ProductForm {
    name: string,
    value: number,
    description: string,
    quantity: number
}

export interface CustomerForm {
    first_name: string,
	last_name: string,
	telephone: string,
	cpf_cnpj: string,
	address: string
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