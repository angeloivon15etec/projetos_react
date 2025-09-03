import {useState} from 'react'
function Formulario(){

    function cadastrarUsuario(e){
        e.preventDefault()
        //console.log(nome)
        //console.log('cadastrou usuário')
        console.log(`o Usuario ${nome} cadastrado com a senha ${senha}`)
    }

    const [nome,setNome] = useState('Angelo')
    const [senha,setSenha] = useState()
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                 <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text"
                     placeholder= "Digite seu nome"
                     id="nome"
                     name="nome"
                     value={nome}
                     onChange={(e)=> setNome(e.target.value)}/>
                 </div>
                 <div>
                 <label htmlFor="nome">Senha:</label>
                    <input type="password"
                     id='senha'
                     name='senha'
                     placeholder= "Digite sua senha"
                     onChange={(e)=> setSenha(e.target.value)}/>
                 </div>
                 <div>
                    <input type="submit" value="Cadastrar"/>
                 </div>
            </form>
            <h2>O nome é {nome}</h2>
            <h2>A senha é {senha}</h2>
        </div>
    )
}

export default Formulario