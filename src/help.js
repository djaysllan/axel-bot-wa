const help = (prefix) => {
	return `
*Ａｙｓｌｌａｎ*

command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : reply sticker\n
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : responder imagem ou enviar imagem com legendan\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
command : *${prefix}clearall*
desc : Excluir conversas abertas do bot
usage : apenas envie o comando
note : Este comando só pode ser usado pelo proprietário do bot\n
command : *${prefix}kick*
desc : banir membro do grupo
usage : *${prefix}kick [@number]*\nexample : *${prefix}kick @number*
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}add*
desc : add membro no grupo
usage : *${prefix}add [number]*\nexample : *${prefix}add 551198129xxxx*
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}welcome 1*
desc : Ativa mensagem de boas vindas
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}welcome 0*
desc : Desativa mensagem de boas vindas
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}bc*
desc : transmissão
usage : *${prefix}bc [text]*\nexample : *${prefix}bc text*
note : Este comando só pode ser usado pelo proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n
*Ａｙｓｌｌａｎ*
`
}

exports.help = help


