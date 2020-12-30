const help = (prefix) => {
	return `
┏┳┳┅┅┅┅┅┅┅┅┅┅┅┓

┋┋┋ *Ａｙｓｌｌａｎ*

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┛

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}sticker* ou *${prefix}stiker*
desc : Converter imagem / gif / vídeo em adesivo
uso : Responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}toimg*
desc : Converter adesivo em imagem
uso : Responda a sticker\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}meme*
desc : Imagens aleatórias de meme [english]
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}gtts*
desc : Converter texto em fala / áudio
uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts pt Oi sou um bot*\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}ocr*
desc : Pegue o texto na foto
uso : Responder imagem ou enviar imagem com legenda\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}setprefix*
desc : Substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexamplo : *${prefix}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}clearall*
desc : Excluir conversas abertas do bot
uso : Apenas envie o comando
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}kick*
desc : Banir membro do grupo
uso : *${prefix}kick [@number]*\nexamplo : *${prefix}kick @number*
nota : Este comando só pode ser usado se você for um administrador do grupo
nota² : Este comando só pode ser usado se o bot for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}add*
desc : Adiciona membro ao grupo
uso : *${prefix}add [number]*\nexample : *${prefix}add 551198129xxxx*
nota : Este comando só pode ser usado se você for um administrador do grupo
nota² : Este comando só pode ser usado se o bot for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}welcome 1*
desc : Ativa mensagem de boas vindas
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}welcome 0*
desc : Desativa mensagem de boas vindas
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}bc*
desc : Transmissão para todos chats abertos do bot
uso : *${prefix}bc [text]*\nexamplo : *${prefix}bc text*
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}tagall*
desc : Marca todos os membros do grupo, incluindo administradores também
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}info*
desc : Exibe algumas informações do bot
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}madara*
desc : Gera cartões de créditos validos para aprovação
uso : Apenas envie o comando
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

┋┋┋ *Ａｙｓｌｌａｎ*

┗┻┻┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛
`
}

exports.help = help


