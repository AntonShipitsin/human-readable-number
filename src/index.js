module.exports = function toReadable(n) {
    let num1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    if (n == 0) {                                        // zero
        return ('zero')
    }
    else if (n < 20) {                                   // from 0 to 19
        return (num1[n])
    }
    else if (n < 100) {                                 // from 20 to 99
        n = n.toString()
        if (n[1] == 0) {
            return (num2[n[0] - 2])
        }
        else {
            return (num2[n[0] - 2] + ' ' + num1[n[1]])
        }
    }
    else {                                              // from  100 to 999
        n = n.toString()
        if (n[2] == 0) {
            if (n[2] == 0 && n[1] == 0) {
                return num1[n[0]] + ' hundred'
            }
            else if (n[2] == 0 && n[1] == 1) {
                return num1[n[0]] + ' hundred ten'
            }
            else {
                return (num1[n[0]] + ' hundred ' + num2[n[1] - 2])
            }

        }

        else if (n[1] == 0) {

            return (num1[n[0]] + ' hundred ' + num1[n[2]])
        }
        else if (n[1] == 1) {

            return (num1[n[0]] + ' hundred ' + num1[(+n[2] + 10)])
        }
        else {
            return (num1[n[0]] + ' hundred ' + num2[n[1] - 2] + ' ' + num1[n[2]])

        }
    }
}
