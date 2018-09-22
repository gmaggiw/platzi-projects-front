import React from 'react';

function Home(props) {
    return (
        <div className="container" style={{width: "50%"}}>
            <hr />
            <div className="text-center">
                <h3>Bienvenido al prototipo de Platzi Projects</h3>
                <p>A continuación encontrarás una presentación sobre el proyecto.</p>
                <p>Si la presentación no se visualiza bien la puedes encontrar en este
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.canva.com/design/DADDA6KlcoA/jDd-a3QsZk6ggl3xMKje-Q/view?utm_content=DADDA6KlcoA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"> link</a>
                    </p>
                <a role="button" href="/projects" className="btn btn-primary">Ver el prototipo</a>
            </div>
            <hr />
            <div
                dangerouslySetInnerHTML={{__html: '<div class="canva-embed" data-height-ratio="0.75" data-design-id="DADDA6KlcoA" style="padding:75% 5px 5px 5px;background:rgba(0,0,0,0.03);border-radius:8px;"></div><script async src="https://sdk.canva.com/v1/embed.js"></script>'}}
            />
        </div>

    );
}

export default Home;