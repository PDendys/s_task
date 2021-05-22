import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const [counter, setCounter] = React.useState<string>('');

    React.useEffect(() => {
        console.log(counter);
    }, [counter]);

    return (
        <div className="container">
            Hello World!
        </div>
    )
}

export default App;