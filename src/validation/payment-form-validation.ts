import * as yup from "yup";

export const paymentSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d+$/, "Devem ser apenas digitos")
    .min(16, "Devem ser exatos 16 digitos")
    .max(16, "Devem ser exatos 16 digitos"),
  ownerName: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Devem ser apenas letras"
    )
    .min(10, "Devem ser apenas letras (min. 10)"),
  validityDate: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[\d]{2}\/[\d]{4}/, "Formato inválido")
    .test("valid-date", "Data inválida", (value) => {
      const date = value?.split("/").map(Number);
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;

      if (!date) return false;

      if (date[1] === currentYear && date[0] <= currentMonth) {
        return false;
      }

      if (date[0] < 1 || date[0] > 12) {
        return false;
      }

      if (date[1] < currentYear) {
        return false;
      }

      return true;
    }),
  cvv: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d+$/, "Devem ser apenas digitos")
    .min(3, "Devem ser exatos 3 digitos")
    .max(3, "Devem ser exatos 3 digitos"),
});
