import { cardlist } from '../../../../fake-api/content-002/cardlist';

export default function handler(req, res) {
  res.status(200).json(cardlist);
}
