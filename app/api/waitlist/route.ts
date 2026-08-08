import {NextResponse} from "next/server";
export const runtime="nodejs";
const URL=process.env.GOOGLE_APPS_SCRIPT_URL||"https://script.google.com/macros/s/AKfycbwWfll5a8l7uPMiE_-Pe9yia0eLNC5a1yCcOYt8waazB0k4T-w3tXMfHytAh3ioCTfwhA/exec";
export async function POST(request:Request){
 try{
  const b=await request.json(),name=String(b?.name||"").trim(),phone=String(b?.phone||"").trim(),email=String(b?.email||"").trim().toLowerCase();
  if(!name||!phone||!email)return NextResponse.json({success:false,message:"Please complete all fields."},{status:400});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({success:false,message:"Please enter a valid email address."},{status:400});
  const r=await fetch(URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,phone,email}),redirect:"follow",cache:"no-store"});
  if(!r.ok)throw new Error(`Google Apps Script returned ${r.status}`);
  return NextResponse.json({success:true});
 }catch(e){console.error(e);return NextResponse.json({success:false,message:"Unable to join the waitlist right now. Please try again."},{status:500})}
}