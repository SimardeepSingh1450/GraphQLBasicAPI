const {UserList}=require('../FakeData');
const resolvers={
    Query:{
        user(){
            return UserList;
        }
    }
}
module.exports={resolvers};