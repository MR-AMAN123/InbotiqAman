
import { connectToDB } from '../../../lib/mongoose';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import cookie from 'cookie';
import { signJwt } from '../../../lib/jwt';

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end();
  await connectToDB();
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(401).end();
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(401).end();
  const token = signJwt({id:user._id,role:user.role,name:user.name});
  res.setHeader("Set-Cookie", cookie.serialize("token",token,{httpOnly:true,path:"/"}));
  res.json({ok:true});
}
