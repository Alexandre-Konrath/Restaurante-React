export function Navegacao(props) {
  return (
    <div className="navegacao">
      <input onClick={() => props.SetAtualizarPaginaselecionada(0)} title="input" type="radio" name="opcao-pagina" id="pagina-0" defaultChecked />
      <label htmlFor="pagina-0">Pratos Principais</label>
      <input onClick={() => props.SetAtualizarPaginaselecionada(1)} title="input" type="radio" name="opcao-pagina" id="pagina-1" />
      <label htmlFor="pagina-1">Sobremesas</label>
      <input onClick={() => props.SetAtualizarPaginaselecionada(2)} title="input" type="radio" name="opcao-pagina" id="pagina-2" />
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  )
}
