import mongoose from 'mongoose';

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;

export const EdiOrder = mongoose.model('EdiOrder', { 
  _id: ObjectId,
  orderNumber: String,
  date: {type: Date, default: Date.now},
  rows: Number , 
  quantity : Number , 
  ediOrderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'EdiOrderItem'
      }]
     });

     