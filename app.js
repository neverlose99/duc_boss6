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
const students = [
  { name: 'An',   course: 'FE', fee: 4500000, paid: true,  joinedAt: '2026-09-02' },
  { name: 'Bình', course: 'BE', fee: 6000000, paid: false, joinedAt: '2026-09-15' },
  { name: 'Chi',  course: 'FE', fee: 4500000, paid: true,  joinedAt: '2026-10-01' },
]

const s = { name: 'An', address: { city: 'Hà Nội' } }
s.phone = '0900000000'        // thêm
s.name = 'An Nguyễn'          // sửa
delete s.phone                // xoá
console.log(s.address.city)   // lồng nhau
console.log(s.address?.ward)  // ?. tránh lỗi khi không có

const text = JSON.stringify(s)     // object → chuỗi (gửi API, lưu localStorage)
const back = JSON.parse(text)      // chuỗi → object
import { format, differenceInDays, parseISO } from 'date-fns'
import { vi } from 'date-fns/locale'


students.push(
  { name: 'Dũng', course: 'BE', fee: 6000000, paid: true, joinedAt: '2026-09-20' },
  { name: 'Hà', course: 'FE', fee: 4500000, paid: false, joinedAt: '2026-09-25' },
  { name: 'Minh', course: 'UI', fee: 3500000, paid: true, joinedAt: '2026-10-05' },
  { name: 'Lan', course: 'BE', fee: 6000000, paid: false, joinedAt: '2026-10-08' },
  { name: 'Nam', course: 'UI', fee: 3500000, paid: true, joinedAt: '2026-09-10' },
  { name: 'Phúc', course: 'FE', fee: 4500000, paid: true, joinedAt: '2026-10-10' },
  { name: 'Quỳnh', course: 'UI', fee: 3500000, paid: false, joinedAt: '2026-10-12' },
  { name: 'Tuấn', course: 'BE', fee: 6000000, paid: true, joinedAt: '2026-10-15' },
)
console.log('Tong so hoc vien', students.length)
console.table(students)

const feStudents = students.filter(s => s.course === 'FE')          // lọc
const names = students.map(s => s.name.toUpperCase())                 // biến đổi
const revenue = feStudents
  .filter(s => s.paid)
  .reduce((sum, s) => sum + s.fee, 0)                                 // gộp
const beStudents = students.filter(s=>s.course === 'BE')
const revenue1=beStudents
    .filter(s=>s.paid)
    .reduce((sum,s)=> sum + s.fee, 0)
const uiStudents = students.filter(s=>s.course ==='UI')
const revenue2=uiStudents
    .filter(s=>s.paid)
    .reduce((sum,s)=> sum + s.fee, 0)
const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
console.log('Doanh thu khoa hoc FE', vnd.format(revenue))
console.log('Doanh thu khoa hoc BE', vnd.format(revenue1))
console.log('Doanh thu khoa hoc UI', vnd.format(revenue2)) 

const unpaidStudents = students.filter(s=>s.paid === false)
console.log('Danh sach nhung nguoi chua dong hoc phi')
console.table(unpaidStudents)

const today = new Date()
const StudentsWithDays = students.map(s=>({
    name: s.name,
    course: s.course,
    joinedAt: s.joinedAt,
    daysStudying: differenceInDays(today, parseISO(s.joinedAt))
}))
console.table(StudentsWithDays)