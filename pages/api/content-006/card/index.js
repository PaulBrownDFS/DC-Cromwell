import { card } from '../../../../fake-api/content-006/card';

export default function handler(req, res) {
  res.status(200).json(card);
}
