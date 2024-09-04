onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }

    //禁止私自印钞
    remove('lightmanscurrency:coinmint')

})