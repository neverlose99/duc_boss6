const name = "An"
let score = 0
score += 10
if (score > 5) {
    const bonus = 2
}

console.log(score)
typeof 'Codestar'
typeof 42
typeof null
console.log('5'==5)
console.log('5'===5)
const day='T2'
switch(day){
    case 'T7':
    case 'CN': console.log('nghi');break
    default:   console.log('di hoc')
}
for (let i=1; i<=5; i++) console.log(`Buoi ${i}`)
let attempts = 0
while (attempts < 3) attempts++

const bangdiem = [9, 7.5, 4, 6.5, 8];
for (let i=0; i<bangdiem.length; i++){
    if (bangdiem[i]>=8){
        console.log(`Diem loai gioi: ${bangdiem[i]}`)
    }
    else if (bangdiem[i]>=6.5 && bangdiem[i]<8){
        console.log(`Diem loai kha: ${bangdiem[i]}`)
    }
    else if (bangdiem[i]>=5 && bangdiem[i]<6.5){
        console.log(`Diem loai trung binh: ${bangdiem[i]}`)
    }else console.log(`Diem loai yeu: ${bangdiem[i]}`)
}
let avg=0
for (let i=0; i<bangdiem.length; i++){
    avg += bangdiem[i]
}
console.log(`gia tri trung binh ${avg/bangdiem.length}`)

