export const HAS_SYMBOL: RegExp = /[^A-Z0-9\s]/ig;
export const HAS_NUMBER: RegExp = /[0-9]/g;
export const HAS_LETTER: RegExp = /[A-Z]/ig;

export const ONLY_SYMBOLS: RegExp = /^[^A-Z0-9\s]+$/igm;
export const ONLY_NUMBERS: RegExp = /^[0-9]+$/igm;
export const ONLY_LETTERS: RegExp = /^[A-Z]+$/igm;

export const IS_NUMBER: RegExp = /(^[1-9]+[0-9]*$)|(^0$)/igm;
export const IS_FLOAT: RegExp = /^[0-9]+[0-9]*\.[0-9]+$/igm;

export const IS_NAME: RegExp = /^[A-Z]+$/ig;
export const IS_PHONE_NUMBER: RegExp = /^(\d{3}-\d{3}-\d{4})$/igm;
export const IS_EMAIL_ADDRESS: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const IS_VIN: RegExp = /()/;
export const IS_LICENSE_PLATE: RegExp = /()/;

export const IS_CARD_NUMBER: RegExp = /()/;
export const IS_EXPIRATION_DATE: RegExp = /()/;
export const IS_CVV: RegExp = /()/;
export const IS_PRICE: RegExp = /()/;