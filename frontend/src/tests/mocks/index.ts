export const customersDataMock = [
  {
    customer_id: 1,
    customer_name: "Fulano de Tal",
    cpf: "12345678900",
    address: "Rua Principal, 123",
    email: "fulano@example.com",
    phone: "31912345678",
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    customer_id: 2,
    customer_name: "Ciclano da Silva",
    cpf: "98765432100",
    address: "Avenida Secundária, 456",
    email: "ciclano@example.com",
    phone: "31998765432",
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    customer_id: 20,
    customer_name: "Beltrano Santos",
    cpf: "55555555555",
    address: "Praça Central, 789",
    email: "beltrano@example.com",
    phone: "31955555555",
    is_active: false,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  }
];

export const materialsDataMock = [
  {
    material_id: 1,
    material_name: "Tecido de Algodão",
    color: "Branco",
    cost_price: 12.99,
    stock: 50.00,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    material_id: 2,
    material_name: "Fio de Lã",
    color: "Azul",
    cost_price: 8.50,
    stock: 20.00,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    material_id: 20,
    material_name: "Botões",
    color: "Vermelho",
    cost_price: 2.99,
    stock: 100.00,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  }
];

export const productsDataMock = [
  {
    product_id: 1,
    product_name: "Camiseta",
    selling_price: 29.99,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    product_id: 2,
    product_name: "Calça Jeans",
    selling_price: 79.99,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    product_id: 20,
    product_name: "Sapato",
    selling_price: 99.99,
    is_active: true,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  }
];

export const ordersDataMock = [
  {
    order_id: 1,
    order_status: "pendente",
    order_type: "varejo",
    customer_id: 1,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 2,
    order_status: "iniciado",
    order_type: "atacado",
    customer_id: 2,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 3,
    order_status: "concluído",
    order_type: "varejo",
    customer_id: 10,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 4,
    order_status: "pendente",
    order_type: "varejo",
    customer_id: 1,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 5,
    order_status: "concluído",
    order_type: "atacado",
    customer_id: 2,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 6,
    order_status: "cancelado",
    order_type: "varejo",
    customer_id: 10,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 7,
    order_status: "iniciado",
    order_type: "atacado",
    customer_id: 2,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  },
  {
    order_id: 8,
    order_status: "pendente",
    order_type: "varejo",
    customer_id: 10,
    created_at: "2023-06-02T19:06:31.000Z",
    updated_at: "2023-06-02T19:06:31.000Z"
  }
];
