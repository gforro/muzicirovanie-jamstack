import React from 'react';
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Card from "../components/card";

const Test = ({data}) => {
    const courses = data.allMdx.edges.map(({node}) => ({
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        imageFluid: node.frontmatter.image.childImageSharp.fluid
    }))

    return (
        <>
                <div className="container">
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </div>
                <hr class="is-invisible"/>
                <div className="container">
                    <div className="columns is-centered">
                        {courses.map(({title, description, imageFluid}) =>
                            <div className="column is-half is-link">
                                <Card title={title} description={description} imageFluid={imageFluid} />
                            </div>
                        )}
                    </div>
                </div>
        </>
    );
};

export default Test;

export const query = graphql`
    query MyQuery {
        allMdx(
            filter: {frontmatter: {code: {ne: null}}},
            sort: {fields: [frontmatter___order], order: [ASC]}
        ) {
            edges {
                node {
                    frontmatter {
                        title,
                        description,
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
