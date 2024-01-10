let dayOfWeek = prompt("Enter a day of week").toLowerCase()


switch(true){
    case dayOfWeek=='monday' || dayOfWeek=='mon' :
        console.log('Chicken Karahi')
        break
    case dayOfWeek=='tuesday' || dayOfWeek=='tues':
        console.log('Bhindi Gosht')
        break
    case dayOfWeek=='wednesday' || dayOfWeek=='wed':
        console.log('Biryani')
        break
    case dayOfWeek=='thursday' || dayOfWeek=='thu':
        console.log('Aalu Gosht')
        break
    case dayOfWeek=='friday' || dayOfWeek=='fri':
        console.log('Chinese Rice')
        break
    case dayOfWeek=='saturday' || dayOfWeek=='sat':
        console.log('Daal Chawal')
         break
    case dayOfWeek=='sunday' || dayOfWeek=='sun':
        console.log('Outing')
        break
}


