import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const EdiOrder = mongoose.model('EdiOrder', { 
  orderNumber: String,
  date: {type: Date, default: Date.now},
  rows: Number , 
  quantity : Number , 
  ediOrderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'EdiOrderItem'
      }]
     });