const graphql = require('graphql') 

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const movies = [
    {name: 'Joker', genre: 'Drama', id: '1'},
    {name: 'Moonrise Kingdom', genre: 'Romance', id: '2'},
    {name: 'La La Land', genre: 'Musical', id: '3'},
    {name: 'Interstellar', genre: 'Sci-Fi', id: '4'},
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString },
        genre: {type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: {type: GraphQLString }},
            resolve(parent, args){

            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})