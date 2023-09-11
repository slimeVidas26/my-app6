import {Warehouse} from './models/Warehouse.js';
import {Department} from './models/Department.js';
import {Arrival} from './models/Arrival.js';
import {Supplier} from './models/Supplier.js';
import {Author} from './models/Author.js';

import {Order} from './models/Order.js';
import {OrderItem} from './models/OrderItem.js'
import { GraphQLScalarType, Kind } from 'graphql';


const dateScalar = new GraphQLScalarType({

    
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      if (value instanceof Date) {
        return value.toLocaleDateString();
        //return value.getTime(); // Convert outgoing Date to integer for JSON
      }
      throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
      if (typeof value === 'number') {
        return new Date(value); // Convert incoming integer to Date
      }
      throw new Error('GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // Convert hard-coded AST string to integer and then to Date
        return new Date(parseInt(ast.value, 10));
      }
      // Invalid hard-coded value (not an integer)
      return null;
    },
  });


// GraphQL Resolvers
export const resolvers = {
    
    Date: dateScalar,
    // Query: {
    //     hello: () => "Hello from Apollo Server"
    // }
    Query: {
        hello: (_ , {firstName , lastName}) => `Hello ${firstName}  ${lastName}`,
        warehouses: async () => await Warehouse.find({}),
        departments: async () => await Department.find({}),
        arrivals: async () => await Arrival.find({}),
        suppliers: async () => await Supplier.find({}),
        authors: async () => await Author.find({}),


        orders: async () => await Order.find({supplierNumber : Supplier.number}),
        orderItems: async () => await OrderItem.find({}),
        openOrders: async () => await Order.find({isOpen:true}),
        closedOrders: async () => await Order.find({isOpen:false}),
      
    }
};