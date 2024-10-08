import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.SECRET_key, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(400);
  }
};

export default authenticateJWT;
