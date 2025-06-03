function format_CPF_and_CNPJ(value: string): string {
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

export default format_CPF_and_CNPJ;