const { json } = require("micro");

module.exports = async (req, res) => {
  const data = await json(req);
  console.log("input", data);
  console.log("env", process.ENV);

  res.end('{"test": "a"}');
};
