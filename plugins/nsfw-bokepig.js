import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.saipulanuar.my.id/api/bokepig?apikey=9vxw5GqJ'
	conn.sendButton(m.chat, 'Nih Kak Awas Sange :v', wm, await(await fetch(url)).buffer(), [['\nJadi Sange',`huuu`]],m)
}
handler.command = /^(bokepig)$/i
handler.tags = ['nsfw']
handler.help = ['bokepig']
handler.private = true
handler.limit = 3

export default handler