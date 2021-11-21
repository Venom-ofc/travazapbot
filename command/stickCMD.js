let {
 WAConnection: _WAConnection,
 MessageType,
 Presence,
 MessageOptions,
 Mimetype,
 MimetypeMap,
 WALocationMessage,
 ChatModification,
 WA_MESSAGE_STUB_TYPES,
 WA_DEFAULT_EPHEMERAL,
 ReconnectMode,
 ProxyAgent,
 GroupSettingChange,
 waChatKey,
 mentionedJid,
 processTime
} = require("@adiwajshing/baileys"); // Direct Web WhatsApp ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))
let fs = require("fs-extra"); // Read File ;By Lord_ ((+ Arifi Razzaq OFFICIAL +))

const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
             scommand.push(obj)
             fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
         }
const getCommandPosition = (id) => {
      let position = null
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return position
     }
  }
const getCmd = (id) => {
      position = null
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return scommand[position].chats
     }
  }
const checkSCommand = (id) => {
      let status = false
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
              let status = true
           }
        })
     return status
  }
 
module.exports = { 
 scommand, 
 addCmd, 
 getCommandPosition, 
 checkSCommand, 
 getCmd
}