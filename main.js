// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU

const Discord = require('discord.js');
const { Client, MessageEmbed, Collection, MessageAttachment  } = require('discord.js');
const bot = new Discord.Client()
const fetch = require("node-fetch")
const https = require("https")

bot.on('ready', () => {
    console.info(`VladkU's Service Bot ${bot.user.tag}!`);
});

bot.login("OTE1MjYzNzI0ODk2NTQ2ODU2.YaZDxA.rInXLw54dAgdoRohbYWcIiv18c8")

bot.on('message', msg => {

    if(msg.content.startsWith("-help")){

    let servericon = msg.guild.iconURL;
    let serverembed = new MessageEmbed()
    .addField("👉 | -serverinfo Тази команда дава инфо за сървара | 👈")
    .addField("👉 | -ip Тази команда казва ip-то на сървара | 👈")
    .addField("👉 | -site Тази команда казва сайта на сървара | 👈")
    .addField("👉 | -botcreator Тази команда показва създателя на бота | 👈")
    .addField("👉 | -members Тази команда показва колко хора има в сървъра | 👈")
    .addField("👉 | -joinedat Тази команда показва кога сте влезли в сървъра | 👈")
    .addField("👉 | -invite Тази команда показва линк, за да ADD - нете бота | 👈")
    .setColor("#fffefe")
    .setFooter(msg.author.tag, msg.author.avatarURL());

    msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-site")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("💦 | Линка за сайтът ви | 💦")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

}else if(msg.content.startsWith("-serverinfo")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("📍 | Информация за сървъра | 📍")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .addField("Име:", msg.guild.name)
        .addField("🔒 | Притежател на сървъра:", `<@DISCORDID>`)
        .addField("🕘 | Създаден на:", msg.guild.createdAt)
        .addField("🌍 | Сървър регион:", msg.guild.region)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-ip")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("⬆️ | Твоето IP на сървъра | ⬆️")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-botcreator")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("👑 | -hxdzhiew#9999 | 👑")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-members")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("🤷‍♂️ | Колко хора има в сървъра? | 🤷‍♂️")
        .addField("👥 | Общо хора:",  msg.guild.memberCount)
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-joinedat")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("⚡ | Кога съм влезнал в сървъра? | ⚡")
        .addField("👉 | Вие се присъединихте на:", msg.member.joinedAt)
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed);

    }else if(msg.content.startsWith("-invite")){

        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("🔥 | https://discord.com/api/oauth2/authorize?client_id=845730763935842304&permissions=8&scope=bot | 🔥")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed); 
        

    }else if(msg.content.startsWith("-tupilisme")){
        let servericon = msg.guild.iconURL;
        let serverembed = new MessageEmbed()
        .setTitle("🔥 | Estestveno che da | 🔥")
        .setColor("#fffefe")
        .setThumbnail(servericon)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL());

        msg.channel.send(serverembed); 
    }
    


})

// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU
// BOTA E NAPRAVEN OT VladkU