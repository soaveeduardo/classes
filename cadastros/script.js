id = 0
//Monta cabeçalho da tabela de usuários
document.getElementById("tabela").appendChild(criarTabela([
     ["id", "name",     "born date", "CPF", "email", "Sexo"],]))


//Criando tabela
function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");
    var thd=function(i){return (i==0)?"th":"td";};
    for (var i=0;i<conteudo.length;i++) {
      var tr = document.createElement("tr");
      for(var o=0;o<conteudo[i].length;o++){
        var t = document.createElement(thd(i));
        var texto=document.createTextNode(conteudo[i][o]);
        t.appendChild(texto);
        tr.appendChild(t);
      }
      (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
  }


  let pessoas = {
    [id] : {
      // id,
       pnome: fname.value,
       uname: lname.value,
       idade: born.value,
       cpff: cpf.value,
       mail: email.value,
       gen
    }


}

//Ação do botão "btncadastrar"
function verificarCadastro () {
    //Pegar informações do formulário de cadastro de usuário
    let fname = document.getElementById('txtfn')
    let lname = document.getElementById('txtln')
    let born = document.getElementById('born')
    let cpf = document.getElementById('txtcpf')
    let sex = document.getElementsByName('radsex')
    let userl = document.getElementById('tbody')
    let email = document.getElementById('txtemail')
    let cemail = document.getElementById('txtcemail')
    let res = document.getElementById('divres')

    

    //Atribuindo valor ao radio de genero
    let gen = ''
    if (sex[0].checked)
    {
        gen = 'Masculino'
    } else{
        gen = 'Feminino'
    }

    //tratativa de data
    let data = new Date()
    let datahoje= data.getUTCFullYear
    //Convertendo data em milisegundos para verificar se maior de idade
    const now = new Date(); // Data de hoje
    const past = new Date(born.value); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    
    // Tratando mensagens de erro
    res.innerHTML = ''
    fname.style.color="black" 
    lname.style.color="black" 
    born.style.color="black"
    cpf.style.color="black"
    email.style.color="black"
    cemail.style.color="black"
    //Variável para verificar se há erro
    let error = ''
            //Validando informações digitadas pelo usuário
            //Primeiro nome
             if (fname.value.length < 3 || parseFloat(fname.value) >= 0) {       
                fname.style.color="red" 
                res.innerHTML += `Primeiro Nome invalido<p> `
                error++
                }
            //Segundo nome     
             if (lname.value.length < 3 || parseFloat(lname.value) >= 0)  {      
                res.innerHTML += `Segundo Nome invalido<p> `
                lname.style.color="red"   
                error += 1           
                    }
            //Idade  
             if (days < 6570) {       
                born.style.color="red" 
                res.innerHTML += `Idade mínima é 18 anos<p> ` 
                error++     
                    }
            //CPF   
             if (cpf.value.length < 11 || cpf.value.length > 11) {       
                cpf.style.color="red"  
                res.innerHTML += `CPF invalido<p> `   
                error++  
                    }
            //Email 
             if (email.value.length < 2 || email.value != cemail.value) {
                email.style.color="red"
                cemail.style.color="red"
                res.innerHTML += `E-mail diferente<p> `
                error++
                    }
            //Adicionando novo usuário a tabela 
             else if (error == 0) {

                document.getElementById("tabela").appendChild(criarTabela([
                //["id", "name",     "born date", "CPF", "email", "sexo"], //Cabeçalho modelo
                [],[id,    `${fname.value} ${lname.value}`,  born.value, cpf.value, email.value, gen]
                ]))
                id++
                console.log(pessoas)
                //Zerando o formulário após inserção de novo usuário
                fname.value = ''
                lname.value = ''
                born.value = ''
                cpf.value = ''
                email.value = ''
                cemail.value = ''   
                    }
                    //Zerando contador de error
                    error = ''
                }    


function MostrarErros(errado, certo) {
    this.errado = {
         fname: efname.style.color="red",
         lname: lname.style.color="red",
         born: born.style.color="red",
         cpf: cpf.style.color="red",
         email: email.style.color="red",
         cemail: cemail.style.color="red"
    }
    this.certo = {
        fname : fname.style.color="black",
        lname : lname.style.color="black",
        born : born.style.color="black",
        cpf : cpf.style.color="black",
        email : email.style.color="black",
        cemail : cemail.style.color="black"
    }
    //return MostrarErros
}


