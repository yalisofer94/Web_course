$(document).ready(function() {
    const checkboxes = $('id="must"');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    $("input[type=submit]").click(function() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    });

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }
        return false;
    }
});