# BNG
SRC BNG BOT Discord.js V12

website : www.bngbot.xyz


copy right Tomato6969
https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js

วิธีติดตั้ง

1.ดาวน์โหลด [node.js v12+](https://nodejs.org/en/download/) <br><br>
2.ดาวน์โหลด ไฟล์ Zip หรือ ใช้ git clone ก็ได้<br><br>
3.ติดตั้ง packages <br><br>
**`npm install discord.js @discordjs/opus @ksoft/api ascii-table canvacord canvas colors common-tags discord.js enmap erela.js erela.js-deezer erela.js-facebook erela.js-spotify lyrics-finder ms radio-browser `**<br><br>
4.แก้ไข Token OwnerID ได้ที่ botconfig/config.json<br><br>
5.ดาวน์โหลด [Download Lavalink](https://cdn.discordapp.com/attachments/798196676405755905/827174915714711572/Lavalink.jar) มาใส่ไว้ที่รวมไฟล์<br><br>
6.รันบอท เปิด start.bat<br><br>

## Windows start Command .bat file
```bat
@ECHO OFF
ECHO ==========================
ECHO Starting Lavalink
ECHO ==========================
start cmd /k java -jar ./Lavalink.jar
ECHO ==========================
@ECHO Taking a 5 Second Break for Lavalink
ECHO ==========================
timeout /T 5 /nobreak
ECHO ==========================
@ECHO Starting BOT
ECHO ==========================
start cmd /k node .
exit /s'
```
