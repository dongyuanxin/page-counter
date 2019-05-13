#!/usr/bin/env sh

# If error occurs, throw it
set -e

# build static files:
# npm run build

# cd deploy files:
cd examples/

# If you have special hostname, run it:
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# If you depoly it to https://<USERNAME>.github.io: 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# If you depoly it to https://<USERNAME>.github.io/<REPO>:
if [ "$1" == "https" ] 
then
  git push -f https://github.com/dongyuanxin/page-counter.git master:gh-pages
else 
  git push -f git@github.com:dongyuanxin/page-counter.git master:gh-pages
fi

# remove git:
rm -rf .git/

cd -