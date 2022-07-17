function generateReport(){
    var sheds = [];
    sheds[0] = parseInt(document.getElementById('a').value)
    sheds[1] = parseInt(document.getElementById('b').value)
    sheds[2] = parseInt(document.getElementById('c').value)
    sheds[3] = parseInt(document.getElementById('d').value)

    var dayTotal = sheds[0] + sheds[1] + sheds[2] + sheds[3]

     
     var price  = parseInt(document.getElementById('d').value)

     var dailyIncome = price * dayTotal
     var weeklyIncome = dailyIncome *7
    console.log(sheds);

}