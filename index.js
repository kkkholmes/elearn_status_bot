const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => {
    (async () => {
        const urlStatusCode = require('url-status-code')
        const url = 'https://elearn.nubip.edu.ua/'
        try {
          const status = await urlStatusCode(url)
          console.log(status)
          await ctx.reply(`Elearn Status : працює 🟢
станом на ${new Date().toLocaleString()}`);
        } catch (error) {
          console.error(error)
          await ctx.reply(`Elearn Status : лежить 🔴
станом на ${new Date().toLocaleString()}`);
        }
      })()
})

bot.hears('!elearn', (ctx) => 
{(async () => {
    const urlStatusCode = require('url-status-code')
    const url = 'https://elearn.nubip.edu.ua/'
    try {
      const status = await urlStatusCode(url)
      console.log(status)
      await ctx.reply(`Elearn Status : працює 🟢
станом на ${new Date().toLocaleString()}`);
    } catch (error) {
      console.error(error)
      await ctx.reply(`Elearn Status : лежить 🔴
станом на ${new Date().toLocaleString()}`);
    }
  })()})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))