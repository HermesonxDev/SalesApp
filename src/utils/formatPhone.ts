function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits.length < 10) return digits;

  const ddd = digits.substring(0, 2);
  const firstDigit = digits.substring(2, 3);
  const part1 = digits.substring(3, 7);
  const part2 = digits.substring(7, 11);

  return `(${ddd}) ${firstDigit} ${part1}-${part2}`;
}

export default formatPhone;