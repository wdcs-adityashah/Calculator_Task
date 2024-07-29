var student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

Object.freeze(student);
delete student.rollno;
console.log(student);
function x(student) {
    var osize = 0;
    for (const key in student) {
        if (student.hasOwnProperty(key)) {
            osize++;
        }
    }
    return osize;
}
console.log(x(student)); 