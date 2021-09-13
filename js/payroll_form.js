window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });

    const date = document.querySelector('#date');
    date.addEventListener('input', function() {
        const startDate = new Date(Date.parse(getInputValueById('#day')+" "+
                                                getInputValueById('#month')+" "+
                                                getInputValueById('#year')));
        try {
            (new EmployeePayrollData()).startDate = startDate;
           setTextValue('.date-error',"");
        } catch (e) {
           setTextValue('.date-error',e);

        }
    });
    checkForUpdate;
});