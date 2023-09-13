import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const EdiOrder = mongoose.model('EdiOrder', { 
  orderNumber: String,
  ediOrderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'EdiOrderItem'
      }]
     });