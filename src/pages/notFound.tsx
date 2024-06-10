import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="w-screen h-screen flex justify-center items-center">
            <div className="space-y-5 text-center">
                <h1 className="text-xl font-bold">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}