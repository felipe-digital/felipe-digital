import React from "react";
import ReactDOM from 'react-dom';

const Index = ({}) =>{
    let url = window.location.host;
    let text = '< Bienvenido a felipe.digital />';
    return (
        <section className={'container py-4 h-100'}>
            <h3 className={'fd-title'}>{text}</h3>
        </section>
    );
};

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
