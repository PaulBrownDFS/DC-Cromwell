import { slot_cardlist } from '../../../../fake-api/content-006/slot-cardlist';

export default function handler(req, res) {
  res.status(200).json(slot_cardlist);
}
