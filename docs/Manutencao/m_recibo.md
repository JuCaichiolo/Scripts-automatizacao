---
layout: page
title: Recibo
menu: Recibo
parent: Manutencao.md
weight: 0
---

# Estrutura do Documento

Para o devido funcionamento deste script é necessario de 4 arquivos
 - Uma "Formulário Google". - Ele servirá de entrada de dados do sistema é o unico "arquivo" que o usuário final terá acesso.
 - Uma "Planilha Google" - Ela é seu banco de dados, aqui serão depositadas todas as respostas do seu formulário, é onde serão feitas algumas operações necessarias e o script que fará as funções mais avançadas é criado nesta planilha.
 - Um Script. - Ele é criado diretamente na planilha, ele é responsável pelas interações entre APIs do Google.
 - Um "Documentos Google". - Ele é o modelo utilizado para gerar o recibo propriamente dito.

# O formulário

Devido a necessidade de modificações constantes (adicionar ou retirar itens) deste formulário optou-se pela utilização de um "Formumário Google", pois com ele é facil modificar o conteúdo dos seus campos.
Todos os campos do formulário são de preenchimento obrigatório.


## Senha de acesso:
Este campo é um campo de validação necessário para garantir que apenas membros do IEEE possam utilizar o formulário:

```
Titulo do campo: Senha de acesso.
Tipo de campo: Resposta curta
Validada por uma expressão regular* do tipo: ^suasenha$
Mensagem de aviso em caso de erro: Senha inválida!
```

Para modificar a senha você deve moficar a parte textual do validador. Os simbolos `^` e `$` são comandos da expressão regular. No exemplo da figura a o usuário deve escrever "suasenha" para conseguir validar a resposta.

