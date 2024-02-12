function calculateLove() {
    let yourName = document.getElementById('yourName').value
    let partnerName = document.getElementById('partnerName').value
    let lovePercentage = Math.floor(Math.random() * 101);
    let result = yourName + ' and ' + partnerName + "'s love percentage is: " + lovePercentage + "%";

    if (yourName = '' && partnerName == '') {
        fill.style.display = 'block'
        document.getElementById('result').innerHTML = '';
        show.innerHTML = '';
    } else if (lovePercentage == 0 || lovePercentage <= 40) {
        console.log('your love is in coma level😰🥶');
        document.getElementById('result').innerHTML = result;
        show.innerHTML = 'your love is in coma level😰🥶'
        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
            show.innerHTML = ''
        }, 5000)
    } else if (lovePercentage == 41 || lovePercentage <= 60) {
        console.log('hmmm i warned you enough😒🤐');
        document.getElementById('result').innerHTML = result;
        show.innerHTML = 'hmmm i warned you enough😒🤐'
        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
            show.innerHTML = ''
        }, 5000)
    } else if (lovePercentage == 61 || lovePercentage <= 70) {
        console.log("don't give up yet you are getting there😎");
        document.getElementById('result').innerHTML = result;
        show.innerHTML = "don't give up yet you are getting there😎"
        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
            show.innerHTML = ''
        }, 5000)
    } else if (lovePercentage == 71 || lovePercentage <= 100) {
        console.log('what are you waiting straight for to the alter 👨‍👨‍👦‍👦');
        show.innerHTML = 'what are you waiting straight for to the alter 👨‍👨‍👦‍👦'
        document.getElementById('result').innerHTML = result;
        setTimeout(() => {
            document.getElementById('result').innerHTML = '';
            show.innerHTML = ''
        }, 5000)
    }

    document.getElementById("yourName").value = ""
    document.getElementById("partnerName").value = ""
}



