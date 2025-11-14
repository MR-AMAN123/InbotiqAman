
import cookie from 'cookie';
import { verifyJwt } from '../../../lib/jwt';

export default async function handler(req,res){
  const cookies = cookie.parse(req.headers.cookie||'');
  if(!cookies.token) return res.status(401).end();
  try{
    const data = verifyJwt(cookies.token);
    res.json({user:data});
  }catch(e){ res.status(401).end(); }
}
