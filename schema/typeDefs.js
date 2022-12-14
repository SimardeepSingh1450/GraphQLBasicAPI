const {gql}=require('apollo-server');
const typeDefs=gql`
type User{
    id:ID!,
    name:String!,
    nationality:String!
    }

type Query{
    user:[User!]!
    }
`;

module.exports={typeDefs};