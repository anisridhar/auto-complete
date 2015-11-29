var analysis = (function(){

    var module = {};

    var fruits = ["apple", "orange", "pear", "peach", "pineapple"];

    function addFruit(){

        var fruitList = document.getElementById('fruits');
        var option = document.createElement("option");
        option.text = "pineapple";
        fruitList.add(option);
        return;
    }

    //METHODS

    module.addFruit = function(){
        console.log("mission accomplished.\n");

        addFruit();
        return;

    };

    module.addFruit();

    return module;

}());
