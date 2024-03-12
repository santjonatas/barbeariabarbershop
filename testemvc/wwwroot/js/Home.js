function entrarMouseBotaoSobreNos() {
    sobre_nos.style.color = '#9D0005'
}
function clicarMouseBotaoSobreNos() {
    sobre_nos.style.color = '#770105'
    divsobrenos.scrollIntoView({ behavior: "smooth" })
}
function desclicarMouseBotaoSobreNos() {
    sobre_nos.style.color = '#9D0005'
}
function sairMouseBotaoSobreNos() {
    sobre_nos.style.color = 'white'
}

function entrarMouseBotaoAssinatura() {
    assinatura.style.color = '#9D0005'
}
function clicarMouseBotaoAssinatura() {
    assinatura.style.color = '#770105'
    divplanos.scrollIntoView({ behavior: "smooth" })
}
function desclicarMouseBotaoAssinatura() {
    assinatura.style.color = '#9D0005'
}
function sairMouseBotaoAssinatura() {
    assinatura.style.color = 'white'
}

function entrarMouseBotaoInsta() {
    insta.style.borderRadius = '50%'
    insta.style.boxShadow = '0px 0px 10px white'
}
function clicarMouseBotaoInsta() {
    insta.style.backgroundColor = 'rgb(44, 44, 44)'
}
function desclicarMouseBotaoInsta() {
    insta.style.backgroundColor = 'black'
}
function sairMouseBotaoInsta() {
    insta.style.backgroundColor = 'black'
    insta.style.boxShadow = ''
}

function entrarMouseBotaoRegistro() {
    botao_registro.style.backgroundColor = '#9D0005'
    botao_registro.style.boxShadow = '0px 0px 10px #770105'
}
function clicarMouseBotaoRegistro() {
    botao_registro.style.backgroundColor = '#770105'
}
function desclicarMouseBotaoRegistro() {
    botao_registro.style.backgroundColor = '#9D0005'
}
function sairMouseBotaoRegistro() {
    botao_registro.style.backgroundColor = '#F50109'
    botao_registro.style.boxShadow = '0px 0px 10px #9D0005'
}

function entrarMouseBotaoLogin() {
    botao_login.style.backgroundColor = '#9D0005'
    botao_login.style.boxShadow = '0px 0px 10px #770105'
}
function clicarMouseBotaoLogin() {
    botao_login.style.backgroundColor = '#770105'
}
function desclicarMouseBotaoLogin() {
    botao_login.style.backgroundColor = '#9D0005'
}
function sairMouseBotaoLogin() {
    botao_login.style.backgroundColor = '#F50109'
    botao_login.style.boxShadow = '0px 0px 10px #9D0005'
}

let sobre_nos = document.getElementById("sobre-nos")
let divsobrenos = document.getElementById("divisao-sobrenos")
let assinatura = document.getElementById("assinatura")
let divplanos = document.getElementById("divisao-planos")
let insta = document.getElementById("insta")
let botao_registro = document.getElementById("botao-registro")
let botao_login = document.getElementById("botao-login")

sobre_nos.addEventListener("mouseover", entrarMouseBotaoSobreNos)
sobre_nos.addEventListener("mousedown", clicarMouseBotaoSobreNos)
sobre_nos.addEventListener("mouseup", desclicarMouseBotaoSobreNos)
sobre_nos.addEventListener("mouseout", sairMouseBotaoSobreNos)

assinatura.addEventListener("mouseover", entrarMouseBotaoAssinatura)
assinatura.addEventListener("mousedown", clicarMouseBotaoAssinatura)
assinatura.addEventListener("mouseup", desclicarMouseBotaoAssinatura)
assinatura.addEventListener("mouseout", sairMouseBotaoAssinatura)

insta.addEventListener("mouseover", entrarMouseBotaoInsta)
insta.addEventListener("mousedown", clicarMouseBotaoInsta)
insta.addEventListener("mouseup", desclicarMouseBotaoInsta)
insta.addEventListener("mouseout", sairMouseBotaoInsta)

botao_registro.addEventListener("mouseover", entrarMouseBotaoRegistro)
botao_registro.addEventListener("mousedown", clicarMouseBotaoRegistro)
botao_registro.addEventListener("mouseup", desclicarMouseBotaoRegistro)
botao_registro.addEventListener("mouseout", sairMouseBotaoRegistro)

botao_login.addEventListener("mouseover", entrarMouseBotaoLogin)
botao_login.addEventListener("mousedown", clicarMouseBotaoLogin)
botao_login.addEventListener("mouseup", desclicarMouseBotaoLogin)
botao_login.addEventListener("mouseout", sairMouseBotaoLogin)