/* eslint-disable no-plusplus */
export function cpfMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function brPhoneNumberMask(value: string) {
  const matrix = "## ##### ####";

  let i = 0;
  const newValue = value.replace(/\D/g, "");

  return matrix.replace(/(?!\+)./g, (a) => {
    return /[#\d]/.test(a) && i < newValue.length
      ? newValue.charAt(i++)
      : i >= newValue.length
      ? ""
      : a;
  });
}
