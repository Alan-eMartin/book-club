// import file
const path = require('path');

// create pages is specific to gatsby and it will look out for it if used
exports.createPages = ({graphql, actions}) => {
 const {createPage} = actions;
 const bookTemplate = path.resolve('src/templates/bookTemplate.js');

 return graphql(`
 {
   allBook {
    edges {
      node {
        summary
        title
        id
        localImage {
          publicURL
        }
        author {
          name
        }
      }
    }
  }
}
 `).then((result) => {
   //throw error if no results 
   if(result.errors) {
     throw result.error
   }
// edges reperesents all items/docs within allbook
   result.data.allBook.edges.forEach(book => {
     createPage({
       path: `/book/${book.node.id}`,
       component:bookTemplate,
       context: book.node,
     })
   });

 })
}