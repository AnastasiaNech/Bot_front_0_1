const TelegramBot = require('node-telegram-bot-api');

const token = '5836658333:AAGM2lRF_sDjsxliWs263MW9PElVQj3-cBs'

const bot = new TelegramBot(token, {polling: true});



bot.on('message',  async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if(text === '/start')
    {
     await bot.sendPhoto(chatId, "./img.png");
     await bot.sendMessage(chatId, 
`Добро пожаловать ${msg.from.first_name}!

Я помогу Вам оформить подписку на зарубежный сервис.
Для начала выберете подписку и срок подписки`,
{
    reply_markup:{
       inline_keyboard: [
            [{text: 'Выбрать подписку', web_app: {url:'https://anastasianech.github.io/'}}],
        ]
} 
});
    }
  });