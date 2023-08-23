/* eslint-disable no-plusplus */
export function cpfMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export function zipCodeMask(value: string) {
  return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
}

export function brCurrencyMask(value: string) {
  return Number(
    value
      .replace(/(.*){1}/, "0$1")
      .replace(/[^\d]/g, "")
      .replace(/(\d\d?)$/, ".$1")
  ).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
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
