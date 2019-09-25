let StudentManagement = function (name) {
    this.name = name;
    this.student = []
};
this.getName = function () {
    return this.name;
};
this.setName = function (value) {
    this.name = value;
};
this.getStudent = function () {
    return this.student;
};
this.setStudent = function (value) {
    this.student = value;
};
let Student = function (name, gender, age, _class, address) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.class = _class;
    this.address = address;

    this.getName = function () {
        return this.name;
    };
    this.setName = function (value) {
        this.name = value;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.setGender = function (value) {
        this.gender = value;
    };
    this.getAge = function () {
        return this.age;
    };
    this.setAge = function (value) {
        this.age = value;
    };
    this.getClass = function () {
        return this.class;
    };
    this.setClass = function (value) {
        this.class = value;
    };
    this.getAddress = function () {
        return this.address;
    };
    this.setAddress = function (value) {
        this.address = value;
    };

    this.getInfo = function () {
        return "Tên sinh viên : " + this.name + "<br>"
            + "Giới tính : " + this.gender + "<br>"
            + "Tuổi : " + this.age + "<br>"
            + "Lớp : " + this.class + "<br>"
            + "Địa chỉ nhà : " + this.address
    }
};

let studentmanagement = new StudentManagement();

let paint = document.getElementById("ketqua");

let arr1 = [];
let student1 = new Student("Trần Anh Tuấn", "Nam", "18", "C0819H2", 'Thanh Xuân');
let student2 = new Student("Trần Anh Dũng", "Nam", "23", "C0819H2", 'Đống Đa');
let student3 = new Student("Phạm Thị Phương", "Nữ", "20", "C0819H2", 'Cầu Giấy');
let student4 = new Student("Trần Văn Phương", "Nam", "25", "C0819H2", 'Trần Duy Hưng');


function showInfo() {
for (let i = 0 ;i<arr1.length;i++){

}
    studentmanagement.student.push(student1,student2,student3,student4);
    display();

}







function moreSudent() {
    let umbrella1 = document.getElementById("input1").value;
    let umbrella2 = document.getElementById("input2").value;
    let umbrella3 = document.getElementById("input3").value;
    let umbrella4 = document.getElementById("input4").value;
    let umbrella5 = document.getElementById("input5").value;
    let student = new Student(umbrella1, umbrella2, umbrella3, umbrella4, umbrella5);
    studentmanagement.student.push(student);
    display();
}

function deleteStudent(index) {
    studentmanagement.student.splice(index, 1);
    display();
}

function editStudent(index) {
    for (let i = 0; i < studentmanagement.student.length; i++) {
        studentmanagement.student[index].name = prompt("Nhập tên");
        studentmanagement.student[index].gender = prompt("Nhập giới tính");
        studentmanagement.student[index].age = prompt("Nhập tuổi");
        studentmanagement.student[index].class = prompt("Nhập lớp");
        studentmanagement.student[index].address = prompt("Nhập địa chỉ");
        break;
    }
    display();

}

function display() {
    paint.innerHTML = '';
    for (let i = 0; i < studentmanagement.student.length; i++) {
        paint.innerHTML += `${studentmanagement.student[i].getInfo()}<br><button type="button" onclick="deleteStudent(${i})">Xóa</button>
<button type="button" onclick="editStudent(${i})">Sửa</button><br>`;
    }
}


