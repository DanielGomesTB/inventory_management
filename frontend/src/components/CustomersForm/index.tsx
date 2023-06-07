import { useState } from 'react';

export default function CustomersForm() {
  const [customerName, setCustomerName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    console.log({
      customerName,
      cpf,
      address,
      email,
      phone,
    })
  };

  return (
    <>
      <h1>Clientes</h1>

      <form>
        <label htmlFor="customerName">
          Nome
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="phone">
          Telefone
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={handleClick}
        >
          Cadastrar
        </button>
      </form>
    </>
  );
}
