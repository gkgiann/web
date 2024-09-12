const cepInput = document.querySelector(".cep-input");
const cepButton = document.querySelector(".cep-btn");
const divResult = document.querySelector(".result");

document.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (cepInput.value.length != 8) {
    divResult.innerHTML =
      "<span class='alert'>O CEP deve conter 8 números</span>";
  } else {
    divResult.innerHTML = "<span>Carregando dados...</span>";

    const res = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);

    res.json().then((data) => {
      if (data.erro) {
        divResult.innerHTML = "<span class='error'>CEP Inválido!</span>";
      } else {
        console.log(data);
        divResult.innerHTML = `
        <table>
            <tr>
                <td><b>Cidade:</b></td>
                <td>${data.localidade}</td>
            </tr>
            <tr>
                <td><b>Estado:</b></td>
                <td>${data.estado} (${data.uf})</td>
            </tr>
            <tr>
                <td><b>Região:</b></td>
                <td>${data.regiao}</td>
            </tr>
            <tr>
                <td><b>CEP:</b></td>
                <td>${data.cep}</td>
            </tr>
            <tr>
                <td><b>Bairro:</b></td>
                <td>${data.bairro}</td>
            </tr>
            <tr>
                <td><b>Logradouro:</b></td>
                <td>${data.logradouro}</td>
            </tr>
            <tr>
                <td><b>DDD:</b></td>
                <td>${data.ddd}</td>
            </tr>
        </table>
`;
      }
    });
  }
});

{
  /* <div>
          <b>Cidade:</b>
          <span>${data.localidade}</span>
        </div>
        <div>
          <b>Estado:</b>
          <span>${data.estado} (${data.uf})</span>
        </div>
        <div>
          <b>Região:</b>
          <span>${data.regiao}</span>
        </div>
        <div>
          <b>CEP:</b>
          <span>${data.cep}</span>
        </div>
        <div>
          <b>Bairro:</b>
          <span>${data.bairro}</span>
        </div>
        <div>
          <b>Logradouro:</b>
          <span>${data.logradouro}</span>
        </div>
        <div>
          <b>DDD:</b>
          <span>${data.ddd}</span>
        </div> */
}
