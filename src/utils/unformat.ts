function unformat(value: string): string {
  return value.replace(/\D/g, '');
}

export default unformat;
