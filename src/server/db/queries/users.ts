import { Query } from '../';
import type { TUsers } from '../models';

const all = () => Query<TUsers[]>('SELECT * FROM chirps JOIN users ON users.id=chirps.userid');
const one = (userid: number) => Query('SELECT id, name FROM users WHERE id =?', [userid]);

export default {
    all,
    one
}