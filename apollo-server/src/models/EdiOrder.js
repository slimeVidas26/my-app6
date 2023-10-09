import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const EdiOrder = mongoose.model('EdiOrder', { 
  _id: Number ,
  orderNumber: String,
  date: {type: Date, default: Date.now},
  rows: Number , 
  quantity : Number , 
  ediOrderItems: [{
        type: Schema.Types.ObjectId,
        ref: 'EdiOrderItem'
      }]
     });

     const p = new EdiOrder({ orderNumber: '11111' });
console.log('pid',p.id);