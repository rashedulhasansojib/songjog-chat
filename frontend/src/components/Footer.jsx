import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 py-4 px-6 border-t border-base-300">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <p className="text-sm text-base-content/80">
                            © {currentYear} Rashedul Hasan Sojib. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 