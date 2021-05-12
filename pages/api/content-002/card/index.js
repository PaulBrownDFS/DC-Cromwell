import { card } from '../../../../fake-api/content-002/card';

export default function handler(req, res) {
  res.status(200).json(card);
}
