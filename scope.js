function PatriChai(age, earning) {
    console.log('age -- ', age)
    console.log('earning -- ', earning)
    // calling before exicute. let's see how var and function react .
    console.log('trueAge -- ', trueAge);
    var decision = canMarry(20000);
    console.log('decision -- ', decision);

    var trueAge = age + 7;
    function canMarry(expense) {
        const remaining = earning - expense;
        if (remaining > 10000) {
            return true;
        }
        return false;
    }
}
PatriChai(18, 45000)