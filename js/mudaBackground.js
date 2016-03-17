/* *** SEGUNDO O e-MAG (padrão e-GOV)
 * Cor de fundo: independente da cor utilizada, ela deve ser alterada para preto (#000000)
 * Cor de texto: independente da cor utilizada, ela deve ser alterada para branco (#FFFFFF)
 * http://emag.governoeletronico.gov.br/cursodesenvolvedor/desenvolvimento-web/praticas-web-acessivel-padrao-acessibilidade-digital-governo.html#irtopico02
 */
function muda(){
     $(".corFundo").css("color","#FFFFFF");  
     $(".background").css("background","#000000");  
     $("a").css("color","#FFFFFF");
}

function mudaOriginal(){
     $(".corFundo").css("color","black");  
     $(".background").css("background","white");  
     $("a").css("color","#000000");
}