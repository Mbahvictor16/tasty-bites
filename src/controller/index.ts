import { RequestHandler } from "express";

const getIndex: RequestHandler = async (req, res, next) => {
  return res.status(200).render("index");
};

export { getIndex };
