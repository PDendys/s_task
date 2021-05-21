import React from 'react';

const App: React.FC = () => {
    const [counter, setCounter] = React.useState<string>('');

    React.useEffect(() => {
        console.log(counter);
    }, [counter]);

    return (
        <div>
            Hello World!
        </div>
    )
}

export default App;