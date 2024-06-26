import basicAuth from "basic-Auth";

module.exports = (req, res, next) => {
  const user = basicAuth(req);
  if (!user || user.name !== "admin" || user.pass !== "password") {
    res.set("WWW-Authenticate", 'Basic realm="example"');
    return res.status(401).send("Unauthorized");
  }
  next();
};
