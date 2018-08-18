okazajo
=======

TBD


## npm scripts
_okazajo_ uses [`scripty`](https://github.com/testdouble/scripty) to organize
npm scripts. The scripts are defined in the [`scripts`](/scripts) directory.
In `package.json` you'll see the word `scripty` as opposed to the script
content you'd expect. For more info, see
[scripty's GitHub](https://github.com/testdouble/scripty).

### Scripts

- `build`: compile tsc files from `/server` to es5 files in `/dist/server.js` and bundle client app
- `dev:client`: run client app on http://localhost:1234 watching sources with parceljs
- `dev:server`: run server app on http://localhost:1337 watching sources with nodemon  (and TSC compilation)
- `test`: TBD
