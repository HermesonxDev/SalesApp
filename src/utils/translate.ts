const translations = {
    // Cliente
    'Customer created has successfully!': 'Cliente criado com sucesso!',
    'Error on create customer.': 'Erro ao criar cliente.',

    'Customer edited has successfully!': 'Cliente editado com sucesso!',
    'Error on editing customer.': 'Erro ao editar cliente.',

    'Customer deleted has successfully!': 'Cliente deletado com sucesso!',
    'Error on deleting customer.': 'Erro ao deletar cliente.',

    // Produto
    'Product created has successfully!': 'Produto criado com sucesso!',
    'Error on product creation.': 'Erro ao criar produto.',

    'Product edited has successfully!': 'Produto editado com sucesso!',
    'Error on editing product.': 'Erro ao editar produto.',

    'Product deleted has successfully!': 'Produto deletado com sucesso!',
    'Error on deleting product.': 'Erro ao deletar produto'
} as const

export type MessageKey = keyof typeof translations;

function translate(key: string): string {
  return translations[key as MessageKey] || key;
}

export default translate;