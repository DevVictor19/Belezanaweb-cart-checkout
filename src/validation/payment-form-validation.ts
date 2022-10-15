import * as yup from "yup";

export const paymentSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^\d+$/, "Devem ser apenas digitos")
    .min(16, "Devem ser exatos 16 digitos")
    .max(16, "Devem ser exatos 16 digitos")
    .required("Esse campo é obrigatório"),
  ownerName: yup
    .string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Devem ser apenas letras"
    )
    .min(10, "Devem ser apenas letras (min. 10)")
    .required("Esse campo é obrigatório"),
  validityDate: yup
    .string()
    .matches(/^[\d]{2}\/[\d]{4}/, "Formato inválido")
    .test("valid-date", "Data inválida", (value) => {
      const date = value?.split("/").map(Number);
      const currentYear = new Date().getFullYear();

      if (!date) return false;

      if (date[0] <= 0 || date[0] > 12) {
        return false;
      }

      if (date[1] < currentYear) {
        return false;
      }

      return true;
    })
    .required("Esse campo é obrigatório"),
  cvv: yup
    .string()
    .matches(/^\d+$/, "Devem ser apenas digitos")
    .min(3, "Devem ser exatos 3 digitos")
    .max(3, "Devem ser exatos 3 digitos"),
});
