
import { connectToDB } from '../../../lib/mongoose';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import cookie from 'cookie';
import { signJwt } from '../../../lib/jwt';

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  await connectToDB();
  const {name,email,password,role} = req.body;
  const exists = await User.findOne({email});
  if(exists) return res.status(409).json({msg:'Email used'});
  const hashed = await bcrypt.hash(password,10);
  const user = await User.create({name,email,password:hashed,role});
  const token = signJwt({id:user._id,role:user.role,name:user.name});
  res.setHeader("Set-Cookie", cookie.serialize("token",token,{httpOnly:true,path:"/"}));
  res.json({ok:true});
}
