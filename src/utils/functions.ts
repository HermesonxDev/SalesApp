export function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, '');

    if (digits.length < 10) return digits;

    const ddd = digits.substring(0, 2);
    const firstDigit = digits.substring(2, 3);
    const part1 = digits.substring(3, 7);
    const part2 = digits.substring(7, 11);

    return `(${ddd}) ${firstDigit} ${part1}-${part2}`;
}

export function format_CPF_and_CNPJ(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '');

  if (onlyNumbers.length <= 11) {
    return onlyNumbers
      .replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, (_, a, b, c, d) => {
        return `${a}.${b}.${c}${d ? '-' + d : ''}`
      })
      .substring(0, 14);
  } else {
    return onlyNumbers
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, (_, a, b, c, d, e) => {
        return `${a}.${b}.${c}/${d}${e ? '-' + e : ''}`
      })
      .substring(0, 18);
  }
}

export const formatCurrencyBRL = (value: string): string => {
  const numeric = value.replace(/\D/g, '');
  if (!numeric) return '';

  const number = (parseFloat(numeric) / 100).toFixed(2);
  const formatted = Number(number).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatted;
};

export function unformat(value: string): string {
  return value.replace(/\D/g, '');
}