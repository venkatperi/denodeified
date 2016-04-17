var Q, dfs, fs, fsMethods, m, _i, _len;

fs = require("fs");

Q = require("q");

fsMethods = ["access", "appendFile", "chmod", "chown", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "open", "read", "readFile", "readdir", "readlink", "realpath", "rename", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "write", "writeFile"];

dfs = {};

for (_i = 0, _len = fsMethods.length; _i < _len; _i++) {
  m = fsMethods[_i];
  dfs[m] = Q.denodeify(fs[m]);
}

module.exports = {
  dfs: dfs
};
