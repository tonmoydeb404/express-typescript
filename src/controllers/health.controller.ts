import asyncWrapper from "@/helpers/async-wrapper";

export const getHealth = asyncWrapper((_req, res) => {
  return res.status(200).json({ message: "OK" });
});
