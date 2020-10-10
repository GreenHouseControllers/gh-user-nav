// add modules
const fs = require('fs');

module.exports = {
    CheckUser(userListPath, key, params){
        try {
// read user list
            let userListFile = fs.readFileSync(userListPath, 'utf8');
            let userList = JSON.parse(userListFile);
// finding user the same as in params
            for (i = 0; i < userList.length; i++) {
                if (userList[i][key] == params) return true;
                else return false
            }
        } catch (err) {
            return false;
        }
    }
}