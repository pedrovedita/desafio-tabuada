function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('Porfavor inserir ao menos um valor')
    }else{
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('respostas')
        res.innerHTML = `A tabuada do ${n} é: <br>`

        do{
            r = n*x
            res.innerHTML += `${x} X ${n} = ${r} <br>`
            x++
        }while(x <= e)
    }
    


}


