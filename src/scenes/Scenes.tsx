import { BrowserRouter, Route, Routes } from "react-router-dom"

export const Scenes: React.FC = ():JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={}/>

            </Routes>
        </BrowserRouter>
    )
}