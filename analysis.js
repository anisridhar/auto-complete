var analysis = (function(){

    var module = {};

    var fruits = ["apple", "orange", "pear", "peach", "pineapple"];

    function addFruit(fruits){

        var num_of_fruits = fruits.length;
        var fruitList = document.getElementById('fruits');
        var options = "";
        for (i=0;i<num_of_fruits;i++){
            options += "<option value='" + fruits[i] + "'>";
        }

        fruitList.innerHTML = options;
        return;
    }

    //METHODS

    module.addFruit = function(){
        console.log("mission accomplished.\n");

        addFruit(fruits);
        return;

    };

    module.printInfo = function(){

        var fruitList = document.getElementbyId("fruits");
        fruitList.onkeyup = function(){
            console.log(fruitList.innerHTML);
        }

    };

    module.printInfo();

    return module;

}());
