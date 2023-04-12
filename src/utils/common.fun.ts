import { v4 as uuid } from 'uuid';

export default function getUniqueId() {
  return uuid().slice(0, 6);
}
