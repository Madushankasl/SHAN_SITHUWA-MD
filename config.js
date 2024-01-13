const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94726365592'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94726365592"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURQRnhJK1R2WnFBR0tWM1Z2elFHY29ncGh5Y3pWdUFmWWpOWHBYblkzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFhPa0h2djV0ajdhRFhJV0JCeEhWQVNBY3FMWGU0TXZ4VlVsVXlZUTVoTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RkZtNVZqSUNITm1Razk5S2wydmJzMVVqWkZBMy9ackJFdGRIMlFiRjJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTUV1b2kyTHhJMVZXWEo4RmM4SXZJWWNJa2x2cWpSaDZzK0g2QTZqejJnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIMkE2Vkl4SVBsR0NFMzlYMWl5NW9yR3lXbkU3VmMwcWpyaS8ySUczbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUzYjlYaWR1SHRlejZacGp2UTdJdFZTeEVwRGlwV0oyb0w5M1BoNUNhVFU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZUEyQXQzSXpzQWdxdzlsRmdaVDdOaEFnbmdNMndnK1djRFpESkxVQnJLWFpFK1lra2Q0SmtINFNHbkRLcU43YVQ3Qlc3QTJ6QUpzdVFxbjVHZ0hCUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE1NiwiYWR2U2VjcmV0S2V5IjoiK0VzZ0lSZ1V1VU16MEtNZTVMYlFDSHhON280cDEvaVl2WE5EcDc2Tll5Zz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZEFZUUxnZkVTLVdOUGpvVWkxamJIQSIsInBob25lSWQiOiJmNzVmZWZkZC1hZTQyLTQyNjUtOGNkYS1lODlkMzMyMzU0MWMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblRTUit4VHBRQ2dtZXFKMTgrdTF3MmJxVTlRPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QXZPRDlPdEZ0L2x4VGlnNDVIeElFa3Z2S2s9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMbWlqc1FGRVBXV2dLMEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndhWHZYNmh3WmJ1VGtYUDlTTWNROUZPRU9sTi9TdnlzMzFObml0N3Q2Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVncFNEbnc1a25ySFRlK05oVEVRYk5Wcml0VFFQTVBxWk5QWFBidG9WRlRnLy8rbGd5MHRMMTdwVTFQc0t3U0xlRmFuUktpQkNpKzlxT1B5K0xqVUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpZ2IzWllPSGRiOVk1S1hwREhQY1krSGpsRkttL20rMEE0UnFTR1graGw4Y3d6TUxUQ012N0JyZFgrU1pxTEVPYlhHNUkrbDZYZWJyb21EKzZrZlNBQT09In0sIm1lIjp7ImlkIjoiOTQ3MjYzNjU1OTI6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+YufCfkpQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjYzNjU1OTI6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0dsNzErb2NHVzdrNUZ6L1VqSEVQUlRoRHBUZjByOHJOOVRaNHJlN2VvTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDk4NzUxMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOd2sifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'shan' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
