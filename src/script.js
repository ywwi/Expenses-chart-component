import './style/style.css'

const dataTest = async () =>
{
    const response = await fetch('data.json')
    const object = await response.json()
    const day = document.getElementsByClassName('day')
    const spending = document.getElementsByClassName('spending')
    const spData = document.getElementsByClassName('spData')
    const spDataText = document.getElementsByClassName('spDataText')
    for(let i = 0; i < day.length; i++)
    {
        day[i].textContent = object[i].day
        spending[i].style.height = Math.floor(object[i].amount * 2.88) + 'px'
        spData[i].style.display = 'grid'
        spData[i].style.placeItems = 'center'
        spData[i].style.marginBottom = '10px'
        spDataText[i].textContent = '$' + object[i].amount
    }
    spending[2].style.backgroundColor = 'hsl(186, 34%, 60%)'

    for(let i = 0; i < spending.length; i++)
    {
        spending[i].addEventListener('mouseenter', () =>
        {
            spData[i].classList.add('visible')
            spDataText[i].classList.add('visible')
            if(spending[i] != spending[2])
            {
                spending[i].style.backgroundColor = 'hsla(10, 79%, 65%, 0.5)'
            }
            else
            {
                spending[2].style.backgroundColor = 'hsla(186, 34%, 60%, 0.5)'
            }
        })
        spending[i].addEventListener('mouseleave', () =>
        {
            spData[i].classList.remove('visible')
            spDataText[i].classList.remove('visible')
            if(spending[i] != spending[2])
            {
                spending[i].style.backgroundColor = 'hsl(10, 79%, 65%)'
            }
            else
            {
                spending[2].style.backgroundColor = 'hsl(186, 34%, 60%'
            }
        })
    }
}

dataTest()