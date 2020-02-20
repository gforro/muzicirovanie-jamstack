import React, { useContext } from "react"
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx";

const CourseTemplate = ({data}) => {
//  const {firebase, user} = useContext(FirebaseContext)
  return (
    <>
        <div className="container">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      {/*<BookItem title={title} author={author.name} summary={summary} fixed={localImage.childImageSharp.fixed}/>*/}
      {/*{firebase && <CommentsBox firebase={firebase} user={user} bookId={id}/>}*/}
    </>
  )
}

export default CourseTemplate

export const query = graphql`
    query BookQuery($courseCode: String!) {
        mdx(frontmatter: {code: {eq: $courseCode}}) {
            body
        }
    }
`
