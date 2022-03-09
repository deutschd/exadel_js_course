function validatePhoneNymber(str) {
    let isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str); // var -> let
    console.log(isphone);
  }

  validatePhoneNymber('067 734 4343')
  validatePhoneNymber('094 643 7432')
  validatePhoneNymber('083 jfvj 4554')
  validatePhoneNymber('Anton0938 884')
  validatePhoneNymber('0437348348')
  