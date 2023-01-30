import type { NextApiRequest, NextApiResponse } from "next";
import { sum } from "@/pages/utils/sum";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { num1, num2 } = req.query;
  const result = sum(num1, num2);

  res.status(200).json({ total: result });
}
