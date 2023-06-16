function botui_init() {
  var botui = new BotUI("hello-akilar");
  botui.message.add({
    delay: 800,
    content: "Hi, welcome to lan's blog."
  }).then(function() {
    botui.message.add({
      delay: 1100,
      content: "我是Lan_bot"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "你也可以叫我Lan"
      }).then(function() {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "我想知道更多关于lan's blog的事!",
            value: "sure"
          }, {
            text: "好的，就这样吧，拜拜！🙄",
            value: "skip"
          }]
        }).then(function(a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  var sure = function() {
      botui.message.add({
        delay: 600,
        content: "🎉🎉🎉🎉🎉🎉"
      }).then(function() {
        secondpart()
      })
    },
    end = function() {
      botui.message.add({
        delay: 600,
        content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
      })
    },
    secondpart = function() {
      botui.message.add({
        delay: 5000,
        content: "首先呢，很感谢您肯在这里驻足片刻❤️。Lan's blog是一个个人性质的博客，我会在这里发表各种各样的内容。"
      }).then(function() {
        botui.message.add({
          delay: 15000,
          content: "为什么会有这个博客？之前帮同学搭了个博客，于是就想着自己搞一个，偶尔会写几篇教程之类的东西"
        }).then(function() {
          botui.message.add({
            delay: 5000,
            content: "文章嘛，随便写写然后就咕咕咕了"
          }).then(function() {
            botui.message.add({
              delay: 8000,
              content: "Neko Neko~"
            }).then(function() {
              botui.message.add({
                delay: 5000,
                content: "文章写得不好请见谅"
              }).then(function() {
                botui.message.add({
                  delay: 4000,
                  content: "咕咕咕"
                }).then(function() {
                  botui.action.button({
                    delay: 1100,
                    action: [{
                      text: "为什么叫Lan's blog呢？🤔",
                      value: "why-mashiro"
                    }]
                  }).then(function(a) {
                    thirdpart()
                  })
                })
              })
            })
          })
        })
      })
    },
    thirdpart = function() {
      botui.message.add({
        delay: 1e3,
        content: "因为网名叫初岚"
      }).then(function() {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "😲，那英文网名为什么是Chula呢？",
            value: "why-cat"
          }]
        }).then(function(a) {
          fourthpart()
        })
      })
    },
    fourthpart = function() {
      botui.message.add({
        delay: 3000,
        content: "初岚这个名字被Microsoft拼成了Chula，于是索性就叫Chula了"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "网名来源是Deco*27的一首曲子，名字就叫初岚"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "方便透露一下真名吗？👀",
              value: "why-domain"
            }]
          }).then(function(a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function() {
      botui.message.add({
        delay: 5000,
        content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
      }).then(function() {
        botui.message.add({
          delay: 3000,
          content: "只是一介无名小卒而已^_^"
        })
      })
    }
}
