import React from 'react';
import Navbar from './Navbar';

const AppLayout = (WrappedComponent) => {
    return function LayoutComponent(props) {
        return (
            <>
                <Navbar />
                <main>
                    <WrappedComponent {...props} />
                </main>
                <div>
                    footer
                </div>
            </>
        );
    };
};

export default AppLayout;