var analysis = (function(){

    var module = {};

    var fruits = ["apple", "orange", "pear", "peach", "pineapple"];

    function addFruit(){

        var fruitList = document.getElementById('fruits');
        var option = document.createElement("option");
        option.value = "pineapple";
        //fruitList.add(option);
        //fruitList.options.push("pineapple");
        //$('#fruits').append("<option value='" + "pineapple" + "'>");
        var options = "<option value='pineapple'>";
        fruitList.innerHTML = options;
        return;
    }

    //METHODS

    module.addFruit = function(){
        console.log("mission accomplished.\n");

        addFruit();
        return;

    };

    return module;

}());
