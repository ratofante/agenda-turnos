const nameRules = [
  (value) => {
    if (value) return true;
    return "Es necesario tu nombre para registrarte";
  },
  (value) => {
    if (value?.length <= 10) return true;
    return "Tu nombre debe contener menos de 10 caracteres.";
  },
];
const emailRules = [
  (value) => {
    if (value) return true;
    return "Es necesario tu e-mail para registrarte.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "Debes ingresar un e-mail válido.";
  },
];
const phoneRules = [
  (value) => {
    if (value) return true;
    return "Es necesario tu teléfono para registrarte.";
  },
];
const passwordRules = [
  (value) => {
    if (value) return true;
    return "Es necesaria una contraseña para tu cuenta.";
  },
  (value) => {
    if (value?.length >= 8) return true;
    return "La constraseña debe tener al menos 8 dígitos";
  },
];

export { nameRules, emailRules, phoneRules, passwordRules };
