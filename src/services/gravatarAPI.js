const API_URL_GRAVATAR = 'https://www.gravatar.com/avatar/';
const CryptoJS = require("crypto-js");

export const getGravatarImage = (email) => {
  const emailToLowerCase = email.toLowerCase();
  // Thanks https://github.com/brix/crypto-js/issues/28
  const MD5 = CryptoJS.MD5(emailToLowerCase).toString();
  return `${API_URL_GRAVATAR}${MD5}`;
};

