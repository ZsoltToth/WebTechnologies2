
function ParkingLot(slotsPerLevel){
    var totalSize = 0;
    for(var i = 0; i < slotsPerLevel.length; i++){
        totalSize += slotsPerLevel[i]
    }
    this.slotsPerLevel = slotsPerLevel
    this.slots = new Array(totalSize)
    this.formatSlot = function(slotNo){
        if(slotNo < 0 || slotNo > totalSize){
            throw `Invalid Parking Slot number ${slotNo}`;
        }
        var level = 0;
        for(var i = 0; i < this.slotsPerLevel.length; i++){
            if(slotNo - this.slotsPerLevel[i] < 0){
                level = i;
                break;
            }
            else{
                slotNo -= this.slotsPerLevel[i];
            }
        }
        return `L${level}P${slotNo}`;
    }
    this.slot2Index = function(slotNo){
        var level = slotNo.split('L')[1].split('P')[0]
        var shift = slotNo.split('L')[1].split('P')[1]
        var slotIndex = parseInt(0);
        for(var i = 0; i < level; i++){
            slotIndex += parseInt(this.slotsPerLevel[i]);
        }
        if(parseInt(shift) > this.slotsPerLevel[level]){
            throw 'hoppaaaa'
        }
        slotIndex += parseInt(shift)
        if(slotIndex < 0 || slotIndex > totalSize){
            throw 'Problem!'
        }
        return slotIndex
    }
    this.parkCar = function(car) {
        const maxTries = 10;
        for(var noTry = 0; noTry < maxTries; noTry++){
            var slotIndex = Math.floor(totalSize * Math.random());
            if(this.slots[slotIndex] == undefined){
                this.slots[slotIndex] = car;
                return this.formatSlot(slotIndex);
            }
        }
        throw `I wasn't able to park in ${maxTries} tries`
    }

    this.checkSlot= function(slotNo) {
        var slotIndex = this.slot2Index(slotNo);
        if(this.slots[slotIndex] == undefined){
            return 'empty'
        }
        else{
            return this.slots[slotIndex]
        }
    }
}

module.exports = ParkingLot;