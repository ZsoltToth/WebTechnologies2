const plateRexEx = new RegExp('[A-Z]{3}-[0-9]{3}','i');

function Car(plateNo, color) {
    if(!plateRexEx.test(plateNo)) {
        throw `Invalid plate number ${plateNo}`
    }
    this.plateNo = plateNo;
    this.color = color;
}

module.exports = Car;