![senha](https://drive.google.com/uc?id=0B8CcpExpMKFlZkloaGN4bHpJdjQ)

## Referente à:
Neste Campo selecionarei o motivo gerador do recibo, ou seja o que o destinatário do recibo está adquirindo. 

```
Titulo do campo: Referente à (ao):
Tipo de campo: Lista suspensa
```

Para adicionar um campo basta digitar o produto na linha "Adicionar opção". É importante que o texto escrito neste campo faça sentido quando se ler a segunte frase ".... referente a(o) **OPÇÃO**". Para remover um campo basta clicar no "X" que está à direita. Na figura abaixo é possivel visualizar estas ações.

![referentea](https://drive.google.com/uc?id=0B8CcpExpMKFlZmROSmNpTjFZZjg)

## Unidade Responsável:
Campo em que é será selecionada a unidade que está recebendo do dinheiro referente ao recibo.

```
Titulo do campo: Unidade Responsável:
Tipo de campo: Lista suspensa
```

Para adicionar um campo basta digitar o produto na linha "Adicionar opção". É de extrema importência que utilizem apenas as siglas da unidade para referenciar ela. Para remover um campo basta clicar no "X" que está à direita. 

## Nome Completo

Local onde deverá ser preenchido o nome completo da pessoa que receberá o recibo.

```
Titulo do campo: Come completo.
Tipo de campo: Resposta curta
```

![nomecompleto](https://drive.google.com/uc?id=0B8CcpExpMKFlOUROVVB0cXhReUk)


## CPF

Campo para registro dos numéros do CPF da pessoa que adquiriu que receberá o recibo.

```markdown
Titulo do campo: CPF.
Tipo de campo: Resposta curta
Descrição: Insira apenas os números CPF.
Validada por uma expressão regular do tipo: correspondente à `([0-9]{11})` 
Mensagem de aviso em caso de erro: Formato de CPF inválido!
```

![CPF](https://drive.google.com/uc?id=0B8CcpExpMKFlVl9hem5YSkQ2VVk)

A expressão regular me diz para escrever 11 digitos numéricos qualquer coisa diferente disso ela me retornará a mensagem de erro.

## Valor

Este campo é onde devemos digitar o valor do recibo.

```
Titulo do campo: Valor pago em Reais.
Tipo de campo: Resposta curta
Descrição: Valor deve ser dado em Reais e sempre positivo. Caso necessário, utilize o separador ponto. Se o evento for gratuito, digite 0.
Validada por uma expressão regular* do tipo: correspondente à ^([1-9]{1}[\d]{0,2}(\.[\d]{2})*(\.[\d]{0,2})?|[1-9]{1}[\d]{0,}(\.[\d]{0,2})?|0(\.[\d]{0,2})?|(\.[\d]{1,2})?)$
Mensagem de aviso em caso de erro: Utilize o padrão 00.00
```

![valor](https://drive.google.com/uc?id=0B8CcpExpMKFlZkloaGN4bHpJdjQ)

A expressão regular deste campo me permite digitar numeros de até duas casas decimais separados por ponto.

## E-mail
Campo para o E-mail da pessoa que receberá o recibo.

```
Titulo do campo: E-mail.
Tipo de campo: Resposta curta
Descrição: Insira o e-mail para o qual o recibo será enviado.
Validada por uma expressão regular* do tipo: correspondente à [a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+
Mensagem de aviso em caso de erro: Digite um e-mail válido.
```

![email](https://drive.google.com/uc?id=0B8CcpExpMKFlQ3BnWlFVRU4yNmM)

# A Planilha Google

A planilha de respostas deve ser vinculáda ao formulário! Para fazer isso vá na aba respostas do seu form e clique nos tres pontinhos mostrado na figura abaixo.

![criarplanilha](https://drive.google.com/uc?id=0B8CcpExpMKFldEZhT21yRWl0OFk)

Um menu irá aparecer, selecione a opção "Selecionar destino da resposta". Uma janela semelhante amostrada a baixo apareceu em sua tela crie uma nova planilha ou selecione uma já existente (aconselho criar uma nova planilha).

![criarplanilhamenu](https://drive.google.com/uc?id=0B8CcpExpMKFlUXkxWGlrWW4xbms)

A planilha criada (ou a aba da nova planilha) deve ser assim:

![planilhacriada](https://drive.google.com/uc?id=0B8CcpExpMKFlY0VPNjJ5RUdUejA)

## Renomeie a pasta de trabalho!
Troque o nome da sua pasta de trabalho para "Recibos", para fazer isso clique com botão direito sobre o nome da pasta de trabalho e vá em renomear.

![novonomepasta](https://drive.google.com/uc?id=0B8CcpExpMKFlbTBnVjhfZUpObVE)

## Campo ID
Vá insira uma nova coluna a esquerda da coluna "A" (clique na celula "A" com botão direito e vá em incerir coluna à esquerda)

![criarcampoID](https://drive.google.com/uc?id=0B8CcpExpMKFlMDFRV0lUbVRVakE)

Na nova A1 agora vazia escreva a palavra "ID". Sua nova planilha deve ficar assim:

![resultadocampoID](https://drive.google.com/uc?id=0B8CcpExpMKFlRUJkWFBtX3FlMm8)
## Data e Hora
Crie uma nova coluna C de forma que a coluna B seja o "Carimbo de data/hora" e a coluna "D" seja a "Digite a senha de acesso:" na selula B1 digite a segunte formula:

![novacolunaC](https://drive.google.com/uc?id=0B8CcpExpMKFlN2x4RXRBTWdENVE)

```
=arrayFormula(SE(LIN(INDIRETO("B1:B" & TEXTO(CONT.VALORES(B:B);"#")))=1;"Data e Hora";TEXTO(DIA(B1:B);"##")&" de "& TEXTO(B1:B;"MMMM")&" de " & ANO(B1:B)&" às "&  TEXTO(HORA(B1:B);"00")&"h"&TEXTO(MINUTO(B1:B);"00")))
```

Essa formula é responsabel por retirar pegar da Data da coluna B e transformar ela num texto com o seguinte formato: "1 de janeiro de 1900 às 00h00."

## E-Mail
O campo E-mail deve estar agora na coluna J. Você vai incerir 4 novas colunas a esqueda deste campo fazendo assim que seu campo e-mail vá para coluna "N".

![novocampoEmail](https://drive.google.com/uc?id=0B8CcpExpMKFlSUhQVEptUjlvRmc)

## Tipo de Transação
Na Coluna "J" (que deveria estar vazia) vá até a celula K1 e digite: 

```
=arrayFormula(IF(ROW(INDIRECT("A1:A" & TEXT(COUNTA(A:A);"#")))=1;"Tipo de transação";"Entrada"))
```

Assim para cada valor linha que for preenchida na planilha voce irá dizer que é uma "Entrada de Caixa"

## Valor pago em Reais

Na celula K1 digete a seguinte formula, (a coluna L deve estar vazia)
```
=query(A:K; "select I where I is not null format I 'R$#####0.00' ";1)
```

Ela formata os valores de I (Compo "Valor pago em Reais:" do formulário) para formato monetário.

## Ano
Na Celula L1 digite a formula abaixo para extrair o ANO em que foi emitido o recibo.

```
=arrayFormula(IF(ROW(INDIRECT("B1:B" & TEXT(COUNTA(B:B);"#")))=1;"Ano";YEAR(B1:B)))
```

## Mes
Na Celula M1 digite a formula abaixo para extrair o MES em que foi emitido o recibo.

```
=arrayFormula(SE(LIN(INDIRETO("B1:B" & TEXTO(CONT.VALORES(B:B);"#")))=1;"Mês";TEXTO(B1:B;"MM")))
```
## Pasta Administrativa
Crie uma nova Pasta de trabalho e troque seu nome para "Pasta adm". Nesta pasta vá ate A1 e digite Unidade, de A2 até A9 o nome das unidades (Ramo, AESS, CS, CPMT, EMBS, PES, RAS ,TEMS) na celula C1 digite: "Nº de Recibos +1" em C2 copie a seguinte formula:

```
=CONT.SES(Recibos!F:F;A2;Recibos!L:L;"=2017")+1
```

O valor retornado será o número de recibos já emitidos somado a 1. Veja o Exemplo abaixo: Atente-se ao detalhe que que a coluna B está oculta!

![pastaadm](https://drive.google.com/uc?id=0B8CcpExpMKFlYXF6MkNFS3VQalU)


# Doc

# Script



## Funções
**Função right(valor)**

```js
String.prototype.right = function() {
    return this.substr(this.length - (arguments[0] == undefined ? 1 : parseInt(arguments[0])), this.length);
}
```

Ela serve para extrair as x últimas letras de uma String.

No exemplo aplicado abaixo a saida é "plo". 
```js
var texto = exemplo
texto.right(3);
```

**Funçao pad(x,y)**
```js
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
```

Ela serve para escrever um número sempre utilizando um numero x de casas.

No exemplo aplicado abaixo a saida é "0006". 
```js
pad(6,4) 
```

// ---------------------------------------------------------------------------
// Funções para para escrever um número por extenso 
// ---------------------------------------------------------------------------

function Extenso(n, moeda, moedas, centavo, centavos) {
```js
var j, x, m, r, ri, rd, d, i, casas, erro;
var v1 = 0,
    v2 = 0,
    v3 = 0,
    v4 = 0,
    v5 = 0,
    v6 = 0;
r = "";
rd = "";
ri = "";
i = parseInt(n);
d = n - i;
d = d.toFixed(2);
d = d * 100;
d = d.toFixed(0);
casas = i.toString().length;

if (n == "?") {
    return "Função Extenso() Marcelo Camargo - marcelocamargo@gmail.com";
}
if (n < 0) {
    return "Erro: número negativo";
}
if (moeda != null) {
    if (moedas == null || centavo == null || centavos == null || moeda == "" || moedas == "" || centavo == "" || centavos == "") {
        return "Erro: parâmetros de moeda";
    }
}

if (d == 100) {
    d = 0;
    i = i + 1;
}

if (casas > 12) {
    v5 = (parseInt(i / 1000000000000) * 1000000000000 - parseInt(i / 1000000000000000) * 1000000000000000) / 1000000000000;
    if (v5 > 0) {
        j = "";
        x = CentenaExtenso(v5);
        if (v5 > 1) {
            ri = ri + j + x + " trilhões";
        } else {
            ri = ri + j + x + " trilhão";
        }
    }
}
if (casas > 9) {
    v4 = (parseInt(i / 1000000000) * 1000000000 - parseInt(i / 1000000000000) * 1000000000000) / 1000000000;
    if (v4 > 0) {
        if (v5) {
            j = ", ";
        } else {
            j = "";
        }
        x = CentenaExtenso(v4);
        if (v4 > 1) {
            ri = ri + j + x + " bilhões";
        } else {
            ri = ri + j + x + " bilhão";
        }
    }
}
if (casas > 6) {
    v3 = (parseInt(i / 1000000) * 1000000 - parseInt(i / 1000000000) * 1000000000) / 1000000;
    if (v3 > 0) {
        if (v4 + v5) {
            j = ", ";
        } else {
            j = "";
        }
        x = CentenaExtenso(v3);
        if (v3 > 1) {
            ri = ri + j + x + " milhões";
        } else {
            ri = ri + j + x + " milhão";
        }
    }
}
if (casas > 3) {
    v2 = (parseInt(i / 1000) * 1000 - parseInt(i / 1000000) * 1000000) / 1000;
    if (v2 > 0) {
        if (v3 + v4 + v5) {
            j = ", ";
        } else {
            j = "";
        }
        x = CentenaExtenso(v2);
        if (v2 == 1) {
            ri = ri + j + "mil";
        } else {
            ri = ri + j + x + " mil";
        }
    }
}
if (casas > 0) {
    v1 = (parseInt(i).toFixed(0)) - (parseInt(i / 1000).toFixed(0) * 1000);
    if (v1 > 0) {
        if (v2 + v3 + v4 + v5) {
            if (v1 <= 100) {
                j = " e ";
            } else {
                j = ", ";
            }
        } else {
            j = "";
        }
        x = CentenaExtenso(v1);
        ri = ri + j + x;
    }
}

if (moeda == null) {
    moedas = "reais";
    moeda = "real";
    centavos = "centavos";
    centavo = "centavo";
}
if ((d != 0 && moeda == "inteiro") || moeda != "inteiro") {
    if (i > 0 && !v1) {
        ri = ri + " de " + moedas;
    } else if (i > 1 && v1 == 1) {
        ri = ri + " " + moedas;
    } else if (v1 == 1) {
        ri = ri + " " + moeda;
    } else if (v1 > 1) {
        ri = ri + " " + moedas;
    } else if (i == 1) {
        ri = ri + " " + moeda;
    }
}

if (d == 1) {
    rd = "um " + centavo;
} else if (d > 1 && d < 100) {
    rd = CentenaExtenso(d) + " " + centavos;
}
if (i < 1 && d > 0 && moeda != "inteiro") {
    rd = rd + " de " + moeda;
} else if (i == 0 && d == 0) {
    rd = "zero " + moeda;
}

if (d > 0 && i > 0) {
    rd = " e " + rd;
}

r = ri + rd;
return r;
```
}

function CentenaExtenso(n) {
    var u, d, c, casas;
    var r = "";
    var t1 = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
    var t2 = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    var t3 = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
    var t4 = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
    casas = n.toString().length;
    u = 0;
    d = 0;
    c = 0;
    if (n > 0) {
        u = parseInt(n.toString().substr(casas - 1, 1));
    }
    if (n > 9) {
        d = parseInt(n.toString().substr(casas - 2, 1));
    }
    if (n > 99) {
        c = parseInt(n.toString().substr(casas - 3, 1));
    }
    if (n == 100) {
        return "cem";
    } else {
        if (c > 0) {
            r = r + t4[c - 1];
            if (d > 0 || u > 0) {
                r = r + " e ";
            }
        }
        if (d > 1) {
            r = r + t3[d - 2];
            if (u > 0) {
                r = r + " e ";
            }
        } else if (d == 1 && u >= 0) {
            r = r + t2[d + u - 1];
        }
        if (u > 0 && d != 1) {
            r = r + t1[u - 1];
        }
    }
    return r;
}

// ---------------------------------------------------------------------------
// Funções principal do meu programa
// ---------------------------------------------------------------------------

function send_Rec_Email() {
    // ID do modelo recibo no Google Docs
    var recibotemplateId = "14Zlj5zwYyWHhAUnBG9dMFYTzeClIa_xvayxJsB8k_Os"
    
    // Carrega planilha ativa
    var ss = SpreadsheetApp.getActive()
    //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Recibos")
    
    var dados = ss.getDataRange().getValues();
    var ultimaLinha = ss.getLastRow() - 1; //Pega a última linha da tabela
    
    // Defino a pasta 2 da minha planilha como ativa
    var sheet = SpreadsheetApp.openById(submissionSSKey).getSheets()[2];
    
    // informações da planilha
  // var datarecibo = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o data do recibo , lembrando que a coluna A vale 0(zero)'];
    var datarecibo = dados[ultimaLinha][2];

    // var evento = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o valor do curso, lembrando que a coluna A vale 0(zero)'];
    var evento = dados[ultimaLinha][4];
    
    // var unidade = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o unidade responsavel, lembrando que a coluna A vale 0(zero)'];
    var unidade = dados[ultimaLinha][5];
    
    // var nome_completo = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o Nome completo da pessoa, lembrando que a coluna A vale 0(zero)'];
    var nome_completo = dados[ultimaLinha][6];
    
    // var CPF = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o CPF da pessoa, lembrando que a coluna A vale 0(zero)'];
    var CPF = String(dados[ultimaLinha][7]);
    
    // Formata o CPF no formato de 123.456.789-11
    if (CPF.lenght != 11) {
        CPF = '0'.concat(CPF);
    }
    var CPF = CPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    
    // var valor = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o valor do curso, lembrando que a coluna A vale 0(zero)'];
    var valor = dados[ultimaLinha][10];
    
    // var valor = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o valor do curso, lembrando que a coluna A vale 0(zero)'];
    var valorextenso = Extenso(valor);
    
    // var ano = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o Ano da transaçao no formato de 4 numeros, lembrando que a coluna A vale 0(zero)'];
    var ano = dados[ultimaLinha][11];
    
    // var mes = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o mes da transaçao no formato de 2 numeros, lembrando que a coluna A vale 0(zero)'];
    var mes = dados[ultimaLinha][12];
    
    //var destinatariorecibo = dados[ultimaLinha]['coloque aqui o nº da coluna onde ficara o e-mail, lembrando que a coluna A vale 0(zero)'];
    var destinatariorecibo = dados[ultimaLinha][13];
    
    // Teste id recibo
    var range;
    // Define um ID para cada unidade.
    var idunidade;
    // Busca na planilha uma célula específica (neste caso o número do recibo).
    // range = sheet.getRange(linha,coluna);
    if (unidade == "Ramo") {
        range = sheet.getRange(2, 3);
        idunidade = "00";
    } else if (unidade == "AESS") {
        range = sheet.getRange(3, 3);
        idunidade = "01";
    } else if (unidade == "CS") {
        range = sheet.getRange(4, 3);
        idunidade = "02";
    } else if (unidade == "CPMT") {
        range = sheet.getRange(5, 3);
        idunidade = "03";
    } else if (unidade == "EMBS") {
        range = sheet.getRange(6, 3);
        idunidade = "04";
    } else if (unidade == "PES") {
        range = sheet.getRange(7, 3);
        idunidade = "05";
    } else if (unidade == "RAS") {
        range = sheet.getRange(8, 3);
        idunidade = "06";
    } else if (unidade == "TEMS") {
        range = sheet.getRange(9, 3);
        idunidade = "07";
    }
     
    // Defino o número do recibo com 4 algarismos.
    var numrecibo = pad(range.getValue(), 4);
    
    // Chama a função "right" para pegar os 2 últimos digitos da data preenchido no formulário.
    var ano = ano.toString().right(2);
    
    // Monta o ID do Recibo
    var idrecibo = idunidade + mes + numrecibo + ano + "ER";
    
    // escreve na planilha "Recibos" o ID do recibo
    ss.getSheets()[0].getRange(ultimaLinha+1, 1).setValue(idrecibo);
    
    // defino destinatario do Canhoto - Fixo 
    var destinatariocanhoto = "adson.batista@live.com";
    
    //EMAIL
    // Assunto do email
    var subject = "Recibo IEEE UFABC";
    
    // Mensagem do Corpo 
    var html =
        '<body>' +
        '<h2><b>Olá ' + nome_completo + '!' + '</h2></b>' +
        'Você está recebendo este e-mail pois no dia ' + '<b>' + datarecibo + '</b>' +
        ' você efetuou um pagamento no valor de <b> ' + valor + ' (' + valorextenso + ') ' + '</b>' + 'referente ao ' + '<b>' + evento + '</b>' + '<br>' +
        'Seu recibo foi anexado neste email e pode ser identificado pelo ID' + '<b>' + idrecibo + '</b>' + '.' +
        '</body>'
    
    // Dados do Rementente
    var remetente = "IEEE UFABC<contato@ieeeufabc.org>";
    
    // Cria um recibo temporário, recupera o ID e o abre
    var idCopia = DriveApp.getFileById(recibotemplateId).makeCopy(idrecibo).getId();
    
    // var idCopia = DriveApp.getFileById(recibotemplateId).makeCopy(recibotempDoc +'_' + id_recibo + '_' + nome_completo).getId();
    var docCopia = DocumentApp.openById(idCopia);
    
    // recupera o corpo do recibo
    var bodyCopia = docCopia.getActiveSection();
    
    // faz o replace das variáveis do template, salva e fecha o documento temporario
    bodyCopia.replaceText("NOME", nome_completo);
    bodyCopia.replaceText("NUMEROCPF", CPF);
    bodyCopia.replaceText("VALOR", valor);
    bodyCopia.replaceText("VALEXTENSO", valorextenso);
    bodyCopia.replaceText("CURSO", evento);
    bodyCopia.replaceText("DATARECIBO", datarecibo);
    bodyCopia.replaceText("IDRECIBO", idrecibo);
    docCopia.saveAndClose();
    
    // abre o documento temporario como PDF utilizando o seu ID
    var recibo_pdf = DriveApp.getFileById(idCopia).getAs("application/pdf");
    
    //Pastas Drive para Salvar recibos
    var folderramoID = "0B8CcpExpMKFlZElETVFjOGd0elk";
    var folderAESSID = "0B8CcpExpMKFlZElETVFjOGd0elk";
    var folderCSID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folderCPMTID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folderEMBSID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folderPESID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folderRASID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folderTEMSID = "0B8CcpExpMKFlZElETVFjOGd0elk"
    var folder_recibo_CS = DriveApp.getFolderById(folderCSID);
    var folder_recibo_CPMT = DriveApp.getFolderById(folderCPMTID);
    var folder_recibo_EMBS = DriveApp.getFolderById(folderEMBSID);
    var folder_recibo_PES = DriveApp.getFolderById(folderPESID);
    var folder_recibo_RAS = DriveApp.getFolderById(folderRASID);
    var folder_recibo_TEMS = DriveApp.getFolderById(folderTEMSID);
    var folder_recibo_ramo = DriveApp.getFolderById(folderramoID);
    var folder_recibo_AESS = DriveApp.getFolderById(folderAESSID);
    
    //salva pdf na pasta do ID
    if (unidade == "Ramo") {
        folder_recibo_ramo.createFile(recibo_pdf)
    } else if (unidade == "AESS") {
        folder_recibo_AESS.createFile(recibo_pdf)
    } else if (unidade == "CS") {
        folder_recibo_CS.createFile(recibo_pdf)
    } else if (unidade == "CPMT") {
        folder_recibo_CPMT.createFile(recibo_pdf)
    } else if (unidade == "EMBS") {
        folder_recibo_EMBS.createFile(recibo_pdf)
    } else if (unidade == "PES") {
        folder_recibo_PES.createFile(recibo_pdf)
    } else if (unidade == "RAS") {
        folder_recibo_RAS.createFile(recibo_pdf)
    } else if (unidade == "TEMS") {
        folder_recibo_TEMS.createFile(recibo_pdf)
    }
    
    // envia o email com recibo para destinatario
    // MailApp.sendEmail(destinatariorecibo, subject, body, {name: remetente, attachments: recibo_pdf});
    MailApp.sendEmail(destinatariorecibo, subject, html, {
        name: remetente,
        htmlBody: html,
        attachments: recibo_pdf
    });
    // envia o email recibo para email do ramo  
    MailApp.sendEmail(destinatariocanhoto, subject, html, {
        name: remetente,
        htmlBody: html,
        attachments: recibo_pdf
    });
    
    // apaga o documento temporário
    DriveApp.getFileById(idCopia).setTrashed(true);
}
