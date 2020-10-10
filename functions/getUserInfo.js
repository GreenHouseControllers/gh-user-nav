// add modules
const fs = require('fs');

module.exports = {
    GetUserInfo(userListPath, key, params){
        try {
// read user list
            let userListFile = fs.readFileSync(userListPath, 'utf8');
            let userList = JSON.parse(userListFile);
// get user info from userList
            for (i = 0; i < userList.length; i++) {
                if (userList[i][key] == params) return userList[i];
                else return false
            }
        } catch (err) {
            return false;
        }
    }
}