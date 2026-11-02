/**
 * Nickname Command
 * Allows users to set, view, or remove nicknames in group chats
 */

module.exports = {
  config: {
    name: 'setnickname',
    aliases: ['nick'],
    description: 'Manage nicknames in group chats',
    usage: '{prefix}setnickname',
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    category: 'GROUP',
    hasPrefix: true,
    permission: 'PUBLIC',
    cooldown: 5
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(3000)
 api.changeNickname(`${name}`, event.threadID, setname);
    }
}
