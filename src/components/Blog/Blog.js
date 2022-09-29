import React from 'react';

const Blog = () => {
    return (
        <div>
            <header className='text-center mt-5 border-bottom'>
                <h1>Some questions answer about react</h1>
            </header>
            
            <section className="container mt-4 text-center mb-4">
                <div className="text-secondary" style={{textAlign:"justify"}}>
                    <h4 className="fw-bold">1.How does react work?</h4>
                    <p className="fs-5"><span class="text-primary">Answer:</span> At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>

                    <h4 className="mt-5 fw-bold">2.What is the difference between props and state?</h4>
                    <p className="fs-5"><span class="text-primary">Answer:</span>
                        <table className="table table-bordered border-secondary">
                            <thead>
                                <tr className='text-secondary text-center'>
                                    <th scope="col">PROPS</th>
                                    <th scope="col">STATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-secondary fs-5'>
                                    <td>The Data is passed from one component to another.</td>
                                    <td>The Data is passed within the component only.</td>

                                </tr>
                                <tr className='text-secondary fs-5'>
                                    <td>It is Immutable (cannot be modified).</td>
                                    <td>It is Mutable ( can be modified).</td>
                                </tr>
                                <tr className='text-secondary fs-5'>
                                    <td>Props can be used with state and functional components.</td>
                                    <td>State can be used only with the state components/class component (Before 16.0).</td>
                                </tr>
                                <tr className='text-secondary fs-5'>
                                    <td>Props are read-only.</td>
                                    <td>State is both read and write.</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>

                    <h4 className="fw-bold mt-5">1.What else does useEffect do without loading data?</h4>

                    <p className="fs-5"><span class="text-primary">Answer:</span> The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</p>
                </div>
            </section>
        </div>
    );
};

export default Blog;