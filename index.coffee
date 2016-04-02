fs = require "fs"
Q = require "q"

fsMethods = [ "access", "appendFile", "chmod", "chown", "fchmod", "fchown", "fdatasync", "fstat",
  "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir",
  "open", "read", "readFile", "readdir", "readlink", "realpath", "rename", "rmdir", "stat",
  "symlink", "truncate", "unlink", "utimes", "write", "writeFile" ]

dfs = {}
dfs[ m ] = Q.denodeify fs[ m ] for m in fsMethods

module.exports =
  fs : dfs
