$(document).ready(function () {



    $("#FormCalc input[name=date]").inputmask("99.99.9999");


    $("#FormCalc input[name=date]").keyup(function (e) {
        var id = $(this).attr("id");
        var value = $(this).val();
        if (value.length > 0) {
            $("label[for=" + id + "]").hide();
        } else {
            $("label[for=" + id + "]").show();
        }
    });

    $("#FormCalc").submit(function (e) {
        e.preventDefault();

        var value = $("#FormCalc input[name=date]").val();
        if (value.length == 0) {
            $("#FormCalc input[name=date]").addClass("is-invalid");
            return;
        } else {
            $("#FormCalc input[name=date]").removeClass("is-invalid");
        }

        var arr;
        var dateOfBirth = $(this).find("input[name=date]").val();

        var strDate = dateOfBirth + "";
        var aDate = strDate.split('.');
        if (aDate.length != 3) {
            alert("Не верный формат даты! Пример: 01.01.2020");
        }


        var nDay = parseInt(aDate[0]);
        var nMonth = parseInt(aDate[1]);
        var nYear = parseInt(aDate[2]);


        // Доп. числа
        // Первое число
        numberOne = 0;
        if (nDay < 10) {
            numberOne += nDay;
        }
        else {
            arr = (nDay + "").split('');
            for (let i = 0; i < arr.length; i++) {
                numberOne += parseInt(arr[i]);
            }
        }
        if (nMonth < 10) {
            numberOne += nMonth;
        }
        else {
            arr = (nMonth + "").split('');
            for (let i = 0; i < arr.length; i++) {
                numberOne += parseInt(arr[i]);
            }
        }
        arr = (nYear + "").split('');
        for (let i = 0; i < arr.length; i++) {
            numberOne += parseInt(arr[i]);
        }
        numberOne = parseInt(numberOne);
        // Второе число
        var numberTwo = 0;
        if (numberOne < 10) {
            numberTwo = numberOne;
        }
        else {
            arr = (numberOne + "").split('');
            for (let i = 0; i < arr.length; i++) {
                numberTwo += parseInt(arr[i]);
            }
        }
        numberTwo = parseInt(numberTwo);
        // Третье число
        var numberThree = 0;
        if (nDay < 10) {
            numberThree = numberOne - (2 * nDay);
        }
        else {
            arr = (nDay + "").split('');
            numberThree = numberOne - (2 * arr[0]);
        }
        numberThree = parseInt(numberThree);
        // Четвертое число
        var numberFour = 0;
        if (numberThree < 10) {
            numberFour = numberThree;
        }
        else {
            arr = (numberThree + "").split('');
            for (let i = 0; i < arr.length; i++) {
                numberFour += parseInt(arr[i]);
            }
        }
        numberFour = parseInt(numberFour);


        // Число судьбы
        var numberFate = 0;
        arr = (numberOne + "").split('');
        for (let i = 0; i < arr.length; i++) {
            numberFate += parseInt(arr[i]);
        }

        for (let i = 0; i < 99; i++) {
            if (numberFate < 10 || numberFate == 11) {
                break;
            }
            arr = (numberFate + "").split('');
            numberFate = 0;
            for (let j = 0; j < arr.length; j++) {
                numberFate += parseInt(arr[j]);
            }
        }

        // Квадрат пифагора
        var strNumberAll = "" + nDay + nMonth + nYear + numberOne + numberTwo + numberThree + numberFour;
        arr = strNumberAll.split('');

        // Характер
        var character = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 1) {
                character += arr[i];


            }
        }
        // Энергия
        var energy = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 2) {
                energy += arr[i];;
            }
        }
        // Интерес
        var interest = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 3) {
                interest += arr[i];;
            }
        }
        // Здоровье
        var health = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 4) {
                health += arr[i];;
            }
        }
        // Логика
        var logics = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 5) {
                logics += arr[i];;
            }
        }
        // Труд
        var work = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 6) {
                work += arr[i];;
            }
        }
        // Удача
        var luck = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 7) {
                luck += arr[i];;
            }
        }
        // Долг
        var debt = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 8) {
                debt += arr[i];;
            }
        }
        //  Память    
        var memory = "";
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) == 9) {
                memory += arr[i];;
            }
        }

        // Темперамент
        var temperament = interest.length + logics.length + luck.length;

        // Быт
        var everyday = health.length + logics.length + work.length;

        // Цель
        var target = character.length + health.length + luck.length;

        // Семья
        var family = energy.length + logics.length + debt.length;

        // Привычки
        var habits = interest.length + work.length + memory.length;



        var day = nDay + "";
        if (nDay < 10) {
            day = "0" + day;
        }
        var month = nMonth + "";
        if (nMonth < 10) {
            month = "0" + month;
        }



        $("#ValueDate").html(day + "." + month + "." + nYear);

        $("#NumberAdditionalNumber").html(numberOne + "." + numberTwo + " " + numberThree + "." + numberFour);
        $("#NumberFate").html(numberFate);

        if (character == "") character = "---";
        $("#character").html(character);
        if (health == "") health = "---";
        $("#health").html(health);
        if (luck == "") luck = "---";
        $("#luck").html(luck);
        if (energy == "") energy = "---";
        $("#energy").html(energy);
        if (logics == "") logics = "---";
        $("#logics").html(logics);
        if (debt == "") debt = "---";
        $("#debt").html(debt);
        if (interest == "") interest = "---";
        $("#interest").html(interest);
        if (work == "") work = "---";
        $("#work").html(work);
        if (memory == "") memory = "---";
        $("#memory").html(memory);
        if (temperament == "") temperament = "---";
        $("#temperament").html(temperament);
        if (everyday == "") everyday = "---";
        $("#everyday").html(everyday);
        if (target == "") target = "---";
        $("#target").html(target);
        if (family == "") family = "---";
        $("#family").html(family);
        if (habits == "") habits = "---";
        $("#habits").html(habits);

    });
});

