# Sistema de Gestión de Productos y Órdenes

Sistema integral de gestión de **Productos y Órdenes** desarrollado con **.NET 9** siguiendo principios modernos de arquitectura empresarial. La solución proporciona una API REST completa para administrar un catálogo de productos, gestionar inventario y crear/procesar órdenes de compra con validaciones robustas de negocio.

---

## 🏗️ Arquitectura

La solución implementa **Clean Architecture** combinada con **Domain-Driven Design (DDD)**, organisada en **5 capas independientes**:

### 1. Domain (Capa de Dominio)

- Entidades de negocio: `Product`, `Order`, `OrderItem`
- Value Objects: `Money`, `Quantity`, `Stock`
- Interfaces de repositorios (contratos de abstracción)
- Excepciones específicas del dominio
- **Responsabilidad:** Encapsular toda la lógica de negocio pura, independiente de tecnologías externas

### 2. Application (Capa de Aplicación)

- Casos de uso implementados mediante **Command Pattern**
- Handlers para orquestar operaciones: `CreateProductHandler`, `CreateOrderHandler`, etc.
- DTOs (Data Transfer Objects) para serialización/deserialización
- Excepciones de aplicación
- **Responsabilidad:** Coordinar entre el dominio e infraestructura, implementar lógica de casos de uso

### 3. Infrastructure (Capa de Infraestructura)

- Entity Framework Core con In-Memory Database
- Implementación de Repositorios
- Configuraciones de entidades (Fluent API)
- Seed de datos iniciales
- **Responsabilidad:** Detalles técnicos de persistencia y acceso a datos

### 4. WebApi (Capa de Presentación)

- Controllers REST: `ProductsController`, `OrdersController`
- Middleware global para manejo centralizado de errores
- Swagger/OpenAPI integrado
- Inyección de dependencias centralizada
- **Responsabilidad:** Exponer los casos de uso a través de endpoints HTTP

### 5. Client (Aplicación Consumidora)

- Cliente HTTP para consumir la API
- Modelos de desérialización JSON
- Menú interactivo con flujos de prueba
- **Responsabilidad:** Demostrar y validar el funcionamiento de la API

---

## ✨ Características Principales

### Operaciones CRUD Completas

- ✅ Productos: Crear, Leer, Actualizar, Eliminar
- ✅ Órdenes: Crear, Leer, Listar, Eliminar

### Validaciones Robustas de Negocio

- ✅ Control de stock: No permite crear órdenes si no hay inventario suficiente
- ✅ Congelamiento de precios: Registra el precio al momento de la orden
- ✅ Restauración de stock: Recupera inventario cuando se cancela una orden
- ✅ Validaciones de datos: Nombres, precios, cantidades, etc.

### Características Técnicas

- ✅ Paginación en listados
- ✅ Filtrado de productos por nombre
- ✅ Manejo centralizado de excepciones
- ✅ Logging integrado
- ✅ CORS habilitado
- ✅ Documentación interactiva (Swagger)
- ✅ Base de datos en memoria para pruebas rápidas

---

## 🛠️ Stack Tecnológico

| Componente | Tecnología |
|-----------|-----------|
| **Framework** | .NET 9.0 |
| **Lenguaje** | C# 13 |
| **ORM** | Entity Framework Core 9.0.12 |
| **Base de Datos** | In-Memory (configurable) |
| **API REST** | ASP.NET Core Web API |
| **Documentación API** | Swagger/OpenAPI |
| **Patrón de Comunicación** | HTTP/REST |

---

## 📂 Estructura del Proyecto
SistemaProductosOrdenes/ 
├── src/ 
│  ├── Domain/ 
│   │ ├── Entities/ │ │ │ ├── Product.cs │ │ │ ├── Order.cs │ │ │ └── OrderItem.cs │ │ ├── ValueObjects/ │ │ │ ├── Money.cs │ │ │ ├── Quantity.cs │ │ │ └── Stock.cs │ │ ├── Interfaces/ │ │ │ ├── IProductRepository.cs │ │ │ └── IOrderRepository.cs │ │ └── Exceptions/ │ │ ├── ProductDomainException.cs │ │ └── OrderDomainException.cs │ │ │ ├── Application/ │ │ ├── DTOs/ │ │ │ ├── CreateProductRequest.cs │ │ │ ├── ProductResponse.cs │ │ │ ├── CreateOrderRequest.cs │ │ │ └── OrderResponse.cs │ │ ├── UseCases/ │ │ │ ├── Products/ │ │ │ │ ├── CreateProductHandler.cs │ │ │ │ ├── UpdateProductHandler.cs │ │ │ │ ├── GetProductsHandler.cs │ │ │ │ ├── GetProductByIdHandler.cs │ │ │ │ └── DeleteProductHandler.cs │ │ │ └── Orders/ │ │ │ ├── CreateOrderHandler.cs │ │ │ ├── GetOrdersHandler.cs │ │ │ ├── GetOrderByIdHandler.cs │ │ │ └── DeleteOrderHandler.cs │ │ └── Common/ │ │ ├── ApplicationException.cs │ │ ├── NotFoundException.cs │ │ └── ValidationException.cs │ │ │ ├── Infrastructure/ │ │ ├── Persistence/ │ │ │ ├── ApplicationDbContext.cs │ │ │ └── SeedData.cs │ │ ├── Repositories/ │ │ │ ├── ProductRepository.cs │ │ │ └── OrderRepository.cs │ │ ├── Configurations/ │ │ │ ├── ProductConfiguration.cs │ │ │ ├── OrderConfiguration.cs │ │ │ └── OrderItemConfiguration.cs │ │ └── InfrastructureServiceCollectionExtensions.cs │ │ │ ├── WebApi/ │ │ ├── Controllers/ │ │ │ ├── ProductsController.cs │ │ │ └── OrdersController.cs │ │ ├── Middleware/ │ │ │ └── GlobalExceptionHandlingMiddleware.cs │ │ ├── Extensions/ │ │ │ └── ApplicationServiceCollectionExtensions.cs │ │ ├── Program.cs │ │ └── appsettings.json │ │ │ └── Client/ │ ├── Models/ │ │ ├── ProductModel.cs │ │ ├── OrderModel.cs │ │ └── GetProductsResponseModel.cs │ ├── ApiClient.cs │ └── Program.cs │ └── SistemaProductosOrdenes.sln