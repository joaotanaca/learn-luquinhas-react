/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
    const [mode, setMode] = useState(false);
    const [view, setView] = useState(true);
    const handleSubmit = async (values) => {
        alert(JSON.stringify(values));
    };
    useEffect(() => {
        alert(mode);
    }, [mode]);

    return (
        <>
            <button onClick={() => setMode((prev) => !prev)}>
                {mode ? "dark" : "light"} mode
            </button>
            <button onClick={() => setView((prev) => !prev)}>
                {!view && "no"} render
            </button>
            {view && (
                <Form className={mode && "active"} onSubmit={handleSubmit}>
                    <Input name="name" type="text" label="Nome: " />
                    <Input name="email" type="text" label="Email: " />
                    <Input name="password" type="text" label="Senha: " />
                    <Input
                        name="confirmPassword"
                        type="text"
                        label="Confirmar Senha: "
                    />
                    <button type="submit">Acessar</button>
                </Form>
            )}
        </>
    );
}

export default App;
