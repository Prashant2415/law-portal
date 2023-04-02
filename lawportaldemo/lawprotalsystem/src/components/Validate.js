class Validate {
    validateUsername(username) {
        if(username === null || username === 'undefined' || username === '') {
            alert("Username cannot be empty");
            return false;
        }
        return true;
    }

    validatePassword(password) {
        if(password === null || password === 'undefined' || password === '') {
            alert('Password cannot be empty');
            return false;
        } else if(password.length < 8) {
            alert('Password length should be minimum of 8 characters');
            return false;
        }
        return true;
    }

}
export default Validate();