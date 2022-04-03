// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE

export class ErrorObject extends Error {
  code: string;
  message: string;
  field: string | null;
  type: string;

  constructor(
    code: string,
    field: string | null,
    type: string,
    message: string
  ) {
    super();
    this.code = code;
    this.field = field;
    this.type = type;
    this.message = message;
  }
}
