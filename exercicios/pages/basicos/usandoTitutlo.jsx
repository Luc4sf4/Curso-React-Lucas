import Titulo from '../../components/Titutlo'

export default function usandoTitulo (){

return (
    <div>

        <Titulo 
            principal = "Página de Cadastro"
            secundario = "Incluir, ou excluir algo"
        
        
        />
          <Titulo 
            principal = "Página de Login"
            secundario = "informe o seu email e senha"
            pequeno = {true}
        
        />
        
    </div>
)

}