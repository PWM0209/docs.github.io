npm run build

cd dist

echo 'docs.mutang.art' > CNAME
echo '# https://github.com/PWM0209/docs.github.io.git' > README.md

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/PWM0209/docs.github.io.git master