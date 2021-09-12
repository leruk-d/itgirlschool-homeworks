class Validator {

    isEmail(email) {
        let regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (email.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    isDomain(domain) {
        let regExEmail = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
        if (domain.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    isDate(date) {
        let regExEmail = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (date.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    isPhone(tel) {
        let regExEmail = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if (tel.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
}

class ValidatorStatic {

   static isEmail(email) {
        let regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (email.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    static isDomain(domain) {
        let regExEmail = /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/;
        if (domain.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    static isDate(date) {
        let regExEmail = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (date.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
    static isPhone(tel) {
        let regExEmail = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if (tel.match(regExEmail)) {
            return true;
        } else {
            return false
        };
    }
}