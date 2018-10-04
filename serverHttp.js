/*
VERSÃO USANDO APENAS O HTTP NATIVO DO NODE.JS
*/

const http = require('http')
const port = 3000
const ip = 'localhost'


const server = http.createServer((request, response) => {
    
  //Forma simples de ler, porém mais extensa e complexa por causa das identações de ifs
  //Descomentar para testes

  // if(request.url == '/'){
  //       response.end('<h1>Home</h1>')
  //   }
  //   if(request.url == '/contato'){
  //       response.end('<h1>Contato</h1>')
  //   }
  //   if(request.url == '/inscreva-se'){
  //       response.end('<h1>Increva-se</h1>')
  //   }    
  //   response.end('<h1>URL sem resposta definida!</h1>')


  //Forma mais difícil de ler, porém melhor desenvolvida
    const responses = []

    responses['/'] = '<h1>Home</h1>'
    responses['/inscreva-se'] = '<h1>Inscreva-se</h1>'
    responses['/contato'] = '<h1>Contato</h1>'
    responses['/naoExiste'] = '<h1>URL sem resposta definida!</h1>'

    response.end(responses[request.url] || responses['/naoExiste'])

})

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c')
})

