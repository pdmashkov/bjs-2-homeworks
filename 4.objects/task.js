function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;

    if (this.marks && this.marks.length > 0) {
        sum = this.marks.reduce((acc, val) => acc + val);
        return sum / this.marks.length;
    } else {
        return sum;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
}
