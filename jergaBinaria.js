const string = "Cavernícolas";


const getTime = () => {
    const time = new Date();
    const [hour, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()];
    const fTime = (timeArray) => {
        let fString = '';
        timeArray.map(e=> fString += e.toString().length < 2 ? '0' + e : e);
        return fString;
    }
    return fTime([hour, minutes, seconds]);
}

//🐊
const toBinary = function (string) {
    // CONSTS
    const oneChars = ['■'];
    const zeroChars = [' '];

    const rndmIndexZero = Math.floor(Math.random() * zeroChars.length);
    const rndmIndexOne = Math.floor(Math.random() * oneChars.length);

    const zero = zeroChars[rndmIndexZero];
    const one = oneChars[rndmIndexOne];

    // generar array con hilos binarios por cada caracter
    const bString = string.split('').map( l => l.charCodeAt().toString(2));
    // console.log(bString);
    
    // definir que char usar dependiendo de si es 0 o 1
    let sToChar = bString.map(r => r.split('').map(c => c === '0' ? zero : one));
    
    // console.log(sToChar);
    let fString = '';
    // console.log("   _ _ _ _ _ _");
    sToChar.map(s=>fString += "   " + s.join(' ') + '\n');    
    process.stdout.write(`\r   ${string.split('').join(' ')}`);
    return fString;
}

// toBinary(getTime())
// s === '0' ? ' ' : '■'

setTimeout(() => {
    process.stdout.write(toBinary(getTime()));
}, 0);

setInterval(()=>{
    process.stdout.write(`\r${toBinary(getTime())}`);    
}, 1000);

