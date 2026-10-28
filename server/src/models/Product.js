import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},description:{type:String,default:''},category:{type:String,default:'General'},price:{type:Number,required:true,min:0},image:{type:String,default:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'},stock:{type:Number,default:10,min:0},featured:{type:Boolean,default:false}},{timestamps:true});
export default mongoose.model('Product',productSchema);
