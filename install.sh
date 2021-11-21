#!/usr/bin/bash

pkg update
pkg install nodejs
pkg install libwebp
pkg install ffmpeg
pkg install wget
pkg install tesseract
npm install hxz-api
npm install textmaker-thiccy
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
cd node_modules
npm i  @adiwajshing/baileys
tsc
cd ../../../
echo "ɪɴsᴛᴀʟᴀᴄ̧ᴀ̃ᴏ ᴄᴏɴᴄʟᴜɪ́ᴅᴀ !"
echo "[ Base Venom ] -> digite \"npm start\" para iniciar."
