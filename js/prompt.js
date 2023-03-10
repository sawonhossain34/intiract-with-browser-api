
    // alert('how are you');

    const showAlart = () => {
        alert('how are you mia vai');
    }

    const landMoney= () => {
       const result = confirm('amr 500 taka dhar debe kina bol');
    //    console.log(result);
       if(result === true){
        alert('tui amr janer dosto');
       }else{
        alert('dure giya mor kase aces na');
       }
    }

    const getInfo = ()=> {
        const result = prompt('get your informatio Name');
        console.log(result);
        if(result === null){
            alert('ja foooot sala');
        }else{
            console.log(result ,'welcome in this world');
        }
    }