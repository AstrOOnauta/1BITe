export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader?.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
