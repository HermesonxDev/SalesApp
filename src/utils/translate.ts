const translations = {
    'Customer created has successfully!': 'Cliente criado com sucesso!',
    'Error on create customer.': 'Erro ao criar cliente.'
} as const

export type MessageKey = keyof typeof translations;

function translate(key: string): string {
  return translations[key as MessageKey] || key;
}

export default translate;