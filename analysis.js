var analysis = (function(){

    var module = {};

    var fruits = ["apple", "orange", "pear", "peach", "pineapple"];
    //can add as many fruits to this list as desired

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

    function getPossibleFruits(substring){

        var n = fruits.length;
        var newFruits = []; // list of fruits matching the substring
        for (i=0;i<n;i++){
            if (fruits[i].indexOf(substring) != -1){
                newFruits.push(fruits[i]);
            }
        }
        return newFruits;

    }

    //METHODS

    module.addFruit = function(){
        console.log("mission accomplished.\n");

        addFruit(fruits);
        return;

    };

    module.printInfo = function(){

        var fruitList = document.getElementById("fruits");
        fruitList.onkeyup = function(){
            console.log(fruitList.innerHTML);
            console.log("\n");
        }

    };

    module.printInfo();

    return module;

}());
