import { gql } from "@apollo/client";

export  const WAREHOUSES_QUERY = gql`
     query WarehouseQuery {
         warehouses {
            id
             title
             
         }
     }`

 

export  const DEPARTMENTS_QUERY = gql`
     query DepartmentQuery {
         departments {
            id
            title   
         }
     }`

export  const ARRIVALS_QUERY = gql`
query ArrivalQuery {
    arrivals {
       id
       title   
    }
}`
export  const SUPPLIERS_QUERY = gql`
query SupplierQuery {
    suppliers {
       id
       number
       name  
    }
}`

export  const OPEN_ORDERS_QUERY = gql`
query OpenOrdersQuery {
    openOrders {
    reference
    date
     supplier{
     number
     name
     }
     rows
     quantity
     supplied
     isOpen 
     
     
    }
}`

export  const EDI_ORDERS_QUERY = gql`
query EdiOrdersQuery {
    ediOrders {
    orderNumber
    date
    rows
    quantity
    }
}`

export  const EDI_ORDER_ITEMS_BY_NUMBER_QUERY = gql`
query EdiOrderItemsByNumberQuery {
    ediOrderItemsByNumber {
        product
        quantity
        code
    }
}`



export  const CLOSED_ORDERS_QUERY = gql`
query ClosedOrdersQuery {
     closedOrders {
    reference
    date
    supplier{
     number
     name
     }
     rows
     quantity
     supplied
     isOpen 
    }
}`

export  const ORDER_ITEMS_QUERY = gql`
query OrderItemsQuery {
    orderItems {
      code
      product_name
      quantity
      boxes
      isOpen
      isFull
      ReasonOfRefund
      orderReference
    }
}`





