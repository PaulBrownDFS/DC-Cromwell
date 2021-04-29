import { cardlist } from '../../../fake-api/static-cardlist';

export default function handler(req, res) {
  res.status(200).json(cardlist);
}
