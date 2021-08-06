import { generateLoremCollection } from "../../helper/lorem";

export default function handleLorem(req, res) {
  const { num } = req.query;
  res.json(generateLoremCollection(Number(num) || 100));
}
