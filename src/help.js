const help = (prefix) => {
	return `> *Sticker Comandos* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : reply sticker\n

~Aysllan

> *Meme Comandos* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : just send the command\n
> *Others Commands* <
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : apenas envie o comando\n
command : *${prefix}url2img*
desc : tirar screenshots da web
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem com legenda\n
command : *${prefix}wait*
desc : search anime with image [ What Anime Is This/That ]
usage : responder imagem ou enviar imagem com legendan\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
command : *${prefix}kick*
desc : banir membro do grupo
usage : *${prefix}kick [@number]*\nexample : *${prefix}kick @number*
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}add*
desc : add membro no grupo
usage : *${prefix}add [number]*\nexample : *${prefix}add 551198129xxxx*
note : Este comando pode ser usado se você for um administrador do grupo\n
command : *${prefix}bc*
desc : transmissão
usage : *${prefix}bc [text]*\nexample : *${prefix}bc text*
note : This command can only be used by the bot owner\n

AYSLLAN COMEU TEU CU

> *Group Comands* <
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador do grupo\n`
}

exports.help = help


