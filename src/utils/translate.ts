const translations = {
    'Customer created has successfully!': 'Cliente criado com sucesso!',
    'Error on create customer.': 'Erro ao criar cliente.',

    'Customer edited has successfully!': 'Cliente editado com sucesso!',
    'Error on editing customer.': 'Erro ao editar cliente.'
} as const

export type MessageKey = keyof typeof translations;

function translate(key: string): string {
  return translations[key as MessageKey] || key;
}

export default translate;