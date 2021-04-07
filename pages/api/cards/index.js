import { bannerTest } from '../../../fake-api/static-banner-test';

export default function handler(req, res) {
  res.status(200).json(bannerTest);
}
