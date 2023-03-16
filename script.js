var a = prompt('Сколько вам лет?');
if(a >= 18 && a < 55) {
    alert('идем смотреть кино');
} else if (a >= 55) {
    alert('Вам уже поздно смотреть кини');
} else {
    alert('Иди спать');
}
var a = prompt('Сколько вам лет?');
alert(a >= 18 ? 'идем смотреть кино' : 'Иди спать');


var age = +prompt('How old are you?');
var question = confirm('do you smoke?');

if (age <= 18 && question == false) {
    alert('Well done');
} else if (age >= 18 && question == false) {
    alert('Well done')
} else if (age >= 18 && question == true) {
    alert('Better stop smoking')
} else {
    alert('i will tell your mom')
}

var x = !'';
console.log(x)


var numberOfYears = +prompt('Склонение возрастa от 0 до 150');

if (numberOfYears == 2 || numberOfYears ==3 || numberOfYears ==4 || numberOfYears ==22 || numberOfYears ==23 || numberOfYears ==24 || numberOfYears ==32 || numberOfYears ==33 || numberOfYears ==34 || numberOfYears ==42 || numberOfYears ==43 || numberOfYears ==44 || numberOfYears ==52 || numberOfYears ==53 || numberOfYears ==54 || numberOfYears ==62 || numberOfYears ==63 || numberOfYears ==64 || numberOfYears ==72 || numberOfYears ==73 || numberOfYears ==74 || numberOfYears ==82 || numberOfYears ==83 || numberOfYears ==84 || numberOfYears ==92 || numberOfYears ==93 || numberOfYears ==94 || numberOfYears ==102 || numberOfYears ==103 || numberOfYears ==104 || numberOfYears ==122 || numberOfYears ==123 || numberOfYears ==124 || numberOfYears ==132 || numberOfYears ==133 || numberOfYears ==134 || numberOfYears ==142 || numberOfYears ==143 || numberOfYears ==144) {
    alert(numberOfYears + ' годa');
}
if (numberOfYears == 1 || numberOfYears ==21 || numberOfYears ==31 || numberOfYears ==41 || numberOfYears ==51 || numberOfYears ==61 || numberOfYears ==71 || numberOfYears ==81 || numberOfYears ==91 || numberOfYears ==101 || numberOfYears ==121 || numberOfYears ==131 || numberOfYears ==141) {
    alert(numberOfYears + ' год');
} 
if (numberOfYears == 0 || numberOfYears ==5 || numberOfYears ==6 || numberOfYears ==7 || numberOfYears ==8 || numberOfYears ==9 || numberOfYears ==10 || numberOfYears ==11 || numberOfYears ==12 || numberOfYears ==13 || numberOfYears ==14 || numberOfYears ==15 || numberOfYears ==16 || numberOfYears ==17 || numberOfYears ==18 || numberOfYears ==19 || numberOfYears ==20 || numberOfYears ==25 || numberOfYears ==26 || numberOfYears ==27 || numberOfYears ==28 || numberOfYears ==29 || numberOfYears ==30 || numberOfYears ==35 || numberOfYears ==36 || numberOfYears ==37 || numberOfYears ==38 || numberOfYears ==39 || numberOfYears ==40 || numberOfYears ==45 || numberOfYears ==46 || numberOfYears ==47 || numberOfYears ==48 || numberOfYears ==49 || numberOfYears ==50 || numberOfYears ==55 || numberOfYears ==56 || numberOfYears ==57 || numberOfYears ==58 || numberOfYears ==59 || numberOfYears ==60 || numberOfYears ==65 || numberOfYears ==66 || numberOfYears ==67 || numberOfYears ==68 || numberOfYears ==69 || numberOfYears ==70 || numberOfYears ==75 || numberOfYears ==76 || numberOfYears ==77 || numberOfYears ==78 || numberOfYears ==79 || numberOfYears ==80 || numberOfYears ==85 || numberOfYears ==86 || numberOfYears ==87 || numberOfYears ==88 || numberOfYears ==89 || numberOfYears ==90 || numberOfYears ==95 || numberOfYears ==96 || numberOfYears ==97 || numberOfYears ==98 || numberOfYears ==99 || numberOfYears ==100 || numberOfYears ==105 || numberOfYears ==106 || numberOfYears ==107 || numberOfYears ==108 || numberOfYears ==109 || numberOfYears ==110 || numberOfYears ==111 || numberOfYears ==112 || numberOfYears ==113 || numberOfYears ==114 || numberOfYears ==115 || numberOfYears ==116 || numberOfYears ==117 || numberOfYears ==118 || numberOfYears ==119 || numberOfYears ==120 || numberOfYears ==125 || numberOfYears ==126 || numberOfYears ==127 || numberOfYears ==128 || numberOfYears ==129 || numberOfYears ==130 || numberOfYears ==135 || numberOfYears ==136 || numberOfYears ==137 || numberOfYears ==138 || numberOfYears ==139 || numberOfYears ==140 || numberOfYears ==145 || numberOfYears ==146 || numberOfYears ==147 || numberOfYears ==148 || numberOfYears ==149 || numberOfYears ==150) {
    alert(numberOfYears + ' лет');
}

var numberOfYears = +prompt('Склонение возрастa от 0 до 150');

if ((numberOfYears == 1) || (numberOfYears > 20 && numberOfYears % 10 == 1)) {
    alert(numberOfYears + " год");
}
else if ((numberOfYears >= 2 && numberOfYears <= 4) || (numberOfYears > 20 && numberOfYears % 10 >= 2 && numberOfYears % 10 <= 4)) {
    alert(numberOfYears + " года");
}
else {
    alert(numberOfYears + " лет");
}
