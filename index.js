function cadastrar(){
    let nome = (document.querySelector("#nome").value)
    console.log(nome)
    let senha = (document.querySelector("#senha").value)
    console.log(senha)
    

    if (nome == "ramon" && senha == "santiago7") {
        window.location.href = "logins/ramon.html"       

    } else if (nome == "patricia" && senha == "paty2580") {
        window.location.href = "logins/patricia.html"      

    } else if (nome == "daniele" && senha == "dani2580") {
        window.location.href = "logins/daniele.html"       

    } else if (nome == "marcos" && senha == "marcos2580") {
        window.location.href = "logins/marcos.html"
        
    } else {
        alert("usuario ou senha incorretos!")

    }
}