const inputCheckBox = document.getElementsByClassName('checkbox');
const inputQuantity = document.getElementsByClassName('quantity');
const product = document.getElementById('pr');

const priceProduct = {
    burger: {
        tomato: 0.2,
        meat: 1,
        cheese: 0.3,
        bacon: 0.4,
        salad: 0.1
    }

}

for(let i = 0; i < inputCheckBox.length; i++) {
    inputCheckBox[i].addEventListener('input', () => {
        if(inputCheckBox[i].checked == true) {
            inputQuantity[i].readOnly = false;
        }else {
            console.log(inputCheckBox[i].name, false);
            inputQuantity[i].readOnly = true;
            inputQuantity[i].value = ''
        }
    })
}

const menu = {}
const dataBurger = {}


const getBurgerData = () => {
    for(let i = 0; i < inputQuantity.length; i++) {
        if(inputQuantity[i].value == '') {
            continue
        }
        dataBurger[`${inputQuantity[i].getAttribute('id')}`] = +inputQuantity[i].value;
    }
    menu.burgerInfo = dataBurger;

    for(i in dataBurger) {
        for(let j = 0; j < dataBurger[i]; j++) {
            let tag = document.createElement('div');
            tag.setAttribute("class", `${i}`);
            product.appendChild(tag);           
        }
    } 

    let result
    for(i in dataBurger) {
        for(j in priceProduct.burger) {
            if(i == j) {
               
                console.log(priceProduct.burger[i]  * dataBurger[i])
            }
        }
    }
    console.log(result)
}
