const { orm } = require("../config/orm")

var burger = {
  all: function (cb) {
    orm.selectAll("burger", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.find("burger", "burger_name",vals[0], function (rs) {
      if (rs.length === 0) {
        orm.insertOne("burger", cols, vals, function (res) {
          cb(res);
        });
      }
    })
  },
  update: function(id,devoured,cb) {
    orm.update("burger", "devoured", devoured, "id", id, function (res) {
      cb(res);
    });
  }
};
module.exports = { burger }