let info = {firstName: 'Noah', lastName: 'Wright', addresses: [
{
    street: '6 Hollylaurel dr.',
    state: 'Texas',
    zipCode: '77382'
    }, 
{
    street: '22 Trace Creek Dr.',
    state: 'TX',
    zipCode: '77382'
    }
]
}

for(let index = 0; index < info.addresses.length; index++) {
    let address = info.addresses[index]
    console.log(address)
}

