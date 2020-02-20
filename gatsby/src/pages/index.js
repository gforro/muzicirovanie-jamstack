import React from 'react';
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Card from "../components/card";

const Test = ({data}) => {
    const courses = data.allMdx.edges.map(({node}) => ({
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        imageFluid: node.frontmatter.image.childImageSharp.fluid,
        code: node.frontmatter.code
    }))

    return (
        <>
            <div className="container">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            <hr className="is-invisible"/>
            <div className="container">
                <div className="columns is-centered">
                    {courses.map(({title, description, code, imageFluid}) =>
                        <div className="column is-half is-link" key={code}>
                            <Card title={title} description={description} imageFluid={imageFluid} courseCode={code} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Test;

export const query = graphql`
    query LandingQuery {
        allMdx(
            filter: {frontmatter: {code: {ne: null}}},
            sort: {fields: [frontmatter___order], order: [ASC]}
        ) {
            edges {
                node {
                    frontmatter {
                        title,
                        description,
                        code,
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        mdx(frontmatter: {id: {eq: "landing"}}) {
            body
        }
    }
`
