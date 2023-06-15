import { StyledNavBar } from "./style"

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul>
        <li><a href="/customers">Clientes</a></li>
        <li><a href="/orders">Pedidos</a></li>
        <li><a href="/products">Produtos</a></li>
        <li><a href="/materials">Estoque</a></li>
      </ul>
    </StyledNavBar>
  )
}
