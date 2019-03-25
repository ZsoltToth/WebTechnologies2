

function meter2inch(meter){
    return meter * 39.370
}

function inch2meter(inch){
    return inch / 39.370
}

module.exports = {
    m2i : meter2inch,
    i2m : inch2meter
}