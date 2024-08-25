import { createHash } from 'node:crypto';

export function md5Hash(value: string) {
  return createHash('md5').update(value).digest('hex');
}
