import { RequestHandler } from "express";

const getDocs: RequestHandler = async (req, res, next) => {
  try {
    return res.status(200).render("docs/docs");
  } catch (error) {
    next(error);
  }
};

export { getDocs };
