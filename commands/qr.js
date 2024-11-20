export default async event => {
  try {
    const result = await event.reply({
      type: 'text',
      text: '你想要聽哪一首歌',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              // 按下去後使用者會傳送出的文字
              text: '悴んだ心 ふるえる眼差し 世界で，僕は ひとりぼっちだった，散ることしか知らない春は，毎年 冷たくあしらう，暗がりの中 一方通行に ただ ただ，言葉を書き殴って，期待するだけ むなしいと分かっていても，救いを求め続けた',
              // text: '心力交瘁 害怕的眼神 在這世界上，我曾經是獨自一人孤獨的存在，只知道獨自逝去的春天，在每年我只感受到寒冷，在黑暗之中 我只是 只是 獨自前行，將話語胡亂書寫在筆記本上，就算我知道擅自期待是白費工夫，但是我依舊在尋求著他人的救贖',
              // 按鈕顯示文字
              label: '春日影'
            }
          },
          {
            type: 'action',
            action: {
              type: 'uri',
              uri: 'https://youtu.be/W8DCWI_Gc9c?feature=shared',
              label: '春日影'
            }
          },
          {
            type: 'action',
            action: {
              type: 'postback',
              label: '春日影',
              data: 'aaa'
            }
          }
        ]
      }
    })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
