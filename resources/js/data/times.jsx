
let arr = []

for (let h = 9; h < 20; ++h) {
    for (let m = 0; m < 65; m += 5) {
        arr.push({
            label: '00:00',
            value: '00:00'
        })
    }
}

export default {

    data: arr
}