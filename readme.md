microCMS更新
→GithubActionsが動く
→Github内のAstroがHTMLを出力
→HTMLをSSHでXserverにアップロード
までの流れ。



まずは、
下記を1つずつGithubのリポジトリのSecrets and variablesに保存。
MICROCMS_SERVICE_DOMAIN: pptakatest
MICROCMS_API_KEY: apikey
XSERVER_HOST: sv14742.xserver.jp
XSERVER_USER: pixelpaper2
XSERVER_REMOTE_PATH: /home/pixelpaper2/pp-i.net/public_html/th_test/microcms/deploy/   ←出力したいパス
XSERVER_SSH_KEY: -----BEGIN OPENSSH PRIVATE KEY-----

ymlファイルにnpm run buildなどを記述してGithubに入れておく。
また、サーバーにSSH接続でアップする場所を記述する。
Astroファイルも記述して、出力したい内容を入れてGithubに入れておく。

WebhookでGithubActionsが動くとき、ymlファイルがAstroファイルをbuildしてアップロードしてくれる。



gitへの接続は、ローカルPCの.sshフォルダ内のid_ed25519.pubファイルで行った。
ターミナルでGitのPushは下記の順番
git init
git add .env
git commit -m "env commit"
git branch -M main
git remote add origin https://github.com/takamori-pp/microcms.git
git push -u origin main