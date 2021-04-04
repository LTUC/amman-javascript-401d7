const base64 = require('base-64');
const bcrypt = require('bcrypt');

const string = 'username:password';
const encoded = base64.encode(string);
console.log('ENCODING', encoded);

const decoded = base64.decode(encoded);
console.log('DECODING', decoded);

const password = 'P@$$word';
const complexity = 5;
encrypt(password, complexity);

async function encrypt(pw, salt) {
  const hashed = await bcrypt.hash(pw, salt); //used on Signup
  console.log('__HASHED__', pw, hashed);
  const p1 = '$2b$05$sD0d7QdZJT1WvUogJcnoX.xffTkDa/5ovKR/cR1ABLNBv6ClhyEdy';
  const p2 = '$2b$05$Jy.8ZwQZCYv5X.pxEVS0m.oOS.JtyOsEs9hdud7CWtmFpiBLlyU6C';
  const p3 = '$2b$05$Jy.8ZwQZCYv5X.pxEVS0m.oOS.JtyOsEs9hdud7CWtmFpiBLlyUER'; //wrong hash!!
  const p1Valid = await bcrypt.compare(pw, p1); // on login
  const p2Valid = await bcrypt.compare(pw, p2);
  const p3Valid = await bcrypt.compare(pw, p3);
  console.log(p1Valid);
  console.log(p2Valid);
  console.log(p3Valid);
}
