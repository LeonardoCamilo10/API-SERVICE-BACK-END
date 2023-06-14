import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
  const hashPassword = bcrypt.hash(password, 8);
  return hashPassword;
}
