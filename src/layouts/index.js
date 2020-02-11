import React from 'react';
import {MDXProvider} from "@mdx-js/react";
import '../components/style.scss'
//import '../components/debug.css'

const Layout = ({children}) => {
    return (
        <MDXProvider components={{
            h1: props => <h1 {...props} className="title is-1" />,
        }}>
            <section className="hero gradientBg">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">
                            Muzicírovanie
                        </h1>
                        <h2 className="subtitle">
                            Hudba pre deti
                        </h2>
                    </div>
                </div>
            </section>
            <main className="section">
                {children}
            </main>
        </MDXProvider>
    );
};

export default Layout;
