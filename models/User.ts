
import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name:String,email:{type:String,unique:true},password:String,role:String
});
export default mongoose.models.User || mongoose.model('User',schema);
