var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDeFault();
  
  var form = document.querySelector("#form-adiciona");
  
  //Extraindo os dados digitados no formulário
  
  var paciente = obtemPacienteDoFormulario(form);
  
  //criando a linha e as célulasda tabela do novo paciente
  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  
  if(erros.length > 0) {
    exibeErros(erros);
    return;
  }

//Aqui adicionamos a linha com todos os dados na tabela do "HTML"

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();

});

function exibeErros(erros){
  var ul = document.querySelector("#mensagens-erro");
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
});

function obtemPacienteDoFormulario(form) {
  
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
    return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    paxienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}
  function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
  }
  
  function validaPaciente(paciente) {
    var erros = [];
    
    if(!validaPeso(paciente.peso)){
    erros.push("Peso inválido!")
  }
  return erros;
  }
}
